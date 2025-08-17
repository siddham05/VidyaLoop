// Test database connection and create test users
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// MongoDB URI - you'll need to set this
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/vidyaloop';

// User schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  role: { 
    type: String, 
    enum: ['teacher', 'student', 'parent', 'admin'], 
    required: true 
  },
  image: { type: String },
  isVerified: { type: Boolean, default: false }
}, {
  timestamps: true
});

const User = mongoose.model('User', UserSchema);

async function testConnection() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB successfully!');

    // Check if test users exist
    const teacherUser = await User.findOne({ email: 'teacher@test.com' });
    const studentUser = await User.findOne({ email: 'student@test.com' });
    const parentUser = await User.findOne({ email: 'parent@test.com' });

    // Create test users if they don't exist
    if (!teacherUser) {
      const hashedPassword = await bcrypt.hash('password123', 12);
      const newTeacher = new User({
        name: 'Test Teacher',
        email: 'teacher@test.com',
        password: hashedPassword,
        role: 'teacher',
        isVerified: true
      });
      await newTeacher.save();
      console.log('✅ Created test teacher user: teacher@test.com / password123');
    } else {
      console.log('✅ Test teacher user already exists: teacher@test.com');
    }

    if (!studentUser) {
      const hashedPassword = await bcrypt.hash('password123', 12);
      const newStudent = new User({
        name: 'Test Student',
        email: 'student@test.com',
        password: hashedPassword,
        role: 'student',
        isVerified: true
      });
      await newStudent.save();
      console.log('✅ Created test student user: student@test.com / password123');
    } else {
      console.log('✅ Test student user already exists: student@test.com');
    }

    if (!parentUser) {
      const hashedPassword = await bcrypt.hash('password123', 12);
      const newParent = new User({
        name: 'Test Parent',
        email: 'parent@test.com',
        password: hashedPassword,
        role: 'parent',
        isVerified: true
      });
      await newParent.save();
      console.log('✅ Created test parent user: parent@test.com / password123');
    } else {
      console.log('✅ Test parent user already exists: parent@test.com');
    }

    // List all users
    const allUsers = await User.find({});
    console.log(`\n📊 Total users in database: ${allUsers.length}`);
    
    allUsers.forEach(user => {
      console.log(`- ${user.name} (${user.email}) - Role: ${user.role} - Verified: ${user.isVerified}`);
    });

  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    
    if (error.message.includes('MONGODB_URI')) {
      console.log('\n🔧 To fix this:');
      console.log('1. Install MongoDB locally or use MongoDB Atlas');
      console.log('2. Create a .env.local file in your project root');
      console.log('3. Add: MONGODB_URI=your_mongodb_connection_string');
      console.log('\nFor local MongoDB: MONGODB_URI=mongodb://localhost:27017/vidyaloop');
      console.log('For MongoDB Atlas: MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/vidyaloop');
    }
  } finally {
    await mongoose.disconnect();
    console.log('\n🔒 Disconnected from MongoDB');
  }
}

testConnection();
