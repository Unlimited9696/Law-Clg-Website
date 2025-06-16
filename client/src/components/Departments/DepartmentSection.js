"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DepartmentSection() {
  const departments = [
    {
      title: "LL.B. Program",
      description: "Three-year Bachelor of Laws program with comprehensive legal education",
      features: ["Constitutional Law", "Civil Law", "Criminal Law", "Corporate Law"],
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      image: "/images/Department-of-Law-Image.jpg",
      link: "/academics/departments/llb"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Academic Programs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive legal education programs designed to nurture future legal professionals with strong ethical foundations.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {departments.map((dept, index) => (
            <div key={index} className="group">
              <Link href={dept.link}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="md:w-1/3 relative h-64 md:h-auto">
                      <Image
                        src={dept.image}
                        alt={dept.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-blue-900 opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
                    </div>

                    {/* Content Section */}
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg mr-4">
                          {dept.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-blue-900">{dept.title}</h3>
                      </div>

                      <p className="text-gray-600 mb-6">
                        {dept.description}
                      </p>

                      {/* Features Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {dept.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="flex justify-end">
                        <span className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors duration-300">
                          Learn More
                          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 