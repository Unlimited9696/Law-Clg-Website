"use client"
// ======================== Imports ========================
import React, { useState, useEffect, useRef, useCallback } from 'react'
import NavLinks from './NavLinks'
import Link from "next/link";
import Image from 'next/image'
import HamburgerIcon from './HamburgerIcon';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();
  const [hideHeader, setHideHeader] = useState(false);
  const lastScrollY = useRef(0);
  const headerRef = useRef(null);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden';
      // Always show header when menu is open
      setHideHeader(false);
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [navOpen]);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Close menu if clicking outside navbar and menu is open
      if (navOpen && !e.target.closest('#navbar-container') && !e.target.closest('#navbar-links')) {
        setNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [navOpen]);

  // Optimized scroll hide/show logic for mobile
  const handleScroll = useCallback(() => {
    // Don't hide header if menu is open
    if (navOpen) {
      setHideHeader(false);
      return;
    }
    
    // Check if window is available (client-side only)
    if (typeof window === 'undefined') return;
    
    if (window.innerWidth > 768) {
      setHideHeader(false);
      return;
    }
    
    const currentScrollY = window.scrollY;
    // Use a larger threshold for smoother experience
    const scrollThreshold = 150;
    
    if (currentScrollY > lastScrollY.current && currentScrollY > scrollThreshold) {
      setHideHeader(true); // Hide on scroll down
    } else {
      setHideHeader(false); // Show on scroll up
    }
    lastScrollY.current = currentScrollY;
  }, [navOpen]);
  
  // Add scroll event listener
  useEffect(() => {
    // Only add event listener on client-side
    if (typeof window !== 'undefined') {
      // Use passive true for better performance
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);
  
  return (
    <>
      <header 
        id="navbar-container" 
        ref={headerRef}
        className={`sticky top-0 z-50 w-full shadow-md transition-transform duration-300 ${hideHeader ? '-translate-y-full' : 'translate-y-0'}`}
        role="banner"
      >
        {/* Header Top Section with Logo and College Name */}
        <div className="bg-white py-2 md:py-4 px-4 border-b border-gray-200">
          <div className="container mx-auto max-w-7xl flex flex-col items-center justify-center px-4 pb-0 md:pb-2 relative">
            {/* Logo and College Info */}
            <Link href="/" className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 group max-w-6xl mx-auto" aria-label="Shri Shivajirao Nagawade Law College home">
              <div className="flex justify-center w-auto mb-1 sm:mb-0 relative">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden transition-all duration-300 group-hover:scale-110 hover:scale-110">
                  <Image
                    src="/collegelogonew.png"
                    alt="SSNLC Logo"
                    fill
                    className="object-contain rounded-full"
                    priority={true}
                    sizes="(max-width: 768px) 96px, 128px"
                    fetchPriority="high"
                  />
                </div>
              </div>
              <div className="flex flex-col text-center">
                <p className="font-serif text-xs md:text-sm text-blue-900 transition-colors duration-300 group-hover:text-blue-700">Tuljabhavani Seva Pratishthan (TSP's)</p>
                <h1 className="font-bold font-serif text-base md:text-xl text-blue-900 transition-colors duration-300 group-hover:text-blue-700">
                    SHRI SHIVAJIRAO NAGAWADE LAW COLLEGE
                </h1>
                <p className="font-serif text-xs md:text-sm italic text-indigo-800 transition-colors duration-300 group-hover:text-indigo-600"><b>"सर्वे समाजस्तम्भाः धर्माधारेण धृता:</b></p>
                <p className="hidden md:block font-serif text-xs text-gray-700 transition-colors duration-300 group-hover:text-gray-600">
                  Balaji Nagar, Mandavgaon Road, MH SH 55, Shrigonda, Ahilyanagar, Maharashtra 413701
                </p>
              </div>
            </Link>

            {/* Hamburger button - Only visible on mobile */}
            <button 
              className='md:hidden p-3 z-50 touch-manipulation absolute top-2 right-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200' 
              onClick={() => { setNavOpen(prev => !prev) }}
              aria-expanded={navOpen}
              aria-controls="navbar-links"
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">{navOpen ? 'Close main menu' : 'Open main menu'}</span>
              <HamburgerIcon NavOpen={navOpen} />
            </button>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav 
          className="bg-blue-950 py-2 md:py-3"
          role="navigation"
          aria-label="Primary navigation"
        >
          <div className="container mx-auto max-w-7xl">
            <div 
              id="navbar-links"
              className={`${navOpen ? 'max-h-[80vh] py-4 mt-2 opacity-100' : 'max-h-0 py-0 opacity-0'} md:max-h-full md:py-0 md:mt-0 md:opacity-100 transition-all duration-300 ease-in-out overflow-hidden md:overflow-visible w-full flex-col md:flex md:flex-row md:justify-center`}
            >
              <ul className="flex flex-col md:flex-row md:items-center md:justify-center w-full space-y-2 md:space-y-0 md:space-x-6 px-4 md:px-0 text-center">
                <NavLinks setNavOpen={setNavOpen} />
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Overlay for mobile menu */}
      {navOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setNavOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className='scroll-watcher'></div>
    </>
  )
}