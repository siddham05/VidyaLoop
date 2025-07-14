// Simple MongoDB connection test
const mongoose = require('mongoose');

async function testConnection() {
  try {
    const MONGODB_URI = 'mongodb://localhost:27017/vidyaloop';
    console.log('Attempting to connect to:', MONGODB_URI);
    
    await mongoose.connect(MONGODB_URI);
    console.log('✅ MongoDB connection successful!');
    
    // Test database operations
    const testCollection = mongoose.connection.db.collection('test');
    await testCollection.insertOne({ test: 'Hello MongoDB!', timestamp: new Date() });
    console.log('✅ Database write test successful!');
    
    const result = await testCollection.findOne({ test: 'Hello MongoDB!' });
    console.log('✅ Database read test successful!', result);
    
    await testCollection.deleteOne({ test: 'Hello MongoDB!' });
    console.log('✅ Database delete test successful!');
    
    await mongoose.connection.close();
    console.log('✅ Connection closed successfully!');
    
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }
  }
}

testConnection();
