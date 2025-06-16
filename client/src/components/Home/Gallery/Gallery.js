"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
  { src: '/images/photo1.jpg', alt: 'Gallery Image 1' },
  { src: '/images/photo2.jpg', alt: 'Gallery Image 2' },
  { src: '/images/photo3.jpg', alt: 'Gallery Image 3' },
  { src: '/images/photo4.jpg', alt: 'Gallery Image 4' }
];

export default function Gallery() {
  return (
    <div className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Photo Gallery</h2>
          <Link href="/gallery" className="text-blue-600 hover:text-blue-800">
            View All Photos →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-w-4 aspect-h-3 relative h-0 min-h-[200px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 