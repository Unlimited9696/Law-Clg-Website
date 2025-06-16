"use client";

import React from 'react';
import EventPageTemplate from '@/components/EventPageTemplate';

const eventData = {
  title: "Shiv Jayanti Celebration",
  subtitle: "Commemorating Chhatrapati Shivaji Maharaj's Legacy",
  date: "19th February, 2025",
  images: [
    {
      src: '/images/Shiv-Jayanti-Celebration/1.jpg',
      alt: 'Shiv Jayanti Main Celebration'
    },
    {
      src: '/images/Shiv-Jayanti-Celebration/2.jpg',
      alt: 'Cultural Performances'
    }
  ],
  description: "Shiv Jayanti was celebrated on 19th February, 2025 at Shri Shivajirao Nagawade Law College, Shrigonda, to honor the birth anniversary of Chhatrapati Shivaji Maharaj. The event was graced by guest Amol Nagawade, Golande Sir, Principal Anjula Chowbe, and faculty members Prof. Sakshi Prathamshetty, Prof. Fate, and Prof. Ghule. Students participated enthusiastically in the celebration, which included speeches and cultural performances reflecting Shivaji Maharaj's valor and legacy.",
  highlights: [
    "Traditional welcome ceremony",
    "Speeches on Shivaji Maharaj's life and principles",
    "Cultural performances depicting historical events",
    "Exhibition on Maratha history",
    "Student presentations on administrative systems",
    "Traditional martial arts demonstration",
    "Special address by distinguished guests"
  ],
  significance: "Shiv Jayanti celebration at SSNLC goes beyond cultural commemoration - it serves as an educational opportunity to learn from Chhatrapati Shivaji Maharaj's principles of justice, governance, and leadership. His administrative and judicial systems offer valuable insights for law students, while his values of courage, justice, and ethical governance remain relevant in contemporary legal education."
};

export default function EventPage() {
  return <EventPageTemplate {...eventData} />;
}
