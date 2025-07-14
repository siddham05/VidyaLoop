import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { User } from '@/lib/models';

export async function DELETE() {
  try {
    await connectDB();
    
    // Delete users without passwords
    const result = await User.deleteMany({
      $or: [
        { password: { $exists: false } },
        { password: null },
        { password: '' }
      ]
    });
    
    return NextResponse.json({
      message: `Deleted ${result.deletedCount} users without passwords`,
      deletedCount: result.deletedCount
    });
  } catch (error) {
    console.error('Cleanup error:', error);
    return NextResponse.json(
      { error: 'Failed to cleanup users' },
      { status: 500 }
    );
  }
}
