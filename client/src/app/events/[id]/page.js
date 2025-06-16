"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Function to format date as DD-MM-YYYY
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

// Event data with detailed information
const eventsData = [
  {
    id: 1,
    title: "student-induction-program",
    date: "2024-09-26",
    description: "Welcomed first-year LL.B. students, introducing them to the academic environment and legal studies, with dignitaries from Shrigonda Bar Association.",
    image: "/images/events/1.png",
    details: {
      venue: "Main Auditorium, SSNLC",
      time: "10:00 AM",
      coordinator: "Prof. Rajesh Kumar",
      contact: "induction@ssnlc.edu",
      schedule: [
        "10:00 AM - Welcome Address by Principal",
        "10:30 AM - Introduction to College History and Vision",
        "11:30 AM - Address by Bar Association Members",
        "12:30 PM - Campus Tour",
        "02:00 PM - Interactive Session with Faculty"
      ]
    }
  },
  {
    id: 2,
    title: "Constitution Day",
    date: "2024-11-26",
    description: "Celebrated with speeches and discussions on the Indian Constitution, emphasizing its values and significance.",
    image: "/images/events/2.png",
    details: {
      venue: "College Auditorium",
      time: "09:30 AM",
      coordinator: "Dr. Priya Sharma",
      contact: "events@ssnlc.edu",
      schedule: [
        "09:30 AM - Constitution Reading Session",
        "10:30 AM - Expert Lecture on Constitutional Values",
        "11:30 AM - Student Presentations",
        "02:00 PM - Panel Discussion"
      ]
    }
  },
  {
    id: 3,
    title: "Savitribai Phule Jayanti",
    date: "2024-01-03",
    description: "Tributes paid to India's first female teacher with speeches and activities highlighting her contributions to women's education.",
    image: "/images/events/3.png",
    details: {
      venue: "College Campus",
      time: "10:00 AM",
      coordinator: "Prof. Meera Patil",
      contact: "cultural@ssnlc.edu",
      schedule: [
        "10:00 AM - Floral Tributes",
        "10:30 AM - Keynote Speech",
        "11:30 AM - Cultural Program",
        "02:00 PM - Women Empowerment Discussion"
      ]
    }
  }
  // ... Add similar detailed information for other events
];

export default function EventPage({ params }) {
  const event = eventsData.find(e => e.id === parseInt(params.id));
  
  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link href="/events" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          Back to Events
        </Link>

        {/* Event Header */}
        <div className="relative h-96 rounded-xl overflow-hidden mb-8">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Event Content */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{event.title}</h1>
          <p className="text-xl text-gray-600 mb-8">
            <span className="font-medium">Date:</span> {formatDate(event.date)}
          </p>
          
          <p className="text-lg text-gray-700 mb-8">{event.description}</p>

          {/* Event Details */}
          {event.details && (
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Event Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.details.venue && (
                    <p className="text-gray-700">
                      <span className="font-medium">Venue:</span> {event.details.venue}
                    </p>
                  )}
                  {event.details.time && (
                    <p className="text-gray-700">
                      <span className="font-medium">Time:</span> {event.details.time}
                    </p>
                  )}
                  {event.details.coordinator && (
                    <p className="text-gray-700">
                      <span className="font-medium">Coordinator:</span> {event.details.coordinator}
                    </p>
                  )}
                  {event.details.contact && (
                    <p className="text-gray-700">
                      <span className="font-medium">Contact:</span> {event.details.contact}
                    </p>
                  )}
                </div>
              </div>

              {/* Schedule */}
              {event.details.schedule && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Schedule</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {event.details.schedule.map((item, index) => (
                      <li key={index} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 