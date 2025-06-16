"use client";

import React from 'react';
import EventPageTemplate from '@/components/EventPageTemplate';

const eventData = {
  title: "Anuraj Youth Fest 2025",
  subtitle: "Celebrating Youth Excellence and Creativity",
  date: "15th March, 2025",
  images: [
    {
      src: '/images/13. ANURAJ YOUTH FEST/1.jpg',
      alt: 'Youth Fest Celebrations'
    },
    {
      src: '/images/13. ANURAJ YOUTH FEST/2.jpg',
      alt: 'Prize Distribution Ceremony'
    }
  ],
  description: "The Anuraj Youth Fest 2025 was a vibrant celebration of youth talent and creativity, coinciding with Mahatma Phule Jayanti celebrations. The festival featured various competitions, cultural performances, and a grand prize distribution ceremony, showcasing the diverse talents of our students.",
  highlights: [
    "Cultural performances by students",
    "Inter-college competitions",
    "Prize distribution ceremony",
    "Guest speeches on youth empowerment",
    "Talent showcase events",
    "Literary competitions",
    "Sports and games activities"
  ],
  significance: "The Anuraj Youth Fest serves as a platform for students to showcase their talents beyond academics. It promotes cultural exchange, builds confidence, and creates opportunities for students to develop leadership and organizational skills. The festival's timing during Mahatma Phule Jayanti adds historical significance and inspiration for youth empowerment through education."
};

export default function EventPage() {
  return <EventPageTemplate {...eventData} />;
}
