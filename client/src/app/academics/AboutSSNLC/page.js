"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSSNLC() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 min-h-screen"
    >
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
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-8">
            <div className="bg-white shadow-xl p-4 border-4 border-blue-100">
            <Image
              src="/collegelogonew.png"
                alt="SSNLC Logo"
                width={120}
                height={120}
                className="object-contain"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Shri Shivajirao Nagawade Law College
          </h1>
          <p className="text-xl text-blue-700 font-serif italic mb-2">
              "सर्वे समाजस्तम्भाः धर्माधारेण धृता:"
            </p>
          <p className="text-lg text-gray-600 italic">
            "All the pillars of society are upheld by the foundation of Law."
          </p>
        </motion.div>

        {/* Vision Mission Values Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {/* Vision Card */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-blue-100"
          >
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
              To establish a dynamic and inclusive centre of legal education, research, and innovation where the discipline of law is not only taught but actively practiced, tested, and refined to meet the evolving needs of society, technology, and justice. We envision a transformative legal campus that bridges theory with grassroots advocacy, courtrooms with communities, and legal tradition with emerging digital realities.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-blue-100"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 rounded-lg mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-blue-900">Our Mission</h2>
            </div>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 text-sm">
              <li>To develop socially committed and professionally competent legal practitioners through a curriculum that integrates doctrinal study with experiential learning.</li>
              <li>To foster legal literacy and justice accessibility by empowering students to engage with underserved communities.</li>
              <li>To advance interdisciplinary and technology-integrated legal education, equipping students with skills in AI, cyber law, and data protection.</li>
              <li>To create an institutional culture of ethical reasoning and democratic dialogue, encouraging critical thinking and public service.</li>
              <li>To function as a legal ecosystem where mock trials, student parliaments, and legal awareness campaigns are embedded in the academic journey.</li>
  </ul>
          </motion.div>

          {/* Values Card */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-blue-100"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 rounded-lg mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-blue-900">Our Values</h2>
            </div>
            <p className="text-gray-600">
              Justice, Ethics, Social Responsibility, and Leadership with Integrity.
            </p>
          </motion.div>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-8">
          {/* About Section */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-blue-100"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <span className="w-2 h-8 bg-blue-600 rounded-full mr-4"></span>
              About SSNLC
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Established in 2023 under the Tuljabhavani Seva Pratisthan and guided by the visionary leadership of <a href="/academics/leadership/founder" className="text-blue-600 hover:underline">Shri Shivajirao Bappu Nagawade</a>, followed by <a href="/academics/leadership/president" className="text-blue-600 hover:underline">Shri Rajendra Dada Nagawade</a> and <a href="/academics/leadership/secretary" className="text-blue-600 hover:underline">Smt. Anuradha Tai Nagawade</a>, Shri Shivajirao Nagawade Law College (SSNLC), Shrigonda, is committed to providing accessible and quality legal education. Affiliated with Savitribai Phule Pune University and recognized by the Bar Council of India, SSNLC offers a comprehensive three-year LL.B. program designed to equip students with a strong foundation in legal principles, critical thinking, and practical skills.
              </p>
              <p>
                The college is deeply rooted in the values of justice, ethics, and social responsibility, aiming to nurture not only skilled legal professionals but also socially conscious individuals who can contribute meaningfully to society. SSNLC's campus offers modern facilities including a well-stocked law library, digital classrooms, and a dedicated moot court hall, providing an enriching academic environment that encourages collaboration and professional growth.
              </p>
              <p>
                With a focus on personalized mentorship through a low student-teacher ratio, the college ensures each student receives the support needed to excel. Beyond classroom teaching, SSNLC actively promotes legal awareness through literacy camps, community outreach, court visits, and internships, bridging the gap between theoretical knowledge and practical application.
              </p>
              <div className="mt-6 pt-4 border-t border-blue-100">
                <a href="/academics/leadership" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  <span>Learn more about our leadership</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Academic Excellence */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-blue-100"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Academic Excellence
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Low Student-Teacher Ratio
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Regular Seminars & Workshops
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Guest Lectures by Legal Experts
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Moot Court Competitions
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Personalized Mentorship
                </li>
                </ul>
              </motion.div>

            {/* Community Engagement */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-blue-100"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Community Engagement
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Legal Literacy Camps
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Community Outreach Programs
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Court Visits & Internships
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Social Justice Initiatives
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Rural Legal Empowerment
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Closing Statement */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg p-8 border border-blue-100"
          >
            <p className="text-white text-center italic font-medium text-lg">
              Shri Shivajirao Nagawade Law College continues to evolve as a center of legal learning and social empowerment, inspiring students to uphold the rule of law and become catalysts for positive change in India's legal and social framework.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}