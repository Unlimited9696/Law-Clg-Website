"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white pt-16 pb-8">
      

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* College Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <div className="mr-3">
                <Image
                  src="/images/logo.png"
                  alt="SSNLC Logo"
                  width={60}
                  height={60}
                />
              </div>
              <div className="text-xl font-bold">SSNLC</div>
            </div>
            <p className="text-blue-200 text-center md:text-left mb-6">
              Providing quality legal education and shaping future legal professionals since 2024.
            </p>
            <div className="flex space-x-4">
              
             
              
          <a
            href="https://www.instagram.com/ssnlc_official_?igsh=amtldmV2OXpxZmNu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
                className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300"
          >
            <svg
              className="w-5 h-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.427.41a4.92 4.92 0 011.675 1.072 4.922 4.922 0 011.072 1.674c.17.457.356 1.257.41 2.427.058 1.266.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.41 2.427a4.92 4.92 0 01-1.072 1.675 4.92 4.92 0 01-1.674 1.072c-.457.17-1.257.356-2.427.41-1.266.058-1.645.069-4.85.069s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.427-.41a4.92 4.92 0 01-1.675-1.072 4.92 4.92 0 01-1.072-1.674c-.17-.457-.356-1.257-.41-2.427C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.41-2.427a4.92 4.92 0 011.072-1.675A4.92 4.92 0 015.39 2.642c.457-.17 1.257-.356 2.427-.41C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.015 7.052.072 5.773.13 4.672.387 3.758.818a6.918 6.918 0 00-2.505 1.638A6.917 6.917 0 00.818 4.96c-.43.914-.688 2.015-.746 3.295C.015 8.332 0 8.736 0 12c0 3.264.015 3.668.072 4.948.058 1.28.315 2.381.746 3.295a6.918 6.918 0 001.638 2.505 6.918 6.918 0 002.505 1.638c.914.43 2.015.688 3.295.746C8.332 23.985 8.736 24 12 24c3.264 0 3.668-.015 4.948-.072 1.28-.058 2.381-.315 3.295-.746a6.918 6.918 0 002.505-1.638 6.917 6.917 0 001.638-2.505c.43-.914.688-2.015.746-3.295.058-1.28.072-1.684.072-4.948 0-3.264-.015-3.668-.072-4.948-.058-1.28-.315-2.381-.746-3.295a6.918 6.918 0 00-1.638-2.505 6.918 6.918 0 00-2.505-1.638c-.914-.43-2.015-.688-3.295-.746C15.668.015 15.264 0 12 0z" />
              <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ssnl-college-55421836b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
                className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300"
          >
            <svg
              className="w-5 h-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22.23 0H1.77C.79 0 0 .774 0 1.727v20.546C0 23.225.79 24 1.77 24h20.46c.98 0 1.77-.775 1.77-1.727V1.727C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.612a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zm14.887 12.84h-3.55v-5.906c0-1.408-.028-3.222-1.964-3.222-1.965 0-2.265 1.533-2.265 3.12v6.008H9.14V9h3.41v1.56h.047c.475-.9 1.635-1.85 3.365-1.85 3.6 0 4.267 2.37 4.267 5.45v6.792z" />
            </svg>
          </a>
            
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xl font-bold mb-4 pb-2 border-b border-blue-700">Quick Links</div>
            <nav aria-label="Quick links navigation">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/academics/AboutSSNLC"
                    className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/academics/departments/llb"
                    className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    LLB Department
                  </Link>
                </li>
                <li>
                  <Link
                    href="/academics/resources/library"
                    className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    Library
                  </Link>
                </li>
                <li>
                  <Link
                    href="/academics/resources/committes"
                    className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    Committees
                  </Link>
                </li>
                <li>
                  <Link
                    href="/academics/resources/CertificateCourse"
                    className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    Certificate Courses
                  </Link>
                </li>
              </ul>
            </nav>
        </div>

          {/* Important Resources */}
          <div>
            <div className="text-xl font-bold mb-4 pb-2 border-b border-blue-700">Important Resources</div>
            <nav aria-label="Important resources navigation">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/important-links"
                    className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    Important Links
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faculty"
                    className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    Faculty
                  </Link>
                </li>
                <li>
                  <Link
                    href="/developers"
                    className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    Contact to  Developers
                  </Link>
                </li>
                
               
              </ul>
            </nav>
          </div>

          {/* Contact Us */}
          <div>
            <div className="text-xl font-bold mb-4 pb-2 border-b border-blue-700">Contact Us</div>
            <address className="not-italic text-blue-200 space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-blue-300 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <div>
                  <p>Mandavgaon Road, MH SH 55,</p>
                  <p>Shrigonda, Maharashtra 413701</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a
                  href="mailto:info@ssnlc.edu.in"
                  className="hover:text-white transition-colors duration-300"
                >
                  snlawcollegeshrigonda@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a
                  href="tel:+919270709696"
                  className="hover:text-white transition-colors duration-300"
                >
                  +91 9404449696
                </a>
              </div>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-block bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
                >
                  Get Directions
                </Link>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800 pt-8 mt-8">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="w-full md:w-auto text-center md:text-left mb-2 md:mb-0">
            <p className="text-blue-300 text-sm">&copy; {currentYear} Shri Shivajirao Nagawade Law College. All rights reserved.</p>
          </div>
          <div className="w-full md:w-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-sm text-blue-300">
            <Link href="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <span className="hidden md:inline">|</span>
            <Link href="/terms-of-service" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
           
          </div>
          <div className="w-full md:w-auto text-center md:text-right mt-2 md:mt-0">
            <p className="text-blue-400 text-xs md:text-sm">
              Developed by <Link href="/developers" className="text-white font-semibold hover:text-blue-200 transition-colors duration-300">Computer Department student (SGP) Batch 2024-25</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;