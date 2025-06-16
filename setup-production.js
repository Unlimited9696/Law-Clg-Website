const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Create .env.local file for Next.js client
const setupNextEnv = (apiUrl) => {
  const envContent = `# Production API URL
NEXT_PUBLIC_API_URL=${apiUrl}
`;

  const envPath = path.join(__dirname, 'client', '.env.local');
  
  try {
    fs.writeFileSync(envPath, envContent);
    console.log(`✅ Created .env.local file at ${envPath}`);
  } catch (error) {
    console.error(`❌ Error creating .env.local file: ${error.message}`);
  }
};

// Create or update CORS settings in server
const setupServerCors = (domain) => {
  const serverPath = path.join(__dirname, 'server', 'server.js');
  
  try {
    let serverContent = fs.readFileSync(serverPath, 'utf8');
    
    // Check if CORS is already configured
    if (serverContent.includes('app.use(cors(')) {
      console.log('⚠️ CORS configuration already exists in server.js');
      console.log('Please manually update the CORS configuration to include:');
      console.log(`origin: ['http://localhost:3000', 'http://${domain}', 'https://${domain}']`);
    } else {
      // Simple replacement - this is basic and might need manual adjustment
      const corsImport = "const cors = require('cors');";
      const corsConfig = `
app.use(cors({
  origin: ['http://localhost:3000', 'http://${domain}', 'https://${domain}'],
  credentials: true
}));
`;
      
      // Add cors import if not present
      if (!serverContent.includes("require('cors')")) {
        serverContent = serverContent.replace(
          /const express = require\('express'\);/,
          `const express = require('express');\n${corsImport}`
        );
      }
      
      // Add cors configuration after express app initialization
      serverContent = serverContent.replace(
        /const app = express\(\);/,
        `const app = express();\n${corsConfig}`
      );
      
      fs.writeFileSync(serverPath, serverContent);
      console.log(`✅ Updated CORS configuration in ${serverPath}`);
    }
  } catch (error) {
    console.error(`❌ Error updating server CORS: ${error.message}`);
  }
};

// Main setup function
const setupProduction = () => {
  console.log('🚀 Setting up production configuration for SSNLC Website');
  
  rl.question('Enter your domain name (e.g., ssnlc.in): ', (domain) => {
    rl.question('Enter your backend API URL (e.g., http://ssnlc.in:5000/api/:path*): ', (apiUrl) => {
      setupNextEnv(apiUrl);
      setupServerCors(domain);
      
      console.log('\n✅ Production setup complete!');
      console.log('\nNext steps:');
      console.log('1. Review the changes in client/.env.local and server/server.js');
      console.log('2. Build the Next.js frontend: cd client && npm run build');
      console.log('3. Start the backend server: cd server && npm start');
      console.log('4. Start the Next.js production server: cd client && npm start');
      console.log('\nFor more details, see deployment-guide.md');
      
      rl.close();
    });
  });
};

setupProduction(); 