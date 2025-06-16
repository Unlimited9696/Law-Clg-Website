"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Secretary() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-blue-700 opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 opacity-20"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Mrs. Anuradha (Tai) Nagawade
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Secretary, Shri Shivajirao Nagawade Law College
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Secretary Profile */}
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/3"
            >
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/founder/vahini.jpg"
                  alt="Mrs. Anuradha (Tai) Nagawade"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-4">
                  <p className="text-white text-lg font-semibold">Mrs. Anuradha (Tai) Nagawade</p>
                  <p className="text-blue-200 text-sm">Secretary</p>
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
                <h2 className="text-3xl font-bold text-blue-900 mb-6">About the Secretary</h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    The sustained growth and development of Shri Shivajirao Nagawade Law College have been profoundly guided by the visionary leadership of Mrs. Anuradha (Tai) Nagawade, District President of the Ahmednagar Mahila Congress Committee and Chairperson of the Women Welfare and Child Development Committee, Zilla Parishad, Ahmednagar.
                  </p>
                  
                  <p>
                    Her unwavering dedication and steadfast commitment have played a pivotal role in advancing the college's mission to deliver high-quality legal education with a strong emphasis on social responsibility.
                  </p>
                  
                  <p>
                    Under her guidance, the college continues to nurture an environment that balances academic excellence with the inculcation of ethical values. Mrs. Nagawade's belief in education transcends mere acquisition of knowledge; she envisions it as a transformative tool that shapes character, instills integrity, and empowers students to become conscientious citizens capable of making meaningful contributions to society.
                  </p>
                  
                  <p>
                    Founded with the noble vision of empowering rural youth through accessible and values-driven legal education, the institution thrives on its commitment to justice, equality, and holistic development. Mrs. Nagawade's leadership inspires all stakeholders to uphold these principles while striving for continuous improvement and inclusive growth.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 border-t border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-blue-600 rounded-full mr-4"></span>
                Vision and Leadership
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Inspiring Vision</h3>
                  <p className="text-gray-600">
                    Her inspiring vision is to cultivate a generation of legal professionals who are not only skilled and knowledgeable but are also deeply rooted in the spirit of compassion, fairness, and civic duty. Through her guidance, the college aspires to produce graduates who will emerge as leaders in law and society, upholding the highest standards of justice and humanity.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Leadership Approach</h3>
                  <p className="text-gray-600">
                    Mrs. Nagawade's leadership is characterized by her hands-on approach, attention to detail, and unwavering commitment to excellence. She actively engages with students, faculty, and staff, fostering a collaborative environment where everyone feels valued and motivated to contribute their best. Her focus on continuous improvement has led to numerous innovations in teaching methodologies and campus facilities.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-xl p-10 text-center">
              <div className="text-5xl text-blue-300 mb-4">"</div>
              <p className="text-xl md:text-2xl text-white font-serif italic mb-6">
                True education is not just about knowledge, but about nurturing values that build a just and compassionate society.
              </p>
              <div className="text-5xl text-blue-300 mb-4">"</div>
              <p className="text-white font-medium">- Mrs. Anuradha (Tai) Nagawade</p>
            </div>
          </motion.div>

          {/* Key Initiatives */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-16"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">Key Initiatives Under Her Leadership</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-b from-white to-blue-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-blue-500">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Curriculum Enhancement</h3>
                  <p className="text-gray-600">
                    Modernized the curriculum to include practical training, clinical legal education, and contemporary legal issues, ensuring students are well-prepared for the evolving legal landscape.
                  </p>
                </div>
                
                <div className="bg-gradient-to-b from-white to-blue-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-blue-500">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Women Empowerment</h3>
                  <p className="text-gray-600">
                    Established special programs and scholarships for female students, encouraging greater participation of women in legal education and the justice system.
                  </p>
                </div>
                
                <div className="bg-gradient-to-b from-white to-blue-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-blue-500">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Community Legal Services</h3>
                  <p className="text-gray-600">
                    Initiated legal aid clinics and awareness programs to serve the local community, providing students with practical experience while addressing the legal needs of underserved populations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Public Service */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-16"
          >
            <div className="bg-blue-50 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Public Service and Achievements</h2>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Political Leadership</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>District President of the Ahmednagar Mahila Congress Committee</li>
                    <li>Active advocate for women's rights and gender equality in political spheres</li>
                    <li>Organized grassroots political awareness campaigns in rural areas</li>
                    <li>Championed policies promoting education and healthcare access</li>
                  </ul>
                </div>
                
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Social Welfare</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>Chairperson of the Women Welfare and Child Development Committee, Zilla Parishad, Ahmednagar</li>
                    <li>Implemented innovative programs for child nutrition and education</li>
                    <li>Established support systems for women facing domestic violence</li>
                    <li>Organized health camps and awareness programs in remote villages</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Navigation Links */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
            <Link href="/academics/leadership/president" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-300 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              <span>Previous: About the President</span>
            </Link>
            
            <Link href="/academics/leadership" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
              Back to Leadership
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 