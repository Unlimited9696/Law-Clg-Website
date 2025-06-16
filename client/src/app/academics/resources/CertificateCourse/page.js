"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CertificateCoursePage() {
  // List of certificate courses commonly offered by law colleges
  const certificateCourses = [
    {
      title: "Certificate Course in Cyber Law",
      duration: "3 months",
      description: "Learn about legal aspects of cyberspace, cybercrime investigation, and digital evidence."
    },
   
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1 
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Certificate Courses
          </motion.h1>
          <motion.p 
            className="mt-4 text-xl text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Enhance your legal expertise with our specialized certificate courses
          </motion.p>
          <motion.div
            className="mt-6 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-md text-lg font-medium bg-yellow-100 text-yellow-800">
              Coming Soon
            </span>
          </motion.div>
        </div>

        <motion.div 
          className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {certificateCourses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">{course.title}</h3>
                  <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {course.duration}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                <div className="mt-4 flex justify-end">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                    Registration Opening Soon
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 