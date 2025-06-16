"use client";

import React from 'react';
import EventPageTemplate from '@/components/EventPageTemplate';

const eventData = {
  title: "Shri Shivajirao Nagawade Jayanti",
  subtitle: "Celebrating Our Founder's Legacy",
  date: "18th January, 2025",
  images: [
    {
      src: '/images/Shri-Shivajirao-Nagawade-Jayanti/1.jpg',
      alt: 'Shri Shivajirao Nagawade Jayanti Rally'
    },
    {
      src: '/images/Shri-Shivajirao-Nagawade-Jayanti/2.jpg',
      alt: 'Campus Celebration'
    }
  ],
  description: "Shri Shivajirao Nagawade Jayanti was celebrated on 18th January, 2025 with great enthusiasm at Shri Shivajirao Nagawade Law College, Shrigonda. Students and staff participated in a rally to honor his legacy, followed by a celebration on campus highlighting his contributions to education and society.",
  highlights: [
    "Grand rally through Shrigonda town",
    "Floral tributes to Shri Shivajirao Nagawade",
    "Speeches highlighting his vision and contributions",
    "Cultural performances by students",
    "Exhibition on founder's life and achievements",
    "Special addresses by college management",
    "Student presentations on his educational philosophy"
  ],
  significance: "The celebration of Shri Shivajirao Nagawade Jayanti is a tribute to our founder's vision of providing quality legal education in rural areas. His dedication to education and social development continues to inspire our institution's mission. The event helps students understand the rich legacy they are part of and motivates them to uphold the values and principles he stood for."
};

export default function EventPage() {
  return <EventPageTemplate {...eventData} />;
}
