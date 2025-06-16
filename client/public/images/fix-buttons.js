/**
 * This script fixes the button functionality in all event pages
 * by replacing onClick handlers with Link components.
 */

const fs = require('fs');
const path = require('path');

// Define the events directory
const eventsDir = path.join(__dirname);

// Get all event folders
const eventFolders = fs.readdirSync(eventsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && dirent.name !== 'node_modules' && dirent.name !== '.next' && !dirent.name.startsWith('.'))
  .map(dirent => dirent.name);

console.log('Found event folders:', eventFolders);

// Process each event folder
eventFolders.forEach(folder => {
  try {
    const pagePath = path.join(eventsDir, folder, 'page.js');
    
    // Check if page.js exists
    if (fs.existsSync(pagePath)) {
      console.log(`Processing ${folder}...`);
      
      // Read the existing page
      let pageContent = fs.readFileSync(pagePath, 'utf8');
      
      // Check if the file imports useRouter
      if (pageContent.includes('import { useRouter } from \'next/navigation\';')) {
        // Replace the useRouter import
        pageContent = pageContent.replace('import { useRouter } from \'next/navigation\';', '');
        
        // Remove the router declaration
        pageContent = pageContent.replace('const router = useRouter();', '');
        
        // Save the changes
        fs.writeFileSync(pagePath, pageContent);
        console.log(`✅ Removed router from ${folder}`);
      }
      
      // Check if the file has button with onClick handlers
      if (pageContent.includes('onClick={() => router.push(') || 
          pageContent.includes('onClick={() => handleNavigation(')) {
        
        // Replace onClick handlers with Link components
        pageContent = pageContent.replace(
          /<button\s+onClick={\(\)\s*=>\s*(?:router\.push|handleNavigation)\(([^)]+)\)}\s+className="([^"]+)"\s*>([\s\S]*?)<\/button>/g,
          '<Link href=$1 className="$2">$3</Link>'
        );
        
        // Remove handleNavigation function if it exists
        pageContent = pageContent.replace(
          /\/\/\s*Handle navigation with prefetching\s*const handleNavigation\s*=\s*\(path\)\s*=>\s*{\s*router\.push\(path\);\s*};/g,
          ''
        );
        
        // Save the changes
        fs.writeFileSync(pagePath, pageContent);
        console.log(`✅ Fixed buttons in ${folder}`);
      }
    }
  } catch (error) {
    console.error(`Error processing ${folder}:`, error);
  }
});

console.log('Done! All event pages have been updated.'); 