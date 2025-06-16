"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const galleryImages = [
  { src: '/images/photo1.jpg', alt: 'Gallery Image 1' },
  { src: '/images/photo2.jpg', alt: 'Gallery Image 2' },
  { src: '/images/photo3.jpg', alt: 'Gallery Image 3' },
  { src: '/images/photo4.jpg', alt: 'Gallery Image 4' },
  { src: '/images/photo5.jpg', alt: 'Gallery Image 5' }
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4 text-blue-900">Photo Gallery</h1>
        <p className="text-center text-gray-600 mb-12">Explore our campus through these beautiful moments</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-w-4 aspect-h-3 relative h-0 min-h-[200px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh]">
              <button 
                className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
              <div className="relative aspect-w-16 aspect-h-9">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 