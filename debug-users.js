// Database debug script
import connectDB from './src/lib/db.js';
import { User } from './src/lib/models/index.js';

async function debugUsers() {
  try {
    await connectDB();
    console.log('Connected to database');
    
    // Find all users
    const users = await User.find({});
    console.log(`Found ${users.length} users:`);
    
    users.forEach((user, index) => {
      console.log(`\nUser ${index + 1}:`);
      console.log(`- ID: ${user._id}`);
      console.log(`- Name: ${user.name}`);
      console.log(`- Email: ${user.email}`);
      console.log(`- Role: ${user.role}`);
      console.log(`- Has Password: ${!!user.password}`);
      console.log(`- Password length: ${user.password ? user.password.length : 'N/A'}`);
      console.log(`- Is Verified: ${user.isVerified}`);
    });
    
    // Find users without passwords
    const usersWithoutPassword = await User.find({ 
      $or: [
        { password: { $exists: false } },
        { password: null },
        { password: '' }
      ]
    });
    
    console.log(`\nUsers without password: ${usersWithoutPassword.length}`);
    usersWithoutPassword.forEach(user => {
      console.log(`- ${user.email} (${user.name})`);
    });
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    process.exit(0);
  }
}

debugUsers();
