"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Department() {
  const [isLoading] = useState(false);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900">Our Department</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Discover academic excellence, courtroom readiness, and ethical legal education through our 3-Year LLB Programme.
          </p>
        </div>

        {/* LLB Department Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[300px] w-full">
            <Image
              src="/images/llb-department.jpg"
              alt="LLB Department"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-4 text-blue-800">Bachelor of Laws (LLB)</h3>
            <p className="text-gray-700 mb-6">
              Our 3-year LLB course offers a solid grounding in constitutional, criminal, corporate, and civil law. It combines theoretical knowledge with practical exposure, preparing students to thrive in courts, law firms, public service, or higher education.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Curriculum aligned with Bar Council of India standards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>State-of-the-art Moot Court for litigation training</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Internship support with courts and law offices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Guest lectures from judges and senior advocates</span>
              </li>
            </ul>
            <Link
              href="/academics/departments/llb"
              className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
