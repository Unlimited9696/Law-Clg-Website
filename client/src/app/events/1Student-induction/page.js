"use client";

import React from 'react';
import EventPageTemplate from '@/components/EventPageTemplate';

const eventData = {
  title: "Student Induction  2024-25",
  subtitle: "Welcoming Our New Batch of Future Legal Professionals",
  date: "September 26, 2024",
  images: [
    {
      src: '/images/student-induction/1.jpg',
      alt: 'Student Induction Program - Welcome Ceremony'
    },
    {
      src: '/images/student-induction/2.jpg',
      alt: 'Student Induction Program - Guest Speakers'
    },
    {
      src: '/images/student-induction/3.jpg',
      alt: 'Student Induction Program - Faculty Address'
    },
    {
      src: '/images/student-induction/4.jpg',
      alt: 'Student Induction Program - Student Orientation'
    }
  ],
  description: "The Student Induction Program for the academic year 2024–25 was held on 26th September, 2024 at Shri Shivajirao Nagawade Law College, Shrigonda, for first-year LL.B. students. The program aimed to familiarize students with the academic environment, college facilities, and legal education journey ahead. It was graced by Chief Guest Satishchandra Suryavanshi and esteemed guests Adv. Ashok Valunj, Adv. Ashok Rode, Adv. Sunil Bhor, and Adv. Jayant Shinde from the Shrigonda Bar Association.",
  highlights: [
    "Welcome address by Principal Dr. Anjula Chowbe",
    "Guidance from Shrigonda Bar Association members",
    "Motivational session by Prof. Sakshi Prathamshetty",
    "Interactive orientation by Prof. Fate",
    "Introduction to college facilities and resources",
    "Overview of academic curriculum"
  ],
  significance: "The Student Induction Program marks the beginning of our new students' journey in legal education. It serves as a crucial platform to introduce them to the academic environment, establish connections with faculty and peers, and understand the path ahead in their legal studies. The program embodies our commitment to providing quality legal education and nurturing future legal professionals."
};

export default function EventsPage() {
  return <EventPageTemplate {...eventData} />;
} 