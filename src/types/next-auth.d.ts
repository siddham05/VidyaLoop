import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: 'teacher' | 'student' | 'parent' | 'admin';
      isVerified: boolean;
    } & DefaultSession['user'];
  }

  interface User {
    role: 'teacher' | 'student' | 'parent' | 'admin';
    isVerified: boolean;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: 'teacher' | 'student' | 'parent' | 'admin';
    isVerified: boolean;
  }
}
