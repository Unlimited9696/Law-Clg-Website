"use client";

import React from 'react';
import EventPageTemplate from '@/components/EventPageTemplate';

const eventData = {
  title: "Students Induction Program 2024-25",
  subtitle: "Welcoming New Students to Legal Education",
  date: "26th September, 2024",
  images: [
    {
      src: '/images/student-induction/1.jpg',
      alt: 'Student Induction Program - Welcome Ceremony'
    },
    {
      src: '/images/student-induction/2.jpg',
      alt: 'Chief Guest Address'
    }
  ],
  description: "The Student Induction Program for the academic year 2024–25 was held on 26th September, 2024 at Shri Shivajirao Nagawade Law College, Shrigonda, for first-year LL.B. students. The program aimed to familiarize students with the academic environment, college facilities, and legal education journey ahead. It was graced by Chief Guest Satishchandra Suryavanshi and esteemed guests from the Shrigonda Bar Association including Adv. Ashok Valunj, Adv. Ashok Rode, Adv. Sunil Bhor, and Adv. Jayant Shinde.",
  highlights: [
    "Welcome address by Principal Anjula Chowbe",
    "Keynote speech by Chief Guest Satishchandra Suryavanshi",
    "Guidance from Shrigonda Bar Association members",
    "Motivational sessions by Prof. Sakshi Prathamshetty and Prof. Fate",
    "Introduction to college facilities and academic programs",
    "Interactive session with faculty members",
    "Distribution of study materials and resources"
  ],
  significance: "The Student Induction Program plays a crucial role in helping new students transition into legal education. It provides them with essential information about the academic curriculum, introduces them to the faculty, and helps them understand the expectations and opportunities in their legal education journey. The presence of distinguished members from the Shrigonda Bar Association adds practical insights and inspiration for the students beginning their legal studies."
};

export default function EventPage() {
  return <EventPageTemplate {...eventData} />;
} 