import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Cache for storing image lists by folder
const imageCache = new Map();
const CACHE_DURATION = 3600000; // 1 hour in milliseconds

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get('folder');
    
    if (!folder) {
      return NextResponse.json({ error: 'Folder parameter is required' }, { status: 400 });
    }

    // Check cache first
    const cacheKey = `images_${folder}`;
    const cachedData = imageCache.get(cacheKey);
    
    if (cachedData && (Date.now() - cachedData.timestamp < CACHE_DURATION)) {
      // Return cached data if it's still valid
      return NextResponse.json({ 
        images: cachedData.images,
        cached: true
      }, {
        headers: {
          'Cache-Control': 'public, max-age=3600',
          'Content-Type': 'application/json',
        }
      });
    }
    
    const folderPath = path.join(process.cwd(), 'public', 'images', 'events', folder);
    
    // Check if directory exists
    if (!fs.existsSync(folderPath)) {
      const defaultImage = `/images/events/${folder}/main.jpg`;
      
      // Store in cache
      imageCache.set(cacheKey, {
        images: [defaultImage],
        timestamp: Date.now()
      });
      
      return NextResponse.json({ 
        images: [defaultImage],
        message: 'Folder not found, using default image'
      }, {
        headers: {
          'Cache-Control': 'public, max-age=3600',
          'Content-Type': 'application/json',
        }
      });
    }
    
    // Get all files in the directory
    const files = fs.readdirSync(folderPath);
    
    // Filter only image files and sort them
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const imageFiles = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return imageExtensions.includes(ext);
      })
      .sort((a, b) => {
        // Sort by filename (assuming numeric filenames like 1.jpg, 2.jpg, etc.)
        const numA = parseInt(a.split('.')[0]) || 0;
        const numB = parseInt(b.split('.')[0]) || 0;
        return numA - numB;
      });
    
    // Create URLs for each image
    const imageUrls = imageFiles.map(file => `/images/events/${folder}/${file}`);
    
    // Store in cache
    imageCache.set(cacheKey, {
      images: imageUrls,
      timestamp: Date.now()
    });
    
    return NextResponse.json({ 
      images: imageUrls 
    }, {
      headers: {
        'Cache-Control': 'public, max-age=3600',
        'Content-Type': 'application/json',
      }
    });
  } catch (error) {
    console.error('Error fetching event images:', error);
    return NextResponse.json({ 
      error: 'Failed to fetch images',
      message: error.message 
    }, { 
      status: 500,
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
      }
    });
  }
} 