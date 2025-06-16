"use client";

import React from 'react';
import EventPageTemplate from '@/components/EventPageTemplate';

const eventData = {
  title: "Savitribai Phule Jayanti",
  subtitle: "Honoring India's First Female Teacher and Social Reformer",
  date: "3rd January, 2024",
  images: [
    {
      src: '/images/savitribai-phule-jayanti/1.jpg',
      alt: 'Savitribai Phule Jayanti Celebration'
    },
    {
      src: '/images/savitribai-phule-jayanti/2.jpg',
      alt: 'Tribute to Savitribai Phule'
    }
  ],
  description: "Savitribai Phule Jayanti was celebrated on 3rd January, 2024 at Shri Shivajirao Nagawade Law College, Shrigonda, to honor the birth anniversary of India's first female teacher and social reformer. Students and faculty paid tribute to her legacy through speeches and activities highlighting her contributions to women's education and social justice.",
  highlights: [
    "Floral tributes to Savitribai Phule",
    "Speeches on women's education and empowerment",
    "Student presentations on social reform",
    "Cultural programs highlighting her legacy",
    "Discussion on women's rights and education",
    "Special focus on girl child education",
    "Exhibition on women achievers in law"
  ],
  significance: "The celebration of Savitribai Phule Jayanti at SSNLC emphasizes our commitment to gender equality and social justice. It inspires our students, especially women, to pursue education and work towards social reform. Her life and work continue to be relevant in today's context, reminding us of the importance of education in bringing about social change and empowerment."
};

export default function EventPage() {
  return <EventPageTemplate {...eventData} />;
}
