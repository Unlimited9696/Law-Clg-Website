"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export default function Leadership() {
  const leaders = [
    {
      id: 'founder',
      name: 'Hon\'ble Shri Shivajirao (Bapu) Nagawade',
      title: 'Founder (Late)',
      image: '/images/founder/bapu.jpg',
      description: 'A visionary statesman, former Member of the Legislative Assembly (MLA), and President of the Maharashtra State Cooperative Sugar Association who recognized the importance of education in rural development.',
      link: '/academics/leadership/founder'
    },
    {
      id: 'president',
      name: 'Shri Rajendra (Dada) Nagawade',
      title: 'President',
      image: '/images/founder/dada.jpg',
      description: 'Chairman of Sahakarmaharshi Shivajirao Narayanrao Nagawade Cooperative Sugar Factory Ltd. and Member of the Maharashtra State Board of Higher Secondary Education, Pune.',
      link: '/academics/leadership/president'
    },
    {
      id: 'secretary',
      name: 'Mrs. Anuradha (Tai) Nagawade',
      title: 'Secretary',
      image: '/images/founder/vahini.jpg',
      description: 'District President of the Ahmednagar Mahila Congress Committee and Chairperson of the Women Welfare and Child Development Committee, Zilla Parishad, Ahmednagar.',
      link: '/academics/leadership/secretary'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-800 opacity-20"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our Leadership
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Visionary leaders guiding Shri Shivajirao Nagawade Law College towards excellence
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Guiding the Path to Excellence</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              The remarkable growth and development of Shri Shivajirao Nagawade Law College is a testament to the visionary leadership that has guided the institution since its inception. Our leaders have consistently demonstrated an unwavering commitment to educational excellence, social responsibility, and the holistic development of students.
            </p>
          </motion.div>

          {/* Leadership Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + (index * 0.2) }}
                className="flex flex-col h-full bg-white rounded-2xl border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden items-center p-8"
              >
                <div className="flex flex-col items-center w-full flex-1">
                  <div className="relative w-36 h-36 mb-4 flex items-center justify-center">
                    <div className="absolute w-full h-full rounded-full ring-4 ring-blue-300 bg-white"></div>
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                      className="rounded-full z-10 object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 text-center mb-1 mt-2">
                    {leader.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-center mb-3">
                    {leader.title}
                  </p>
                  <p className="text-gray-600 text-sm text-center mb-6">
                    {leader.description}
                  </p>
                  <div className="flex-grow" />
                  <Link
                    href={leader.link}
                    className="block text-center w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow mt-4"
                  >
                    Read More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legacy Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 text-white mb-16"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="relative h-64 w-64 mx-auto border-4 border-blue-300 shadow-lg">
                  <Image
                    src="/images/logo.png"
                    alt="SSNLC Logo"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="bg-white p-2"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">A Legacy of Excellence</h2>
                <p className="text-blue-100 mb-4">
                  The leadership of Shri Shivajirao Nagawade Law College is committed to upholding the legacy of its founder while embracing innovation and progress. Their collective vision has transformed the institution into a center of excellence for legal education, research, and community service.
                </p>
                <p className="text-blue-100">
                  Through their guidance, the college continues to nurture legal professionals who are not only academically proficient but also socially conscious and ethically grounded, ready to contribute meaningfully to the legal profession and society at large.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Principal's Message Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Principal's Message</h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-6">
                <div className="relative w-40 h-48 shadow-lg border-4 border-blue-100">
                  <Image
                    src="/images/founder/cabin.jpg"
                    alt="Dr. Anjula S. Chowbe"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-1">Dr. Anjula S. Chowbe</h3>
                  <p className="text-blue-600 mb-4">Principal, SSNLC</p>
                  <p className="text-gray-500 mb-4 text-sm">LL.B., LL.M., Ph.D.</p>
                </div>
              </div>
              
              <div className="relative">
                <FaQuoteLeft className="absolute top-0 left-0 text-blue-200 text-4xl opacity-50" />
                
                <div className="px-10 py-4 text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    It is with immense pride and pleasure that I welcome you to Shri Shivajirao Nagawade Law College. Our institution stands as a beacon of legal education, committed to nurturing not just skilled legal professionals but thoughtful citizens who uphold the principles of justice, ethics, and social responsibility.
                  </p>
                  
                  <p className="mb-4">
                    At SSNLC, we believe that legal education goes beyond the classroom. Our holistic approach combines rigorous academic training with practical exposure, ensuring that our students are well-equipped to navigate the complexities of the legal world. We foster an environment where critical thinking, analytical reasoning, and ethical decision-making are paramount.
                  </p>
                  
                  <p>
                    As we move forward in our journey, we remain dedicated to our mission of providing accessible, quality legal education to students from diverse backgrounds, particularly those from rural and semi-urban areas. I invite you to join us in this noble pursuit of knowledge and justice, as we strive to create a more equitable and just society through the power of legal education.
                  </p>
                </div>
                
                <FaQuoteRight className="absolute bottom-0 right-0 text-blue-200 text-4xl opacity-50" />
              </div>
              
              <div className="flex justify-center mt-8">
                <Link
                  href="/academics/leadership/principal"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-md flex items-center"
                >
                  Read Full Message
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link href="/academics/AboutSSNLC" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-300">
              Back to About SSNLC
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 