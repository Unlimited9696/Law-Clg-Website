"use client";

import React from 'react';
import EventPageTemplate from '@/components/EventPageTemplate';

const eventData = {
  title: "Bollywood Day Celebration",
  subtitle: "A Day of Cinematic Fun and Entertainment",
  date: "2nd March, 2025",
  images: [
    {
      src: '/images/Bollywood-day/1.jpg',
      alt: 'Students in Bollywood Character Costumes'
    },
    {
      src: '/images/Bollywood-day/2.jpg',
      alt: 'Dance Performances'
    }
  ],
  description: "Bollywood Day was celebrated with excitement at Shri Shivajirao Nagawade Law College, Shrigonda. Students enthusiastically dressed up as iconic Bollywood characters, adding color and energy to the campus. The event featured music, dance, and fun activities inspired by Indian cinema, creating a lively and entertaining atmosphere for all.",
  highlights: [
    "Bollywood character costume competition",
    "Dance performances to popular songs",
    "Movie scene recreations",
    "Bollywood quiz competition",
    "Best costume awards",
    "Group dance performances",
    "Bollywood music karaoke"
  ],
  significance: "Bollywood Day provides students with a creative outlet to express themselves and build confidence through performance. It serves as a stress-buster amidst academic rigors and helps develop team spirit through group activities. The event celebrates Indian cinema's cultural impact while fostering camaraderie and creating memorable experiences for students."
};

export default function EventPage() {
  return <EventPageTemplate {...eventData} />;
}
