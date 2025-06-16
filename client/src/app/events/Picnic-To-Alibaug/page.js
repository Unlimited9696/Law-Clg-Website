"use client";

import React from 'react';
import EventPageTemplate from '@/components/EventPageTemplate';

const eventData = {
  title: "Educational Trip to Alibaug",
  subtitle: "Learning and Recreation by the Sea",
  date: "6th-7th February, 2025",
  images: [
    {
      src: '/images/Picnic-To-Alibaug/1.jpg',
      alt: 'Students at Alibaug Beach'
    },
    {
      src: '/images/Picnic-To-Alibaug/2.jpg',
      alt: 'Group Activities'
    }
  ],
  description: "A fun-filled picnic to Alibaug was organized on 6th and 7th February 2025 by Shri Shivajirao Nagawade Law College, Shrigonda, providing students with a refreshing break from academics. The trip included visits to scenic beaches, historical sites, and group activities that fostered bonding and enjoyment among students and faculty. It was a memorable experience that combined relaxation with learning outside the classroom.",
  highlights: [
    "Visit to historic Kolaba Fort",
    "Beach activities and team games",
    "Educational tours of local heritage sites",
    "Group bonding activities",
    "Cultural evening by students",
    "Nature exploration and photography",
    "Interactive sessions with faculty"
  ],
  significance: "The educational trip to Alibaug serves multiple purposes - it provides students with a much-needed break from academic routine, fosters stronger bonds between students and faculty, and offers experiential learning opportunities. Such outings are essential for holistic development, helping students develop social skills, cultural awareness, and team spirit while creating lasting memories of their college life."
};

export default function EventPage() {
  return <EventPageTemplate {...eventData} />;
}
