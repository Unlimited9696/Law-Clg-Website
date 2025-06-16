"use client";

import React from 'react';
import EventPageTemplate from '@/components/EventPageTemplate';

const eventData = {
  title: "Constitution Day Celebration",
  subtitle: "Commemorating the Adoption of the Indian Constitution",
  date: "26th November, 2024",
  images: [
    {
      src: '/images/constitution-day/1.jpg',
      alt: 'Constitution Day Celebration'
    },
    {
      src: '/images/constitution-day/2.jpg',
      alt: 'Students participating in Constitution Day activities'
    }
  ],
  description: "Constitution Day was celebrated on 26th November, 2024 at Shri Shivajirao Nagawade Law College, Shrigonda, with active participation from students and teachers. The event honored the adoption of the Indian Constitution, highlighting its significance through speeches, readings, and discussions, fostering awareness and respect for constitutional values among the students.",
  highlights: [
    "Reading of the Preamble to the Constitution",
    "Special lectures on Constitutional values and principles",
    "Student presentations on fundamental rights and duties",
    "Interactive discussions on constitutional democracy",
    "Exhibition of constitutional history and development",
    "Quiz competition on constitutional knowledge",
    "Group activities promoting constitutional awareness"
  ],
  significance: "Constitution Day celebration at SSNLC serves as a reminder of our constitutional values and principles. It helps students understand the importance of the Constitution in our daily lives and their role as future legal professionals in upholding constitutional principles. The event strengthens their commitment to justice, liberty, equality, and fraternity as enshrined in our Constitution."
};

export default function EventPage() {
  return <EventPageTemplate {...eventData} />;
}
