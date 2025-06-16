"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import OptimizedImage from "@/components/Common/OptimizedImage";
import dynamic from 'next/dynamic';

// Dynamically import components that aren't needed immediately
const ContactButton = dynamic(() => import('@/components/Common/ContactButton'), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-indigo-200 h-10 w-32 rounded-full mx-auto"></div>
});

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  
  return { scale, opacity };
};

export default function LibraryPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scale, opacity } = useScrollAnimation();
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ opacity }}
      className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 py-6 px-3 sm:py-10 sm:px-6"
    >
      {/* Hero Section */}
      <motion.div 
        style={{ scale }}
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl max-w-7xl mx-auto mb-8 sm:mb-12 bg-blue-900 text-white h-[250px] sm:h-[300px] md:h-[300px]"
      >
       
        
        <div className="relative z-10 px-4 py-10 sm:px-6 sm:py-16 md:py-24 text-center h-full flex flex-col justify-center">
          <motion.h1 
            initial={{ y: -30, opacity: 1 }}
            animate={isLoaded ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
          >
            📚 Library at a Glance
          </motion.h1>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isLoaded ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto"
          >
            <p className="font-serif italic mb-2 sm:mb-4">"A Treasury of Legal Knowledge"</p>
            <p className="text-indigo-100">
              Our library is housed in a spacious and independent facility, offering a serene and resource-rich environment for academic research and study.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {/* Description with First Image */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl mb-8 sm:mb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-indigo-800 mb-3 sm:mb-4">About Our Library</h2>
              <p className="text-gray-700">
                The college library is well-stocked with a wide range of textbooks, reference books, journals, law reports, and periodicals as per the university curriculum and academic requirements. In addition to textbooks, the library subscribes to a variety of legal periodicals, newspapers, magazines, and academic journals. These resources are made freely available for students within the library premises.
              </p>
            </div>
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-xl overflow-hidden shadow-lg">
              <OptimizedImage
                src="/images/library/reading-area.jpg"
                alt="Library Reading Area"
                className="w-full h-full"
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.div>

        {/* Second Image - Book Collection */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl mb-8 sm:mb-10"
        >
          <OptimizedImage
            src="/images/library/book-collection.jpg"
            alt="Extensive Law Book Collection"
            className="w-full h-full"
            objectFit="cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end">
            <div className="p-5 sm:p-8 text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Extensive Collection</h2>
              <p className="text-base sm:text-lg text-indigo-100 max-w-2xl">
                Our library houses over 10,000 volumes covering all aspects of legal education and research.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Library Guidelines and Policy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-16">
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={isLoaded ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl h-full"
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl mr-3">📖</span>
              <h2 className="text-xl sm:text-2xl font-semibold text-indigo-700">Library Use Guidelines</h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex-shrink-0 mr-3 text-center">1</span>
                <span>Only college students are permitted access to the library. Ex-students or outsiders may use the facility only with prior permission from the principal.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex-shrink-0 mr-3 text-center">2</span>
                <span>Silence must be maintained in the reading room at all times. Gathering in groups or creating disturbances is strictly prohibited.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex-shrink-0 mr-3 text-center">3</span>
                <span>Violations of library discipline may result in penalties as decided by the principal based on the Librarian's recommendation.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={isLoaded ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl h-full"
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl mr-3">🔁</span>
              <h2 className="text-xl sm:text-2xl font-semibold text-indigo-700">Issue and Return Policy</h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex-shrink-0 mr-3 text-center">1</span>
                <span>Books and reading material are issued only upon presentation of a valid library card.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex-shrink-0 mr-3 text-center">2</span>
                <span>Late returns will incur a fine of ₹5 per day.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex-shrink-0 mr-3 text-center">3</span>
                <span>Library and ID cards must be obtained within one month from the date of admission.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex-shrink-0 mr-3 text-center">4</span>
                <span>Lost or misplaced books must be replaced with the same edition or the student must pay three times the original price.</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Library Features */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 text-indigo-800">Library Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl sm:rounded-2xl p-5 sm:p-8 text-white shadow-lg transform transition-all duration-300 hover:scale-102 active:scale-98">
              <div className="flex items-center mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl mr-3">📚</span>
                <h3 className="text-lg sm:text-xl font-bold">Extensive Collection</h3>
              </div>
              <p className="text-indigo-100">
                Our library houses an extensive collection of legal textbooks, reference materials, journals, and periodicals to support academic research and study.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl p-5 sm:p-8 text-white shadow-lg transform transition-all duration-300 hover:scale-102 active:scale-98">
              <div className="flex items-center mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl mr-3">💻</span>
                <h3 className="text-lg sm:text-xl font-bold">Digital Resources</h3>
              </div>
              <p className="text-blue-100">
                Access to online legal databases, e-journals, and digital archives providing comprehensive resources for research and academic work.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl p-5 sm:p-8 text-white shadow-lg transform transition-all duration-300 hover:scale-102 active:scale-98">
              <div className="flex items-center mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl mr-3">🔍</span>
                <h3 className="text-lg sm:text-xl font-bold">Research Support</h3>
              </div>
              <p className="text-purple-100">
                Dedicated librarians provide research assistance, helping students locate resources and navigate complex legal research methodologies.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Reading Environment */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl mb-10 sm:mb-16"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-800 mb-4 sm:mb-6">Reading Environment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Our library provides a conducive environment for focused study and research. The spacious reading hall is designed to accommodate individual study needs with:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span>Comfortable seating arrangements</span>
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span>Proper lighting and ventilation</span>
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span>Quiet zones for concentrated study</span>
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span>Group discussion areas</span>
                </li>
              </ul>
            </div>
            <div className="bg-indigo-50 rounded-xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-indigo-800 mb-2 sm:mb-3">Library Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span>Closed</span>
                </div>
                <div className="mt-3 pt-3 border-t border-indigo-200">
                  <p className="text-sm text-indigo-700">
                    * Extended hours during examination periods
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Library Stats */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-10 sm:mb-16"
        >
          {[
            { number: "10,000+", label: "Books" },
            { number: "50+", label: "Legal Journals" },
            { number: "24/7", label: "Digital Access" },
            { number: "100+", label: "Research Papers" }
          ].map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center text-white shadow-lg transform transition-all duration-300 hover:scale-102 active:scale-98">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold">{stat.number}</p>
              <p className="text-indigo-100 text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </motion.div>

      

        {/* Back to Top Button - Fixed for mobile */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-indigo-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-700 active:bg-indigo-800 active:scale-95 transition-all z-50"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
}
