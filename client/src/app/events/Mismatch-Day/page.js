"use client";

import React from 'react';
import EventPageTemplate from '@/components/EventPageTemplate';

const eventData = {
  title: "Mismatch Day Celebration",
  subtitle: "A Day of Creative Fashion and Fun",
  date: "3rd March, 2025",
  images: [
    {
      src: '/images/Mismatch-Day/1.jpg',
      alt: 'Students in Mismatched Outfits'
    },
    {
      src: '/images/Mismatch-Day/2.jpg',
      alt: 'Fun Activities and Games'
    }
  ],
  description: "Mismatch Day was celebrated with creativity and laughter at Shri Shivajirao Nagawade Law College, Shrigonda. Students showcased their quirky fashion sense by wearing mismatched outfits, adding a fun and playful vibe to the campus. The event encouraged self-expression and brought a lighthearted spirit to student life.",
  highlights: [
    "Creative mismatched outfit competition",
    "Best mismatch awards",
    "Fun photo sessions",
    "Group activities and games",
    "Fashion walk",
    "Most innovative combination award",
    "Creative expression showcase"
  ],
  significance: "Mismatch Day serves as a unique opportunity for students to break free from conventional fashion norms and express their creativity. The event promotes a sense of fun and camaraderie among students, helping them de-stress from academic pressures. It encourages students to think outside the box and embrace uniqueness, fostering a positive and inclusive campus environment."
};

export default function EventPage() {
  return <EventPageTemplate {...eventData} />;
}
