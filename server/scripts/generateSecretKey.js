const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Generate a secure random key
const secretKey = crypto.randomBytes(64).toString('hex');

// Read existing .env file
const envPath = path.join(__dirname, '..', '.env');
let envContent = '';

try {
    envContent = fs.readFileSync(envPath, 'utf8');
} catch (error) {
    // If .env doesn't exist, create it with default values
    envContent = `PORT=3000
MONGODB_URI=mongodb://localhost:27017/law-college
FRONTEND_URI=http://localhost:3000
NODE_ENV=development
`;
}

// Update or add JWT_SECRET
if (envContent.includes('JWT_SECRET=')) {
    envContent = envContent.replace(/JWT_SECRET=.*\n/, `JWT_SECRET=${secretKey}\n`);
} else {
    envContent += `JWT_SECRET=${secretKey}\n`;
}

// Write back to .env file
fs.writeFileSync(envPath, envContent);

console.log('Generated and saved new JWT Secret Key');
console.log('Please keep this key secure and never share it!'); 