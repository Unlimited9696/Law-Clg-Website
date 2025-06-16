"use client";

import React from 'react';
import EventPageTemplate from '@/components/EventPageTemplate';

const eventData = {
  title: "Ambedkar Jayanti Celebration",
  subtitle: "Commemorating the Birth Anniversary of Dr. B.R. Ambedkar",
  date: "April 14, 2025",
  images: [
    {
      src: '/images/Ambedkar-Jayanti/15.jpg',
      alt: 'Ambedkar Jayanti Celebration Image 1'
    },
    {
      src: '/images/Ambedkar-Jayanti/WhatsApp Image 2025-04-28 at 10.19.13_9947df83.jpg',
      alt: 'Ambedkar Jayanti Celebration Image 2'
    }
  ],
  description: "Every year, SSNLC celebrates Ambedkar Jayanti with great enthusiasm to honor the legacy of Dr. B.R. Ambedkar, the chief architect of the Indian Constitution. The celebration includes various academic and cultural activities that highlight Dr. Ambedkar's contributions to Indian society and law.",
  highlights: [
    "Garlanding ceremony of Dr. Ambedkar's portrait",
    "Special lectures on constitutional law",
    "Student presentations on Ambedkar's philosophy",
    "Cultural performances by students"
  ],
  significance: "This celebration helps our students understand the importance of constitutional values, social justice, and equality - principles that Dr. Ambedkar championed throughout his life. It also reinforces our commitment to providing quality legal education to all sections of society."
};

export default function EventsPage() {
  return <EventPageTemplate {...eventData} />;
}
