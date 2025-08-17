// Test login functionality directly
const bcrypt = require('bcryptjs');

async function testLogin() {
  const testCredentials = [
    { email: 'teacher@test.com', password: 'password123', role: 'teacher' },
    { email: 'student@test.com', password: 'password123', role: 'student' },
    { email: 'parent@test.com', password: 'password123', role: 'parent' }
  ];

  console.log('🧪 Testing login credentials...\n');

  for (const cred of testCredentials) {
    try {
      const response = await fetch('http://localhost:3001/api/auth/callback/credentials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: cred.email,
          password: cred.password,
          role: cred.role,
          redirect: 'false'
        })
      });

      console.log(`Testing ${cred.role} login:`);
      console.log(`Email: ${cred.email}`);
      console.log(`Password: ${cred.password}`);
      console.log(`Response Status: ${response.status}`);
      
      if (response.ok) {
        console.log('✅ Login should work');
      } else {
        console.log('❌ Login might fail');
        const text = await response.text();
        console.log('Response:', text.substring(0, 100) + '...');
      }
      console.log('---\n');

    } catch (error) {
      console.error(`❌ Error testing ${cred.role} login:`, error.message);
    }
  }

  // Test password hashing
  console.log('🔐 Testing password hashing...');
  const testPassword = 'password123';
  const hash = await bcrypt.hash(testPassword, 12);
  const isValid = await bcrypt.compare(testPassword, hash);
  console.log(`Password: ${testPassword}`);
  console.log(`Hash: ${hash}`);
  console.log(`Validation: ${isValid ? '✅ Valid' : '❌ Invalid'}`);
}

testLogin().catch(console.error);
