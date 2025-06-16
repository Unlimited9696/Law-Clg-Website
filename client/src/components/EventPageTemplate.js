"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function EventPageTemplate({ 
  title, 
  subtitle, 
  date, 
  images, 
  description, 
  highlights, 
  significance 
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-10">
        <Link 
          href="/events" 
          className="inline-flex items-center px-4 py-2 bg-white rounded-lg shadow-md text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Events
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900 opacity-75"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              {subtitle}
            </p>
            {date && (
              <p className="mt-2 text-blue-200">
                {date}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative h-[400px] group overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="rounded-lg object-cover transition-all duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* Event Description */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">About the Event</h2>
          <p className="text-gray-600 mb-6">{description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Event Highlights</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Significance</h3>
              <p className="text-gray-600">{significance}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 