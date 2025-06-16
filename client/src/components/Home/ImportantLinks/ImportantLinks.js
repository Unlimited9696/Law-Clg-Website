"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './ImportantLinks.module.css';

const API_BASE_URL = '/api';

export default function ImportantLinks() {
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  const [ripple, setRipple] = useState({ active: false, x: 0, y: 0, id: null });

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/important-links`);
        const data = await response.json();
        
        if (!response.ok) throw new Error(data.message || 'Failed to fetch important links');
        
        setLinks(data.links || []);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching important links:', error);
        setError('Failed to load important links. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchLinks();
  }, []);

  // Handle click animation with ripple effect
  const handleLinkClick = (id, e) => {
    // Get position for ripple
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set active link and ripple
    setActiveLink(id);
    setRipple({ active: true, x, y, id });
    
    // Reset after animation completes
    setTimeout(() => {
      setActiveLink(null);
      setRipple({ active: false, x: 0, y: 0, id: null });
    }, 600);
  };

  // Fallback links in case the API fails or for initial development
  const fallbackLinks = [
    {
      _id: '1',
      title: 'Academic Calendar',
      url: '/documents/academic-calendar.pdf',
      isExternal: false,
      icon: 'calendar'
    },
    {
      _id: '2',
      title: 'Document for Admission Form',
      url: '/documents/admission-form-document.pdf',
      isExternal: false,
      icon: 'document'
    },
    {
      _id: '3',
      title: 'Academic Banks of Credits',
      url: 'https://www.abc.gov.in',
      isExternal: true,
      icon: 'bank'
    },
    {
      _id: '4',
      title: 'University Exam Form',
      url: 'https://exam.unipune.ac.in',
      isExternal: true,
      icon: 'form'
    },
    {
      _id: '5',
      title: 'University Exam Timetables',
      url: 'https://timetable.unipune.ac.in',
      isExternal: true,
      icon: 'clock'
    },
    {
      _id: '6',
      title: 'Ph. D. Interview Result',
      url: '/documents/phd-interview-result.pdf',
      isExternal: false,
      icon: 'result'
    }
  ];

  const displayLinks = links.length > 0 ? links : fallbackLinks;

  // Function to get icon based on link type
  const getLinkIcon = (link) => {
    const iconMap = {
      calendar: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      document: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      bank: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      form: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      clock: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      result: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      default: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    };

    if (link.icon && iconMap[link.icon]) {
      return iconMap[link.icon];
    }
    return iconMap.default;
  };

  // External link icon
  const externalLinkIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          
          <h1 className="text-4xl font-bold text-center text-gray-900">Important Links</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Access essential resources and information for students, faculty, and visitors
          </p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-4 px-6">
            <div className="text-xl font-bold text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Quick Access Links
            </div>
          </div>
          
          <div className="p-6">
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                <span className="ml-3 text-blue-500">Loading resources...</span>
              </div>
            ) : error ? (
              <div className="text-center py-8">
                <div className="text-red-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-red-500 text-lg">{error}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors" onClick={() => window.location.reload()}>
                  Try Again
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {displayLinks.map((link, index) => (
                  <motion.div
                    key={link._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-xl border border-blue-100 p-5 flex flex-col items-center transition-all duration-300 h-full"
                  >
                    <div className="mb-3 flex items-center justify-center w-14 h-14 rounded-full bg-blue-100">
                      <span className="text-blue-600 text-3xl">
                        {getLinkIcon(link)}
                      </span>
                    </div>
                    <div className="flex flex-col items-center flex-1 w-full">
                      <span className={`font-semibold text-base text-center mb-1 ${styles.blink}`}>{link.title}</span>
                      {link.isExternal ? (
                        <span className="text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full mb-2">External</span>
                      ) : link.url.endsWith('.pdf') ? (
                        <span className="text-xs bg-green-200 text-green-800 px-2 py-0.5 rounded-full mb-2">PDF</span>
                      ) : null}
                    </div>
                    {link.isExternal ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => handleLinkClick(link._id, e)}
                        className="mt-3 w-full text-center text-blue-700 font-medium py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 border border-blue-200"
                      >
                        Visit Link
                        <span className="inline-block ml-2 align-middle text-blue-500">
                          {externalLinkIcon}
                        </span>
                      </a>
                    ) : (
                      <Link
                        href={link.url}
                        onClick={(e) => handleLinkClick(link._id, e)}
                        className="mt-3 w-full text-center text-blue-700 font-medium py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 border border-blue-200"
                      >
                        Visit Link
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
          
          <div className="bg-gray-50 px-6 py-4 text-center">
            <p className="text-sm text-gray-600">
              Need help finding a specific resource? Contact the <span className="text-blue-600">Administrative Office</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 