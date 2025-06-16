"use client";

import React from 'react';
import EventPageTemplate from '@/components/EventPageTemplate';

const eventData = {
  title: "Republic Day Celebration",
  subtitle: "Honoring India's Constitutional Democracy",
  date: "26th January, 2025",
  images: [
    {
      src: '/images/Republic-Day/1.jpg',
      alt: 'Republic Day Flag Hoisting'
    },
    {
      src: '/images/Republic-Day/2.jpg',
      alt: 'Cultural Program'
    }
  ],
  description: "Republic Day was celebrated on 26th January, 2025 at Shri Shivajirao Nagawade Law College, Shrigonda, with patriotic fervor. The event was graced by Amol Nagawade and Principal Anjula Chowbe, who addressed the students and staff, highlighting the importance of the Constitution and the values of democracy.",
  highlights: [
    "Flag hoisting ceremony",
    "National anthem and patriotic songs",
    "Address by Chief Guest Amol Nagawade",
    "Principal's message on constitutional values",
    "Cultural performances by students",
    "Parade by NCC cadets",
    "Patriotic cultural program"
  ],
  significance: "Republic Day celebration at SSNLC is not just a ceremonial event but a reminder of our constitutional duties and democratic values. As a law college, it holds special significance in reinforcing our commitment to upholding the principles of justice, liberty, equality, and fraternity enshrined in our Constitution. The celebration inspires future legal professionals to be guardians of constitutional values."
};

export default function EventPage() {
  return <EventPageTemplate {...eventData} />;
}
