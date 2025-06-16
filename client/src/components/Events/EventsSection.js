"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function EventsSection() {
  const events = [
    {
      id: 1,
      title: "Student Induction Program",
      date: "August 1, 2023",
      description: "Welcome ceremony for the new batch of law students, featuring orientation and insights from the Bar Association.",
      image: "/images/01. Students Induction/1.jpg",
      category: "Academic"
    },
    {
      id: 2,
      title: "Constitution Day Celebration",
      date: "November 26, 2023",
      description: "Special lecture series and activities commemorating the adoption of India's Constitution.",
      image: "/images/02. Constitutional Day/1.jpg",
      category: "Cultural"
    },
    {
      id: 3,
      title: "Savitribai Phule Jayanti",
      date: "January 3, 2024",
      description: "Celebration honoring the life and contributions of Savitribai Phule to education and social reform.",
      image: "/images/03. Savitribai Phule Jayanti/1.jpg",
      category: "Cultural"
    },
    {
      id: 4,
      title: "Student Council Appointment",
      date: "January 15, 2024",
      description: "Formal ceremony for the appointment of the new Student Council members.",
      image: "/images/04. Students Council/1.jpg",
      category: "Academic"
    },
    {
      id: 5,
      title: "Shri Shivajirao Nagawade Jayanti",
      date: "January 26, 2024",
      description: "Celebration of our college founder's birth anniversary with cultural programs.",
      image: "/images/05. Shri Shivajirao Nagawade Jayanti/1.jpg",
      category: "Cultural"
    },
    {
      id: 6,
      title: "Republic Day Celebration",
      date: "January 26, 2024",
      description: "Flag hoisting and cultural program celebrating India's Republic Day.",
      image: "/images/06. Republic Day/1.jpg",
      category: "Cultural"
    },
    {
      id: 7,
      title: "Educational Trip to Alibaug",
      date: "February 6, 2024",
      description: "Educational excursion combining learning with recreation for law students.",
      image: "/images/07. Picnic To Alibaug/1.jpg",
      category: "Academic"
    },
    {
      id: 8,
      title: "Shiv Jayanti Celebration",
      date: "February 19, 2024",
      description: "Grand celebration of Chhatrapati Shivaji Maharaj Jayanti.",
      image: "/images/08. Shiv Jayanti/1.jpg",
      category: "Cultural"
    }
  ];

  const categories = ["All", "Academic", "Cultural", "Community"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents = activeCategory === "All" 
    ? events 
    : events.filter(event => event.category === activeCategory);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            College Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest events, celebrations, and academic activities.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-md">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${activeCategory === category 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-blue-600'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {filteredEvents.map((event) => (
            <div key={event.id} className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="flex flex-col h-full">
                  {/* Image Container */}
                  <div className="relative h-48 w-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-blue-600 text-sm mb-3">
                      {event.date}
                    </p>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {event.description}
                    </p>
                    <div className="flex justify-end">
                      <Link 
                        href={`/events/${event.id}`}
                        className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors duration-300"
                      >
                        View Details
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 