import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/db';
import mongoose from 'mongoose';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    // Force model recreation to ensure latest schema
    if (mongoose.models.User) {
      delete mongoose.models.User;
    }
    
    // Re-import to get fresh model
    const { User: FreshUser } = await import('@/lib/models');
    
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      password,
      role,
      // Role-specific fields
      qualifications,
      experience,
      subjects,
      teachingMode,
      class: studentClass,
      school,
      board,
      children
      // city and state removed as unused
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !password || !role) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await FreshUser.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'User with this email already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    console.log('Password hashed, length:', hashedPassword.length);

    // Create user profile based on role
    let userProfile = {};
    
    if (role === 'teacher') {
      userProfile = {
        qualifications,
        experience,
        subjects: subjects || [],
        teachingMode: teachingMode || [],
        verification: {
          status: 'pending',
          documents: []
        },
        rating: 0,
        totalStudents: 0,
        totalCourses: 0
      };
    } else if (role === 'student') {
      userProfile = {
        class: studentClass,
        school,
        board,
        enrolledCourses: [],
        progress: {}
      };
    } else if (role === 'parent') {
      userProfile = {
        children: children || [],
        linkedStudents: []
      };
    }

    // Create new user
    const newUser = new FreshUser({
      name: `${firstName} ${lastName}`,
      email,
      phone,
      password: hashedPassword,
      role,
      isVerified: false,
      profile: userProfile
    });

    console.log('User object before save:', {
      name: newUser.name,
      email: newUser.email,
      hasPassword: !!newUser.password,
      passwordLength: newUser.password ? newUser.password.length : 0
    });

    await newUser.save();
    
    console.log('User saved, checking again:', {
      hasPassword: !!newUser.password,
      passwordLength: newUser.password ? newUser.password.length : 0
    });

    // Remove password from response
    const userResponse = {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      isVerified: newUser.isVerified
    };

    return NextResponse.json(
      { 
        message: 'User registered successfully',
        user: userResponse
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
