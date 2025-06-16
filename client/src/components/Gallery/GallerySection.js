"use client"
import React, { useState } from 'react';
import Image from 'next/image';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      src: "/images/collegepic(1).jpg",
      alt: "College Campus",
      category: "Campus"
    },
    {
      src: "/images/collegepic(2).jpg",
      alt: "Library",
      category: "Facilities"
    },
    {
      src: "/images/collegepic(9).png",
      alt: "Moot Court",
      category: "Facilities"
    },
    {
      src: "/images/collegepic(13).jpg",
      alt: "Student Activities",
      category: "Events"
    },
    {
      src: "/images/collegepic(8).jpg",
      alt: "Classroom",
      category: "Facilities"
    }
  ];

  const categories = ["All", "Campus", "Facilities", "Events"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Campus Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our state-of-the-art facilities and vibrant campus life through our photo gallery.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-md">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${activeCategory === category 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-blue-600'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white bg-opacity-90 px-4 py-2 rounded-lg">
                    <p className="text-blue-900 font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh]">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors duration-300"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative h-[80vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-contain"
                />
              </div>
              <p className="text-white text-center mt-4 text-lg">{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 