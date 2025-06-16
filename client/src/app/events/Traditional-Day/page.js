"use client";

import React from 'react';
import EventPageTemplate from '@/components/EventPageTemplate';

const eventData = {
  title: "Traditional Day Celebration",
  subtitle: "Showcasing India's Rich Cultural Heritage",
  date: "1st March, 2025",
  images: [
    {
      src: '/images/Traditional Day/1.jpg',
      alt: 'Students in Traditional Attire'
    },
    {
      src: '/images/Traditional Day/2.jpg',
      alt: 'Cultural Performances'
    }
  ],
  description: "Traditional Day was celebrated on 1st March, 2025 at Shri Shivajirao Nagawade Law College, Shrigonda, with great enthusiasm. Students and faculty came dressed in traditional attire, showcasing India's rich cultural diversity. The event featured cultural performances, fashion shows, and activities that highlighted various regional traditions, creating a vibrant and festive atmosphere on campus.",
  highlights: [
    "Traditional dress showcase",
    "Regional cultural performances",
    "State-wise fashion parade",
    "Folk dance and music presentations",
    "Traditional art and craft display",
    "Regional food festival",
    "Cultural unity celebration"
  ],
  significance: "Traditional Day celebration at SSNLC is more than just a cultural event - it's a celebration of India's unity in diversity. The event helps students appreciate and understand different cultural traditions, fostering mutual respect and cultural awareness. It also provides a platform for students to express their cultural identity while learning about others, promoting inclusivity and cultural harmony in our academic community."
};

export default function EventPage() {
  return <EventPageTemplate {...eventData} />;
}
