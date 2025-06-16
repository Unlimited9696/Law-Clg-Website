"use client";

import React from 'react';
import EventPageTemplate from '@/components/EventPageTemplate';

const eventData = {
  title: "Appointment of Students Council 2024-25",
  subtitle: "Empowering Student Leadership",
  date: "15th January, 2025",
  images: [
    {
      src: '/images/Appointment-of-Students-Council/1.jpg',
      alt: 'Student Council Appointment Ceremony'
    },
    {
      src: '/images/Appointment-of-Students-Council/2.jpg',
      alt: 'New Student Council Members'
    }
  ],
  description: "The Student Council for the academic year 2024–25 was appointed on 15th January 2025 at Shri Shivajirao Nagawade Law College, Shrigonda. Shoyeb Khan was selected as the Student Representative, Pooja Bendre as the Women's Student Representative, and Ashwin Waghmare as the Cultural Representative. The council aims to actively contribute to student welfare and college activities throughout the year.",
  highlights: [
    "Appointment ceremony of new council members",
    "Oath-taking by Student Representatives",
    "Address by Principal and Faculty members",
    "Presentation of council objectives",
    "Introduction of council members",
    "Discussion of annual action plan",
    "Student welfare initiatives overview"
  ],
  significance: "The Student Council plays a vital role in bridging the gap between students and administration, promoting student welfare, and organizing various academic and cultural activities. The appointment of diverse representatives ensures that different student perspectives are considered in decision-making processes, fostering an inclusive and dynamic campus environment."
};

export default function EventPage() {
  return <EventPageTemplate {...eventData} />;
}
