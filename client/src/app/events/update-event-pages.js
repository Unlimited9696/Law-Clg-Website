/**
 * This script helps update all event pages with the new template.
 * 
 * Instructions:
 * 1. Copy this file to your project root
 * 2. Run it with Node.js: node update-event-pages.js
 * 3. It will generate updated code for each event page
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Define the events directory
const eventsDir = path.join(__dirname);

// Get all event folders
const eventFolders = fs.readdirSync(eventsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && dirent.name !== 'node_modules' && dirent.name !== '.next' && !dirent.name.startsWith('.'))
  .map(dirent => dirent.name);

console.log('Found event folders:', eventFolders);

// Template for the updated event page
const getEventPageTemplate = (eventData) => `"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Function to add cache-busting parameter to image URLs
const getRefreshedImageUrl = (imageUrl) => imageUrl;

// Loading component for gallery
const GalleryLoading = () => (
  <div className="mt-8">
    <div className="h-8 bg-gray-200 rounded w-48 mb-4"></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="relative h-48 rounded-lg bg-gray-200"></div>
      ))}
    </div>
  </div>
);

// Gallery component that can be loaded dynamically
const EventGallery = ({ images, title }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img, index) => (
          <div key={index} className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
            <Image 
              src={img} 
              alt={\`\${title} - Photo \${index + 1}\`} 
              fill 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110" 
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFdgIcf2+gLwAAAABJRU5ErkJggg=="
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function EventPage() {
  const [eventImages, setEventImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshedImages, setRefreshedImages] = useState({});
  
  const event = ${JSON.stringify(eventData, null, 2)};

  // Function to refresh all images
  const refreshAllImages = () => {
    const refreshed = {};
    if (eventImages.length > 0) {
      eventImages.forEach((img, index) => {
        refreshed[index] = getRefreshedImageUrl(img);
      });
      setRefreshedImages(refreshed);
    }
  };

  useEffect(() => {
    let isMounted = true;
    
    async function loadImages() {
      try {
        setLoading(true);
        // Use AbortController to cancel fetch if component unmounts
        const controller = new AbortController();
        const signal = controller.signal;
        
        const response = await fetch(\`/api/getEventImages?folder=\${event.folderName}\`, { signal });
        const data = await response.json();
        
        if (isMounted) {
          setEventImages(data.images);
          setLoading(false);
          // Refresh images after loading
          const refreshed = {};
          data.images.forEach((img, index) => {
            refreshed[index] = getRefreshedImageUrl(img);
          });
          setRefreshedImages(refreshed);
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error("Failed to load images:", error);
          // Fallback to at least one image if API fails
          if (isMounted) {
            const fallbackImage = \`\${event.folderPath}/main.jpg\`;
            setEventImages([fallbackImage]);
            setRefreshedImages({ 0: getRefreshedImageUrl(fallbackImage) });
            setLoading(false);
          }
        }
      }
    }
    
    loadImages();
    
    // Set up auto-refresh every 5 minutes
    const intervalId = setInterval(refreshAllImages, 5 * 60 * 1000);
    
    // Cleanup function to handle component unmount
    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, [event.folderPath, event.folderName]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return \`\${day}-\${month}-\${year}\`;
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <Link href="/events" className="inline-flex items-center text-[#233876] hover:text-[#1a2a5a] mb-8 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          Back to Events
        </Link>

        {eventImages.length > 0 ? (
          <div className="relative h-96 rounded-xl overflow-hidden mb-8 group shadow-lg">
            <Image 
              src={refreshedImages[0] || eventImages[0]} 
              alt={event.title} 
              fill 
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover transition-transform duration-500 group-hover:scale-105" 
              priority
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-medium text-sm bg-[#233876]/80 px-3 py-1 rounded-full">
                {formatDate(event.date)}
              </span>
            </div>
          </div>
        ) : (
          <div className="relative h-96 rounded-xl overflow-hidden mb-8 bg-gray-200 flex items-center justify-center shadow-lg">
            <p className="text-gray-500">Loading event images...</p>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{event.title}</h1>
          <div className="flex items-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#233876] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xl text-gray-600">
              <span className="font-medium">Date:</span> {formatDate(event.date)}
            </span>
          </div>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">{event.description}</p>
          
          {/* Photo Gallery with Suspense */}
          {eventImages.length > 1 && (
            <div className="border-t border-gray-100 pt-8">
              <Suspense fallback={<GalleryLoading />}>
                <EventGallery 
                  images={Object.values(refreshedImages).length > 1 
                    ? Object.values(refreshedImages) 
                    : eventImages} 
                  title={event.title} 
                />
              </Suspense>
            </div>
          )}
          
          {/* Refresh Button */}
          <div className="mt-10 flex justify-end">
            <button 
              onClick={refreshAllImages}
              className="bg-[#233876] text-white py-2 px-4 rounded-md hover:bg-[#1a2a5a] transition-colors text-sm flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh Images
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`;

// Function to extract event data from an existing page
const extractEventData = (pageContent) => {
  try {
    // Extract event object using regex
    const eventRegex = /const\s+event\s*=\s*({[\s\S]*?});/;
    const eventMatch = pageContent.match(eventRegex);
    
    if (eventMatch && eventMatch[1]) {
      // Clean up the event object string
      let eventStr = eventMatch[1]
        .replace(/`[\s\S]*?`/g, match => JSON.stringify(match.slice(1, -1))) // Handle template literals
        .replace(/(\w+):/g, '"$1":') // Convert property names to strings
        .replace(/'/g, '"'); // Replace single quotes with double quotes
      
      // Parse the event object
      const eventData = JSON.parse(eventStr);
      
      // Add folderName property if it doesn't exist
      if (!eventData.folderName) {
        // Extract folder name from folderPath
        const folderPathParts = eventData.folderPath.split('/');
        eventData.folderName = folderPathParts[folderPathParts.length - 1];
      }
      
      return eventData;
    }
  } catch (error) {
    console.error('Error extracting event data:', error);
  }
  
  return null;
};

// Process each event folder
eventFolders.forEach(folder => {
  try {
    const pagePath = path.join(eventsDir, folder, 'page.js');
    
    // Check if page.js exists
    if (fs.existsSync(pagePath)) {
      console.log(`Processing ${folder}...`);
      
      // Read the existing page
      const pageContent = fs.readFileSync(pagePath, 'utf8');
      
      // Extract event data
      const eventData = extractEventData(pageContent);
      
      if (eventData) {
        // Generate updated page content
        const updatedPageContent = getEventPageTemplate(eventData);
        
        // Create backup
        const backupPath = path.join(eventsDir, folder, 'page.js.bak');
        fs.writeFileSync(backupPath, pageContent);
        
        // Write updated page
        fs.writeFileSync(pagePath, updatedPageContent);
        
        console.log(`✅ Updated ${folder}`);
      } else {
        console.log(`❌ Could not extract event data from ${folder}`);
      }
    }
  } catch (error) {
    console.error(`Error processing ${folder}:`, error);
  }
});

console.log('Done! All event pages have been updated.'); 