const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);
const access = promisify(fs.access);

const eventsDir = path.join(process.cwd(), 'src', 'app', 'events');
const publicImagesDir = path.join(process.cwd(), '..', 'public', 'images', 'events');

console.log('Events directory:', eventsDir);
console.log('Public images directory:', publicImagesDir);

async function directoryExists(dirPath) {
  try {
    await access(dirPath, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
}

async function getDirectImages(eventFolderName) {
  try {
    const eventImagesDir = path.join(publicImagesDir, eventFolderName);
    console.log(`Looking for images in: ${eventImagesDir}`);
    
    if (!(await directoryExists(eventImagesDir))) {
      console.log(`Directory doesn't exist: ${eventImagesDir}`);
      return [];
    }
    
    const files = await readdir(eventImagesDir);
    console.log(`Found ${files.length} files in ${eventImagesDir}`);
    
    const imageFiles = files.filter(file => 
      file.endsWith('.jpg') || 
      file.endsWith('.jpeg') || 
      file.endsWith('.png') || 
      file.endsWith('.gif')
    );
    
    console.log(`Found ${imageFiles.length} image files: ${imageFiles.join(', ')}`);
    return imageFiles;
  } catch (error) {
    console.error(`Error reading images for ${eventFolderName}:`, error);
    return [];
  }
}

async function updateEventPage(eventDir) {
  try {
    const pagePath = path.join(eventsDir, eventDir, 'page.js');
    console.log(`Checking page at: ${pagePath}`);
    
    if (!(await directoryExists(path.dirname(pagePath)))) {
      console.log(`Directory doesn't exist: ${path.dirname(pagePath)}`);
      return;
    }
    
    try {
      await access(pagePath, fs.constants.F_OK);
    } catch (error) {
      console.log(`File doesn't exist: ${pagePath}`);
      return;
    }
    
    const stats = await stat(pagePath);
    
    if (!stats.isFile()) {
      console.log(`Not a file: ${pagePath}`);
      return;
    }
    
    console.log(`Updating ${eventDir}...`);
    
    let content = await readFile(pagePath, 'utf8');
    
    // Get the event folder name from the content
    const folderPathMatch = content.match(/folderPath: "([^"]+)"/);
    if (!folderPathMatch) {
      console.log(`Could not find folderPath in ${eventDir}, skipping...`);
      return;
    }
    
    const folderPath = folderPathMatch[1];
    const eventFolderName = folderPath.split('/').pop();
    console.log(`Found event folder name: ${eventFolderName}`);
    
    // Get images from the public directory
    const images = await getDirectImages(eventDir);
    
    if (images.length === 0) {
      console.log(`No images found for ${eventDir}, skipping...`);
      return;
    }
    
    // Create import statements
    const importStatements = images.map((img, i) => 
      `import image${i + 1} from '../../../../public/images/events/${eventDir}/${img}';`
    ).join('\n');
    
    // Create image array
    const imageArray = images.length > 0 
      ? `[${images.map((_, i) => `image${i + 1}`).join(', ')}]`
      : '[]';
    
    // Replace imports section
    content = content.replace(
      /import React.*?from 'next\/link';/s,
      `import React, { useState, useEffect } from 'react';\nimport Image from 'next/image';\nimport Link from 'next/link';\n\n// Import images directly\n${importStatements}`
    );
    
    // Replace useEffect section
    content = content.replace(
      /useEffect\(\s*\(\)\s*=>\s*{[\s\S]*?}\s*,\s*\[[^\]]*\]\);/,
      `useEffect(() => {
    // Use the imported images
    setEventImages(${imageArray});
  }, []);`
    );
    
    // Replace Image components
    content = content.replace(
      /fill\s*sizes="[^"]*"/g,
      'width={1200}\n              height={800}'
    );
    
    content = content.replace(
      /className="object-cover transition-transform/g,
      'className="object-cover w-full h-full transition-transform'
    );
    
    // Replace second Image component
    content = content.replace(
      /fill\s*sizes="[^"]*"/g,
      'width={400}\n                      height={300}'
    );
    
    await writeFile(pagePath, content, 'utf8');
    console.log(`Updated ${eventDir} successfully!`);
    
  } catch (error) {
    console.error(`Error updating ${eventDir}:`, error);
  }
}

async function main() {
  try {
    if (!(await directoryExists(eventsDir))) {
      console.error(`Events directory doesn't exist: ${eventsDir}`);
      return;
    }
    
    const dirs = await readdir(eventsDir);
    console.log(`Found ${dirs.length} directories in events folder`);
    
    for (const dir of dirs) {
      const fullPath = path.join(eventsDir, dir);
      
      try {
        const stats = await stat(fullPath);
        
        if (stats.isDirectory() && dir !== '[id]' && dir !== 'Ambedkar-Jayant') {
          console.log(`Processing directory: ${dir}`);
          await updateEventPage(dir);
        }
      } catch (error) {
        console.error(`Error processing ${dir}:`, error);
      }
    }
    
    console.log('All event pages updated successfully!');
  } catch (error) {
    console.error('Error:', error);
  }
}

main(); 