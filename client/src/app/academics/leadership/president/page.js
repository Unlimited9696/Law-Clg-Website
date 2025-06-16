"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function President() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-blue-800 opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-800 opacity-20"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Shri Rajendra (Dada) Nagawade
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              President, Tuljabhavani Seva Pratishthan Trust
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* President Profile */}
          <div className="flex flex-col md:flex-row-reverse gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/3"
            >
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/founder/dada.jpg"
                  alt="Shri Rajendra (Dada) Nagawade"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-4">
                  <p className="text-white text-lg font-semibold">Shri Rajendra (Dada) Nagawade</p>
                  <p className="text-blue-200 text-sm">President</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:w-2/3"
            >
              <div className="bg-white rounded-lg shadow-lg p-8 border-r-4 border-blue-600 h-full">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">About the President</h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    Drawing inspiration from the ideals and legacy of Hon'ble Shri Shivajirao (Bapu) Nagawade, Shri Rajendra (Dada) Nagawade, Chairman of Sahakarmaharshi Shivajirao Narayanrao Nagawade Cooperative Sugar Factory Ltd. and Member of the Maharashtra State Board of Higher Secondary Education, Pune, has been dedicatedly working toward the continuous development and upliftment of the region.
                  </p>
                  
                  <p>
                    With a strong commitment to social welfare, he founded the Tuljabhavani Seva Pratishthan Trust in the year 2000 to further the cause of education, health, and community service.
                  </p>
                  
                  <p>
                    A firm believer in holistic growth, Shri Rajendra (Dada) Nagawade emphasizes that education should not be limited to academic achievement alone, but should also nurture the moral and spiritual dimensions of an individual. He often reminds us that life's true purpose goes beyond mere existence and it lies in becoming a person of character, values, and service.
                  </p>
                  
                  <p>
                    He believes that to bring true balance in life, education must cultivate higher ideals and help individuals evolve into better human beings, contributing meaningfully to society.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-blue-700 rounded-lg shadow-xl p-10 text-center">
              <div className="text-5xl text-blue-300 mb-4">"</div>
              <p className="text-xl md:text-2xl text-white font-serif italic mb-6">
                There are no royal roads to success, but after success, every road becomes royal.
              </p>
              <div className="text-5xl text-blue-300 mb-4">"</div>
              <p className="text-white font-medium">– Shri Rajendra (Dada) Nagawade</p>
            </div>
          </motion.div>

          {/* Initiatives Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8 border-t border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-blue-600 rounded-full mr-4"></span>
                Vision and Initiatives
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 border-l-4 border-blue-400">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Educational Philosophy</h3>
                  <p className="text-gray-600 mb-4">
                    Shri Rajendra Nagawade's educational philosophy centers on the holistic development of students, emphasizing character building alongside academic excellence. He believes that education should prepare students not just for careers, but for life itself.
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Integration of traditional values with modern education</li>
                    <li>Focus on character development and ethical conduct</li>
                    <li>Emphasis on community service and social responsibility</li>
                    <li>Promotion of critical thinking and practical skills</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 border-l-4 border-blue-400">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Key Contributions</h3>
                  <p className="text-gray-600 mb-4">
                    Under his leadership, the Tuljabhavani Seva Pratishthan Trust has implemented numerous initiatives that have significantly impacted the community:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Establishment of educational institutions across various disciplines</li>
                    <li>Healthcare programs for rural communities</li>
                    <li>Skill development and vocational training centers</li>
                    <li>Agricultural modernization and farmer support programs</li>
                    <li>Cultural preservation and promotion of local heritage</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Leadership Qualities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-12 mb-16"
          >
            <div className="bg-gradient-to-b from-white to-blue-50 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">Leadership Qualities</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center p-4 hover:bg-white hover:shadow-md rounded-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-blue-800">Visionary</h3>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 hover:bg-white hover:shadow-md rounded-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-blue-800">Dedicated</h3>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 hover:bg-white hover:shadow-md rounded-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-blue-800">Compassionate</h3>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 hover:bg-white hover:shadow-md rounded-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-blue-800">Principled</h3>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Navigation Links */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
            <Link href="/academics/leadership/founder" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-300 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              <span>Previous: About the Founder</span>
            </Link>
            
            <Link href="/academics/leadership/secretary" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center">
              <span>Next: About the Secretary</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 