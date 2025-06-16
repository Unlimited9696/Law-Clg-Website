"use client";

import React from 'react';
import EventPageTemplate from '@/components/EventPageTemplate';

const eventData = {
  title: "International Women's Day Celebration",
  subtitle: "Empowering Women in Law and Society",
  date: "8th March, 2025",
  images: [
    {
      src: "/images/womens-day-celebration/1.jpg",
      alt: "Women's Day Main Celebration"
    },
    {
      src: "/images/womens-day-celebration/2.jpg",
      alt: "Cultural Performances and Activities"
    }
  ],
  description: "Women's Day was celebrated on 8th March, 2025 at Shri Shivajirao Nagawade Law College, Shrigonda, with warmth and enthusiasm. The program highlighted the strength, achievements, and contributions of women in various fields. Students and faculty participated in thought-provoking speeches, cultural performances, and engaging activities that promoted empowerment, awareness, and appreciation for women's roles in society. The event fostered a spirit of respect, inspiration, and unity on campus.",
  highlights: [
    "Keynote speeches by successful women professionals",
    "Panel discussion on women in legal profession",
    "Cultural performances celebrating womanhood",
    "Awards for outstanding female achievers",
    "Workshop on women's rights and legal awareness",
    "Interactive sessions on gender equality",
    "Exhibition showcasing women's achievements"
  ],
  significance: "International Women's Day celebration at SSNLC emphasizes our commitment to gender equality and women's empowerment in the legal profession. The event not only celebrates women's achievements but also raises awareness about the challenges they face and the importance of creating an inclusive environment. It inspires our female students to pursue leadership roles and reinforces the college's dedication to fostering equal opportunities for all."
};

export default function EventPage() {
  return <EventPageTemplate {...eventData} />;
} 