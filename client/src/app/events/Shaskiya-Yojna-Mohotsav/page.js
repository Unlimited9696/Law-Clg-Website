"use client";

import React from 'react';
import EventPageTemplate from '@/components/EventPageTemplate';

const eventData = {
  title: "Shaskiya Yojna Mohotsav",
  subtitle: "Awareness Program on Government Schemes",
  date: "20th March, 2025",
  images: [
    {
      src: '/images/14. Shaskiya Yojna Mohotsav/1.jpg',
      alt: 'Government Schemes Awareness Program'
    },
    {
      src: '/images/14. Shaskiya Yojna Mohotsav/2.jpg',
      alt: 'Interactive Session on Government Schemes'
    }
  ],
  description: "The Shaskiya Yojna Mohotsav was organized to raise awareness about various government schemes and initiatives. The event featured informative sessions, presentations, and interactive displays to help students and community members understand and access different government welfare programs.",
  highlights: [
    "Detailed presentations on government schemes",
    "Interactive Q&A sessions",
    "Information booths for different schemes",
    "Expert guidance on scheme application",
    "Distribution of informative materials",
    "Success stories and case studies",
    "One-on-one consultation sessions"
  ],
  significance: "This event plays a crucial role in bridging the information gap between government welfare schemes and potential beneficiaries. As future legal professionals, understanding these schemes helps our students better serve society and ensure that benefits reach the intended recipients. The program aligns with our mission of creating socially conscious legal professionals."
};

export default function EventPage() {
  return <EventPageTemplate {...eventData} />;
}
