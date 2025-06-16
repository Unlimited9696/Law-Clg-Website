"use client";
import React from 'react';
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const PrincipalMessage = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-2">Principal's Message</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-700 to-blue-900 flex items-center justify-center text-white text-xl font-bold">
              AC
            </div>
          </div>
          
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-blue-900">Dr. Anjula S. Chowbe</h3>
            <p className="text-blue-600">Principal, SSNLC</p>
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
        </div>
        
        <div className="flex justify-center mt-8">
          <motion.a 
            href="/academics/leadership/principal"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-md flex items-center"
          >
            Read Full Message
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage; 