"use client";

import React from 'react';
import EventPageTemplate from '@/components/EventPageTemplate';

const eventData = {
  title: "Legal Charts Making Session",
  subtitle: "Creative Learning in Legal Education",
  date: "25th March, 2025",
  images: [
    {
      src: '/images/LEGAL-CHART/16.jpg',
      alt: 'Students Creating Legal Charts'
    },
    {
      src: '/images/LEGAL-CHART/16.jpg',
      alt: 'Legal Charts Display'
    }
  ],
  description: "An interactive session was conducted by Prof. Sakshi Prathamshetty where students created informative legal charts combining knowledge with creativity. The session aimed to help students visualize and better understand complex legal concepts through creative chart-making.",
  highlights: [
    "Hands-on chart creation workshop",
    "Visual representation of legal concepts",
    "Creative learning techniques",
    "Group collaboration activities",
    "Display of student-made charts",
    "Interactive learning session",
    "Practical application of legal knowledge"
  ],
  significance: "The Legal Charts Making Session represents an innovative approach to legal education, combining visual learning with traditional legal studies. This creative method helps students better understand and remember complex legal concepts, while developing their presentation and visualization skills. The session demonstrates our commitment to diverse and effective teaching methodologies in legal education."
};

export default function EventPage() {
  return <EventPageTemplate {...eventData} />;
}
