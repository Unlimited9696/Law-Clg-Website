"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import OptimizedImage from "@/components/Common/OptimizedImage";

export default function MootCourtPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="relative z-10 px-4 py-3 sm:px-6 sm:py-5 md:py-6 text-center h-full flex flex-col justify-center backdrop-blur-sm rounded-2xl shadow-lg"
  style={{ backgroundColor: '#233763' }}
>
  <motion.h1
    initial={{ y: -30, opacity: 0 }}
    animate={isLoaded ? { y: 0, opacity: 1 } : {}}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2"
  >
    ⚖️ Moot Court Society
  </motion.h1>

  <motion.div
    initial={{ y: 30, opacity: 0 }}
    animate={isLoaded ? { y: 0, opacity: 1 } : {}}
    transition={{ delay: 0.4, duration: 0.8 }}
    className="text-sm sm:text-base md:text-lg text-blue-100 max-w-3xl mx-auto"
  >
    <p>
      Nurturing advocacy skills through simulated court proceedings.
    </p>
  </motion.div>
</motion.div>


      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isLoaded ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b border-blue-100 pb-3">About Our Moot Court Society</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  The Moot Court Society at Shri Shivajirao Nagawade Law College plays a pivotal role in nurturing the advocacy skills of budding law professionals. Mooting, which simulates a court hearing, allows students to engage in legal research, drafting memorials, and presenting oral arguments before a panel of judges. It is a cornerstone of practical legal education and helps students develop confidence, articulation, and an in-depth understanding of law and procedure.
                </p>
                <p>
                  Our college conducts regular intra-college moot court competitions to select and train students for state, national, and international-level competitions. Through participation, students gain exposure to real-world legal scenarios and refine their skills in legal reasoning, public speaking, and courtroom decorum.
                </p>
                <p>
                  The Moot Court Society is mentored by experienced faculty members who provide continuous guidance on case analysis, legal citation, and advocacy etiquette. Students are also encouraged to participate in judgment writing, client counseling, and legal aid programs, which collectively enhance their professional readiness.
                </p>
                <p>
                  By actively participating in moot court activities, our students not only strengthen their academic foundations but also prepare themselves to become persuasive advocates and responsible officers of the court.
                </p>
              </div>
            </div>

            {/* Second Image */}
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <OptimizedImage
                src="/images/moot-court/1.jpg"
                alt="Students participating in moot court competition"
                className="w-full h-full"
                objectFit="cover"
              />
            </div>
          </motion.div>

          {/* Right Column - Features and Activities */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isLoaded ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Key Features */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <ul className="space-y-4">
                {[
                  "Regular intra-college competitions",
                  "Professional mentorship by faculty",
                  "State and national level participation",
                  "Comprehensive training programs",
                  "Judgment writing workshops",
                  "Client counseling sessions"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 mt-1 text-blue-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            
            {/* Contact */}
            <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Join the Society</h3>
              <p className="text-gray-700 mb-6">Interested in joining our Moot Court Society? Contact the faculty coordinator for more information.</p>
              <a href="mailto:mootcourt@ssnlc.edu" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors duration-300">
                Contact Coordinator
              </a>
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Student Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Shayeb Khan",
                year: "Final Year LL.B.",
                quote: "Participating in moot courts has significantly improved my research skills and courtroom confidence. The feedback from judges has been invaluable for my growth as a future advocate."
              },
              {
                name: "Pooja Bendre",
                year: "Second Year LL.B.",
                quote: "The mentorship I received through the Moot Court Society helped me understand the nuances of legal arguments and effective presentation techniques."
              },
              {
                name: "Ashwin Waghmare",
                year: "Final Year LL.B.",
                quote: "Representing our college in the National Moot Court Competition was a defining moment in my law school journey. The preparation and experience have shaped my career aspirations."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6 shadow-md">
                <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        

       
      </div>
    </div>
  );
} 