"use client"
import React from 'react';
import Image from 'next/image';

export default function AboutTSP() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 min-h-screen">
      {/* Hero Section with Pattern Background */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-10">
        <svg width="100%" height="100%">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e40af" strokeWidth="1" />
            </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="bg-white shadow-xl p-4 border-4 border-blue-100 w-32 h-32 flex items-center justify-center">
              <Image
                src="/images/TSP.jpeg"
                alt="TSP"
                width={100}
                height={100}
                className="object-contain"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Tuljabhavani Seva Pratishthan (TSP's)
          </h1>
          <p className="text-xl text-blue-700 font-serif italic mb-2">
            "विद्यया धर्मः, धर्मेण राष्ट्रम्।"
            
          </p>
          <p className="text-lg text-gray-600">
          "With knowledge comes righteousness; with righteousness, a strong nation."
          </p>
        </div>

        {/* Vision Mission Values Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {/* Vision Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-blue-100">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 rounded-lg mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-blue-900">Our Vision</h2>
            </div>
            <p className="text-gray-600">
              To illuminate society through the power of education and create a transformative impact on communities.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-blue-100">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 rounded-lg mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-blue-900">Our Mission</h2>
            </div>
            <p className="text-gray-600">
              To provide quality education that empowers individuals and contributes to societal development.
            </p>
          </div>

          {/* Values Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-blue-100">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 rounded-lg mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-blue-900">Our Values</h2>
            </div>
            <p className="text-gray-600">
              Excellence, Innovation, Social Responsibility, and Ethical Leadership.
            </p>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-8">
          {/* Foundation Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <span className="w-2 h-8 bg-blue-600 rounded-full mr-4"></span>
              Our Foundation
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Tuljabhavani Seva Pratishthan (TSP's) was established in 2002 by Hon. Shri Rajendra (Dada) Nagawade and Hon. Smt Anuradha (Tai) Nagawade, under the inspiring guidance of Late Hon. Shri Shivajirao (Bapu) Nagawade. What began as a humble initiative has grown into a thriving educational ecosystem committed to academic excellence and social upliftment.
              </p>
            </div>
          </div>

          {/* Educational Journey Timeline */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <span className="w-2 h-8 bg-blue-600 rounded-full mr-4"></span>
              Educational Journey
            </h2>
            <div className="space-y-6">
              {[
                { year: 2003, name: "Kaushalya Devi English Medium School" },
                { year: 2007, name: "Women's Education College (B.Ed.)" },
                { year: 2009, name: "Soniya Gandhi Polytechnic College" },
                { year: 2018, name: "Shivajirao Nagawade Daffodils School" },
                { year: 2023, name: "Shri Shivajirao Nagawade Law College" }
              ].map((institution, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-200">
                    <div className="absolute -left-1.5 top-2 h-4 w-4 rounded-full bg-blue-600"></div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 ml-4 hover:bg-blue-100 transition-colors duration-300">
                    <div className="font-semibold text-blue-900">{institution.year} - {institution.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact & Achievements */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Impact Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Our Impact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Quality Education Access
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Women Empowerment
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Rural Development
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Skill Development
                </li>
                </ul>
              </div>

            {/* Future Vision */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
                </svg>
                Looking Forward
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Innovation in Education
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Digital Learning Integration
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Industry Partnerships
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Global Education Standards
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}