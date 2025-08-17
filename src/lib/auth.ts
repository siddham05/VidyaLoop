import NextAuth, { NextAuthOptions, User as NextAuthUser, Account } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/db';
import { User } from '@/lib/models';
import { JWT } from 'next-auth/jwt';
import { Session } from 'next-auth';
import mongoose from 'mongoose';

interface ExtendedUser extends NextAuthUser {
  role: 'teacher' | 'student' | 'parent' | 'admin';
  isVerified: boolean;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
        role: { label: 'Role', type: 'text' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          await connectDB();
          
          // Force model recreation for fresh schema
          if (mongoose.models.User) {
            delete mongoose.models.User;
          }
          
          const { User: FreshUser } = await import('@/lib/models');
          const user = await FreshUser.findOne({ email: credentials.email });

          if (!user) {
            console.log('User not found for email:', credentials.email);
            return null;
          }

          if (!user.password) {
            console.log('User password is undefined for:', credentials.email);
            return null;
          }

          const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

          if (!isPasswordValid) {
            console.log('Invalid password for:', credentials.email);
            return null;
          }

          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            role: user.role,
            image: user.image || null,
            isVerified: user.isVerified || false
          } as ExtendedUser;
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    })
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Default redirect paths based on role
      const redirectPaths = {
        teacher: '/teachers/dashboard',
        student: '/students/dashboard', 
        parent: '/parents/dashboard',
        admin: '/admin'
      };
      
      // If redirecting to base URL or auth pages, redirect to teacher dashboard by default
      if (url === baseUrl || url.includes('/auth/')) {
        return redirectPaths.teacher;
      }
      
      // Allow same-origin redirects
      if (url.startsWith(baseUrl)) {
        return url;
      }
      
      // Default fallback to teacher dashboard
      return baseUrl + redirectPaths.teacher;
    },
    async jwt({ token, user, account }: { token: JWT; user?: ExtendedUser; account?: Account | null }) {
      if (user) {
        token.role = user.role;
        token.isVerified = user.isVerified ?? false;
      }
      
      // Handle social login
      if (account?.provider === 'google' || account?.provider === 'facebook') {
        try {
          await connectDB();
          const existingUser = await User.findOne({ email: token.email });
          
          if (!existingUser) {
            // Create new user for social login
            const newUser = new User({
              firstName: token.name?.split(' ')[0] || '',
              lastName: token.name?.split(' ').slice(1).join(' ') || '',
              email: token.email,
              role: 'student', // Default role for social login
              profileImage: token.picture,
              isActive: true,
              isVerified: true, // Auto-verify social logins
              createdAt: new Date(),
              profile: {
                enrolledCourses: [],
                progress: {}
              }
            });
            
            await newUser.save();
            token.role = 'student';
            token.isVerified = true;
          } else {
            token.role = existingUser.role;
            token.isVerified = existingUser.isVerified;
          }
        } catch (error) {
          console.error('Social login error:', error);
        }
      }
      
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token && session.user) {
        (session.user as ExtendedUser).id = token.sub as string;
        (session.user as ExtendedUser).role = token.role as 'teacher' | 'student' | 'parent' | 'admin';
        (session.user as ExtendedUser).isVerified = token.isVerified as boolean;
      }
      return session;
    }
  },
  pages: {
    signIn: '/auth/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
