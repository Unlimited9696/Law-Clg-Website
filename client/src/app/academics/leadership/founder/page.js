"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Founder() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 opacity-20"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Hon'ble Shri Shivajirao (Bapu) Nagawade
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Visionary Founder, Statesman, and Pioneer of Rural Development
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Founder Profile */}
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/3"
            >
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/founder/bapu.jpg"
                  alt="Hon'ble Shri Shivajirao (Bapu) Nagawade"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-4">
                  <p className="text-white text-lg font-semibold">Hon'ble Shri Shivajirao (Bapu) Nagawade</p>
                  <p className="text-blue-200 text-sm">Founder (Late)</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:w-2/3"
            >
              <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600 h-full">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">About the Founder</h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    In the late 1970s, Shrigonda, a rural region in Maharashtra, was facing significant socio-economic challenges, including poverty, illiteracy, drought, and unemployment. The root cause of these issues was insightfully recognized by the late Hon'ble Shri Shivajirao (Bapu) Nagawade, a visionary statesman, former Member of the Legislative Assembly (MLA), and President of the Maharashtra State Cooperative Sugar Association.
                  </p>
                  
                  <p>
                    A pioneer of the cooperative movement, he firmly believed that real progress could only be achieved through education, empowerment, and collective self-reliance.
                  </p>
                  
                  <p>
                    With this vision, he established the Shrigonda Cooperative Sugar Factory in 1971, which played a pivotal role in the economic upliftment of the region. Understanding the transformative power of education, he went on to found Shri Chhatrapati Shivaji Shikshan Sanstha and Dyandeep Shikshan Sanstha to provide quality education and training to the children of economically disadvantaged farming families.
                  </p>
                  
                  <p>
                    These institutions continue to reflect his commitment to rural development and social justice, empowering generations through education. His values and foresight remain the guiding light of Shri Shivajirao Nagawade Law College.
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
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-10 text-center">
              <div className="text-5xl text-blue-300 mb-4">"</div>
              <p className="text-xl md:text-2xl text-white font-serif italic mb-6">
                Let the present be your greatest responsibility, the past your teacher, and the future your inspiration.
              </p>
              <div className="text-5xl text-blue-300 mb-4">"</div>
              <p className="text-white font-medium">- Hon'ble Shri Shivajirao (Bapu) Nagawade</p>
            </div>
          </motion.div>

          {/* Legacy Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8 border-t border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-blue-600 rounded-full mr-4"></span>
                Legacy and Impact
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Economic Development</h3>
                  <p className="text-gray-600">
                    Established the Shrigonda Cooperative Sugar Factory in 1971, transforming the economic landscape of the region and providing livelihoods to thousands of families.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Educational Initiatives</h3>
                  <p className="text-gray-600">
                    Founded multiple educational institutions to provide quality education to rural children, believing firmly in education as the key to social transformation.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Social Empowerment</h3>
                  <p className="text-gray-600">
                    Championed the cooperative movement and social justice initiatives, creating sustainable models of community development and self-reliance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Navigation Links */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
            <Link href="/academics/leadership/president" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center">
              <span>Next: About the President</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
            
            <Link href="/academics/AboutSSNLC" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-300">
              Back to About SSNLC
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 