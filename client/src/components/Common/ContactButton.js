'use client';

import React, { useState } from 'react';

export default function ContactButton() {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <button 
      className={`bg-white text-indigo-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 shadow-md ${
        isActive ? 'bg-indigo-100 shadow-lg scale-105' : ''
      } hover:bg-indigo-100 hover:shadow-lg hover:scale-105 active:bg-indigo-200 active:scale-95`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
      onClick={() => window.location.href = 'mailto:library@ssnlc.edu'}
    >
      Contact Librarian
    </button>
  );
} 