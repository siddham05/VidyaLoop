# VidyaLoop Login Troubleshooting Guide

## 🚨 Login Issue Resolution

Based on the investigation, here are the potential causes and solutions for login issues:

## ✅ Database Setup (COMPLETED)
- **Status**: ✅ MongoDB connection is working
- **Test Users Created**:
  - **Teacher**: `teacher@test.com` / `password123`
  - **Student**: `student@test.com` / `password123`
  - **Parent**: `parent@test.com` / `password123`

## 🔧 Common Login Issues & Solutions

### 1. Environment Variables
**Check your `.env.local` file has:**
```bash
MONGODB_URI=mongodb://localhost:27017/vidyaloop
NEXTAUTH_URL=http://localhost:3001  # Note: Port 3001 (not 3000)
NEXTAUTH_SECRET=your-secret-key-here
```

### 2. Server Port Issue
- Server is running on **port 3001** (not 3000)
- Make sure you're accessing: `http://localhost:3001/auth/login`

### 3. NextAuth Configuration
The authentication is configured correctly with:
- ✅ Credentials provider
- ✅ Password hashing with bcrypt
- ✅ Role-based redirects
- ✅ Session management

### 4. User Role Selection
**Important**: You must select a role before logging in:
1. Go to `http://localhost:3001/auth/login`
2. **Click on one of the role cards** (Teacher, Student, or Parent)
3. Enter credentials
4. Click "Sign In"

## 🧪 Test Credentials

### Teacher Login
- **Email**: `teacher@test.com`
- **Password**: `password123`
- **Role**: Select "Teacher"
- **Redirects to**: `/teachers/dashboard`

### Student Login
- **Email**: `student@test.com`
- **Password**: `password123`
- **Role**: Select "Student"
- **Redirects to**: `/students/dashboard`

### Parent Login
- **Email**: `parent@test.com`
- **Password**: `password123`
- **Role**: Select "Parent"
- **Redirects to**: `/parents/dashboard`

## 🐛 Debugging Steps

### Step 1: Check Browser Console
1. Open Developer Tools (F12)
2. Go to Console tab
3. Try logging in
4. Look for any JavaScript errors

### Step 2: Check Network Tab
1. Open Developer Tools (F12)
2. Go to Network tab
3. Try logging in
4. Look for failed requests to `/api/auth/`

### Step 3: Check Server Logs
The development server should show logs when you attempt to login. Look for:
- Database connection errors
- Authentication errors
- Password validation errors

## 🚨 Most Common Issues

### Issue 1: Role Not Selected
**Symptom**: Login form appears but nothing happens when clicking "Sign In"
**Solution**: Make sure to click on a role card (Teacher/Student/Parent) first

### Issue 2: Wrong Port
**Symptom**: Page doesn't load or shows connection error
**Solution**: Use `http://localhost:3001` instead of `http://localhost:3000`

### Issue 3: Environment Variables
**Symptom**: Internal server error or database connection error
**Solution**: Check `.env.local` file exists and has correct MONGODB_URI

### Issue 4: Password Issues
**Symptom**: "Invalid credentials" message
**Solution**: 
- Use test credentials: `teacher@test.com` / `password123`
- Make sure caps lock is off
- Clear browser cache/cookies

## 🔄 Quick Fix Steps

1. **Stop the server** (Ctrl+C in terminal)
2. **Clear browser cache** and cookies for localhost
3. **Restart the server**: `npm run dev`
4. **Navigate to**: `http://localhost:3001/auth/login`
5. **Select a role** by clicking on Teacher/Student/Parent card
6. **Use test credentials**: 
   - Email: `teacher@test.com`
   - Password: `password123`
7. **Click Sign In**

## 📞 If Still Having Issues

If you're still unable to login, please check:

1. **Browser Console Errors**: Any red error messages?
2. **Network Requests**: Are API calls being made to `/api/auth/`?
3. **Server Terminal**: Any error messages in the development server?
4. **Environment File**: Does `.env.local` exist with correct MongoDB URI?

## 🎯 Expected Behavior

**Successful Login Flow**:
1. Visit login page → Role selection cards appear
2. Click on role card → Card becomes highlighted with orange border
3. Enter credentials → Form fields are filled
4. Click "Sign In" → Loading state appears
5. Redirect happens → Navigate to role-specific dashboard

The authentication system is properly configured and test users are available. The issue is likely one of the common problems listed above.
