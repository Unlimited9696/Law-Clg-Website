"use client"
import React, { useEffect } from 'react';
import { CarouselCompo } from '@/components/Home/Carousel/Carousel.js'
import AboutCard from '@/components/About/AboutCard'
//import NoticeLine from '@/components/Home/NoticeLine/NoticeLine'
import Gallery from '@/components/Home/Gallery/Gallery'
import Faculty from '@/app/faculty/page.js'
import Department from '@/components/Home/Department/Department';
import ImportantLinks from '@/components/Home/ImportantLinks/ImportantLinks';
import dynamic from 'next/dynamic';
import ScrollingAnnouncements from '@/components/ScrollingAnnouncements';
import LeadershipCards from '@/components/Home/LeadershipCards';
// Dynamically import components that are further down the page
const LazyAccordion = dynamic(() => import('@/components/Home/Accordion/Accordion'));
const LazyReachUsForm = dynamic(() => import('@/components/ReachUs/ReachUsForm'));

// ==================== Home Page ==================== 
export default function page() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section with Carousel */}
      <section className="relative mb-8">
        <div className="absolute inset-0 bg-black/30 z-10" /> {/* Overlay for better text visibility */}
        <CarouselCompo />
      </section>

      {/* Announcements Section */}
      <ScrollingAnnouncements />
      
     

      {/* Leadership Cards Section */}
      <LeadershipCards />

      {/* About Section with enhanced styling */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <AboutCard />
        </div>
      </section>

      {/* Department Section with modern card layout */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <Department />
        </div>
      </section>
      
      {/* Important Links Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <ImportantLinks />
        </div>
      </section>
      
      {/* Gallery Section with improved layout */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <Gallery />
        </div>
      </section>

      {/* Admission Enquiry Form Section with better visual appeal */}
      <section id="admission-enquiry" className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <LazyReachUsForm />
        </div>
      </section>

     
    </main>
  )
}
