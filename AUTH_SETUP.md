# Authentication System Setup Guide

## Overview
VidyaLoop includes a comprehensive role-based authentication system supporting:
- **User Roles**: Teachers, Students, Parents, and Admins
- **Authentication Methods**: Email/password and social login (Google, Facebook)
- **Features**: Multi-step signup, password recovery, role-based redirects

## Quick Start

### 1. Environment Configuration
Copy `.env.example` to `.env.local` and update the following:

```bash
# Required for basic auth
MONGODB_URI=mongodb://localhost:27017/vidyaloop
NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_SECRET=your-secret-key-here

# Optional for social login
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
FACEBOOK_CLIENT_ID=your-facebook-client-id
FACEBOOK_CLIENT_SECRET=your-facebook-client-secret
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

## Authentication Pages

### Login Page (`/auth/login`)
- Role selection (Teacher, Student, Parent, Admin)
- Email/password login
- Social login buttons (Google, Facebook)
- "Remember me" option
- Link to signup and forgot password

### Signup Page (`/auth/signup`)
**Step 1: Role Selection**
- Choose user type: Teacher, Student, or Parent

**Step 2: Personal Information**
- Name, email, password, phone number
- Role-specific fields (subjects for teachers, grade for students, etc.)

**Step 3: Additional Information**
- Bio, experience, preferences
- Profile picture upload (optional)

### Forgot Password (`/auth/forgot-password`)
- Email verification
- Password reset flow

## API Endpoints

### Registration (`/api/auth/register`)
- Validates user data
- Hashes passwords with bcryptjs
- Creates user and role-specific profile
- Returns success/error response

## Social Login Setup

### Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3001/api/auth/callback/google`
   - `https://yourdomain.com/api/auth/callback/google` (production)
6. Copy Client ID and Secret to `.env.local`

### Facebook OAuth Setup
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app
3. Add Facebook Login product
4. Configure OAuth redirect URIs:
   - `http://localhost:3001/api/auth/callback/facebook`
   - `https://yourdomain.com/api/auth/callback/facebook` (production)
5. Copy App ID and Secret to `.env.local`

## Database Schema

### User Model
```typescript
{
  _id: ObjectId,
  name: string,
  email: string,
  password: string, // hashed with bcryptjs
  role: 'teacher' | 'student' | 'parent' | 'admin',
  profileId: ObjectId, // references role-specific profile
  isVerified: boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Role-Specific Profiles
- **TeacherProfile**: subjects, experience, qualifications, hourlyRate
- **StudentProfile**: grade, school, subjects, interests
- **ParentProfile**: children, contactPreferences

## Security Features

1. **Password Hashing**: bcryptjs with salt rounds
2. **Session Management**: NextAuth.js JWT tokens
3. **Role-Based Access**: Middleware for protected routes
4. **Input Validation**: Server-side validation for all forms
5. **CSRF Protection**: Built into NextAuth.js

## Role-Based Redirects

After successful login, users are redirected based on their role:
- **Teachers**: `/dashboard` (teacher dashboard)
- **Students**: `/dashboard` (student dashboard)
- **Parents**: `/parents` (parent portal)
- **Admins**: `/admin` (admin panel)

## Testing the System

1. **Start the application**: `npm run dev`
2. **Navigate to**: `http://localhost:3001/auth/signup`
3. **Test signup flow**:
   - Select a role
   - Fill in personal information
   - Complete additional details
   - Verify account creation
4. **Test login**:
   - Navigate to `/auth/login`
   - Try credential login
   - Test social login (if configured)
5. **Test forgot password**:
   - Navigate to `/auth/forgot-password`
   - Enter email address
   - Check email flow

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check connection string in `.env.local`

2. **NextAuth Configuration Error**
   - Verify `NEXTAUTH_URL` matches your dev server
   - Ensure `NEXTAUTH_SECRET` is set

3. **Social Login Not Working**
   - Check OAuth credentials
   - Verify redirect URIs in provider settings
   - Ensure providers are enabled in `auth.ts`

4. **TypeScript Errors**
   - Run `npm run build` to check for compilation errors
   - Ensure all dependencies are installed

### Development Tips

- Use MongoDB Compass to inspect database
- Check browser network tab for API errors
- Use NextAuth.js debug mode in development
- Test with different user roles to verify role-based features

## Next Steps

1. **Email Verification**: Implement email verification for new accounts
2. **Password Reset**: Complete forgot password email flow
3. **Profile Management**: Add profile editing capabilities
4. **Admin Dashboard**: Implement user management features
5. **Advanced Security**: Add 2FA, rate limiting, and audit logs

## File Structure

```
src/
├── app/
│   └── auth/
│       ├── login/page.tsx          # Login page
│       ├── signup/page.tsx         # Signup page
│       └── forgot-password/page.tsx # Password recovery
├── api/
│   └── auth/
│       ├── [...nextauth]/route.ts  # NextAuth configuration
│       └── register/route.ts       # Registration API
├── lib/
│   ├── auth.ts                     # NextAuth setup
│   ├── db.ts                       # Database connection
│   └── models/
│       └── index.ts                # User models
└── types/
    └── next-auth.d.ts              # NextAuth type extensions
```
