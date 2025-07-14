import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { User } from '@/lib/models';

export async function GET() {
  try {
    await connectDB();
    
    // Find all users
    const users = await User.find({}).select('name email role password isVerified createdAt');
    
    const debugInfo = {
      totalUsers: users.length,
      users: users.map(user => ({
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
        hasPassword: !!user.password,
        passwordLength: user.password ? user.password.length : 0,
        isVerified: user.isVerified,
        createdAt: user.createdAt
      })),
      usersWithoutPassword: users.filter(user => !user.password).map(user => ({
        email: user.email,
        name: user.name,
        id: user._id.toString()
      }))
    };
    
    return NextResponse.json(debugInfo);
  } catch (error) {
    console.error('Debug error:', error);
    return NextResponse.json(
      { error: 'Failed to debug users' },
      { status: 500 }
    );
  }
}
