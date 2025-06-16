"use client";
import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function PrincipalPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-2">From the Principal's Desk</h1>
          <div className="w-32 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100 max-w-5xl mx-auto mb-12">
          <div className="flex justify-center mb-8">
            <div className="relative w-48 h-56 shadow-lg border-4 border-blue-100">
              <Image
                src="/images/founder/cabin.jpg"
                alt="Dr. Anjula S. Chowbe"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                className="z-10"
              />
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-blue-900">Dr. Anjula S. Chowbe</h2>
            <p className="text-blue-600 text-lg">Principal, Shri Shivajirao Nagawade Law College</p>
            <p className="text-gray-500 mt-2">LL.B., LL.M., Ph.D.</p>
          </div>
          
          <div className="relative">
            <FaQuoteLeft className="absolute top-0 left-0 text-blue-200 text-5xl opacity-50" />
            
            <div className="px-12 py-6 text-gray-700 leading-relaxed">
              <p className="mb-6">
                Dear Students, Parents, and Esteemed Visitors,
              </p>
              
              <p className="mb-6">
                It is with immense pride and pleasure that I welcome you to Shri Shivajirao Nagawade Law College. Our institution stands as a beacon of legal education, committed to nurturing not just skilled legal professionals but thoughtful citizens who uphold the principles of justice, ethics, and social responsibility.
              </p>
              
              <p className="mb-6">
                At SSNLC, we believe that legal education goes beyond the classroom. Our holistic approach combines rigorous academic training with practical exposure, ensuring that our students are well-equipped to navigate the complexities of the legal world. We foster an environment where critical thinking, analytical reasoning, and ethical decision-making are paramount.
              </p>
              
              <p className="mb-6">
                The legal profession today demands professionals who are not only well-versed in legal principles but are also sensitive to social realities and committed to upholding justice. Our curriculum, therefore, emphasizes both theoretical knowledge and practical skills, complemented by regular interactions with legal luminaries, court visits, moot courts, and legal aid activities.
              </p>
              
              <p className="mb-6">
                Our dedicated faculty members, with their rich academic and professional experience, serve as mentors and guides, helping students discover their potential and carve their path in the legal domain. The low student-teacher ratio ensures personalized attention and fosters meaningful academic discussions.
              </p>
              
              <p className="mb-6">
                Our state-of-the-art infrastructure, including a well-stocked library, digital classrooms, and a dedicated moot court hall, provides an enriching academic environment that encourages collaboration and professional growth.
              </p>
              
              <p className="mb-6">
                As we move forward in our journey, we remain dedicated to our mission of providing accessible, quality legal education to students from diverse backgrounds, particularly those from rural and semi-urban areas. We are committed to producing legal professionals who not only excel in their careers but also contribute meaningfully to society.
              </p>
              
              <p>
                I invite you to join us in this noble pursuit of knowledge and justice, as we strive to create a more equitable and just society through the power of legal education.
              </p>
              
              <div className="mt-8 text-right">
                <p className="font-semibold">Dr. Anjula S. Chowbe</p>
                <p>Principal, SSNLC</p>
              </div>
            </div>
            
            <FaQuoteRight className="absolute bottom-0 right-0 text-blue-200 text-5xl opacity-50" />
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <Link href="/academics/leadership" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-300">
            Back to Leadership
          </Link>
        </div>
      </div>
    </main>
  );
}
