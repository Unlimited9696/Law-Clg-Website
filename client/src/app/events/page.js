"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Function to format date as DD-MM-YYYY
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

// Function to add cache-busting parameter to image URLs
const getRefreshedImageUrl = (imageUrl) => imageUrl;

// Complete list of events for 2024-25
const eventsData = [
  {
    id: 1,
    title: "Students Induction Program",
    date: "2024-09-26",
    description: "The Student Induction Program for the academic year 2024–25 welcomed first-year LL.B. students, featuring Chief Guest Satishchandra Suryavanshi and esteemed guests from Shrigonda Bar Association.",
    image: "/images/student-induction/1.jpg",
    thumbnail: "/images/thumbnails/1.jpg",
    slug: "student-induction-program",
    buttonLabel: "View Details",
    buttonLink: "/events/1Student-induction",
    category: "Academic"
  },
  {
    id: 2,
    title: "Constitution Day",
    date: "2024-11-26",
    description: "Constitution Day was celebrated with active participation from students and teachers, featuring speeches, readings, and discussions on constitutional values.",
    image: "/images/constitution-day/1.jpg",
    thumbnail: "/images/thumbnails/2.jpg",
    slug: "constitution-day",
    buttonLabel: "View Event",
    buttonLink: "/events/constitution-day",
    category: "Academic"
  },
  {
    id: 3,
    title: "Savitribai Phule Jayanti",
    date: "2025-01-03",
    description: "Celebration honoring India's first female teacher and social reformer, featuring speeches and activities highlighting her contributions to women's education and social justice.",
    image: "/images/savitribai-phule-jayanti/1.jpg",
    thumbnail: "/images/thumbnails/3.jpg",
    slug: "savitribai-phule-jayanti",
    buttonLabel: "View Celebration",
    buttonLink: "/events/savitribai-phule-jayanti",
    category: "Cultural"
  },
  {
    id: 4,
    title: "Appointment of Students Council 2024-25",
    date: "2025-01-15",
    description: "Appointment ceremony of the Student Council with Shoyeb Khan as Student Representative, Pooja Bendre as Women's Student Representative, and Ashwin Waghmare as Cultural Representative.",
    image: "/images/Appointment-of-Students-Council/1.jpg",
    thumbnail: "/images/thumbnails/4.jpg",
    slug: "student-council-appointment",
    buttonLabel: "View Ceremony",
    buttonLink: "/events/Appointment-of-Students-Council",
    category: "Academic"
  },
  {
    id: 5,
    title: "Shri Shivajirao Nagawade Jayanti",
    date: "2025-01-18",
    description: "Rally and celebration honoring the legacy of Shri Shivajirao Nagawade, featuring student and staff participation in various commemorative activities.",
    image: "/images/Shri-Shivajirao-Nagawade-Jayanti/1.jpg",
    thumbnail: "/images/thumbnails/5.jpg",
    slug: "shivajirao-nagawade-jayanti",
    buttonLabel: "View Celebration",
    buttonLink: "/events/Shri-Shivajirao-Nagawade-Jayanti",
    category: "Cultural"
  },
  {
    id: 6,
    title: "Republic Day",
    date: "2025-01-26",
    description: "Patriotic celebration graced by Amol Nagawade and Principal Anjula Chowbe, highlighting the importance of the Constitution and democratic values.",
    image: "/images/Republic-Day/1.jpg",
    thumbnail: "/images/thumbnails/6.jpg",
    slug: "republic-day",
    buttonLabel: "View Celebration",
    buttonLink: "/events/Republic-Day",
    category: "Cultural"
  },
  {
    id: 7,
    title: "Picnic To Alibaug",
    date: "2025-02-06",
    description: "Two-day educational excursion to Alibaug, combining visits to scenic beaches and historical sites with group activities for students and faculty.",
    image: "/images/Picnic-To-Alibaug/1.jpg",
    thumbnail: "/images/thumbnails/7.jpg",
    slug: "picnic-to-alibaug",
    buttonLabel: "View Trip",
    buttonLink: "/events/Picnic-To-Alibaug",
    category: "Cultural"
  },
  {
    id: 8,
    title: "Shiv Jayanti Celebration",
    date: "2025-02-19",
    description: "Celebration of Chhatrapati Shivaji Maharaj's birth anniversary with guest Amol Nagawade and faculty members, featuring speeches and cultural performances.",
    image: "/images/Shiv-Jayanti-Celebration/1.jpg",
    thumbnail: "/images/thumbnails/8.jpg",
    slug: "shiv-jayanti",
    buttonLabel: "View Event",
    buttonLink: "/events/Shiv-Jayanti-Celebration",
    category: "Cultural"
  },
  {
    id: 9,
    title: "Traditional Day",
    date: "2025-03-01",
    description: "Students and faculty celebrated Traditional Day wearing traditional attire, showcasing India's rich cultural diversity through performances and activities.",
    image: "/images/Traditional Day/1.jpg",
    thumbnail: "/images/thumbnails/9.jpg",
    slug: "traditional-day",
    buttonLabel: "View Celebration",
    buttonLink: "/events/Traditional-Day",
    category: "Cultural"
  },
  {
    id: 10,
    title: "Bollywood Day",
    date: "2025-03-02",
    description: "Fun-filled celebration with students dressed as iconic Bollywood characters, featuring music, dance, and entertainment activities.",
    image: "/images/Bollywood-day/1.jpg",
    thumbnail: "/images/thumbnails/10.jpg",
    slug: "bollywood-day",
    buttonLabel: "View Event",
    buttonLink: "/events/Bollywood-day",
    category: "Cultural"
  },
  {
    id: 11,
    title: "Mismatch Day",
    date: "2025-03-03",
    description: "Creative and fun-filled day where students showcased their quirky fashion sense through mismatched outfits.",
    image: "/images/Mismatch-Day/1.jpg",
    thumbnail: "/images/thumbnails/11.jpg",
    slug: "mismatch-day",
    buttonLabel: "View Event",
    buttonLink: "/events/Mismatch-Day",
    category: "Cultural"
  },
  {
    id: 12,
    title: "Women's Day Celebration",
    date: "2025-03-08",
    description: "International Women's Day celebration featuring thought-provoking speeches, cultural performances, and activities promoting women's empowerment.",
    image: "/images/Women's-Day-Celebration/1.jpg",
    thumbnail: "/images/thumbnails/12.jpg",
    slug: "womens-day",
    buttonLabel: "View Celebration",
    buttonLink: "/events/womens-day-celebration",
    category: "Cultural"
  },
  {
    id: 13,
    title: "Anuraj Youth Fest 2025",
    date: "2025-03-15",
    description: "Youth festival featuring prize distribution ceremony and inspiring guest speeches during Mahatma Phule Jayanti celebrations.",
    image: "/images/Anuraj-Youth-Fest-2025/1.jpg",
    thumbnail: "/images/thumbnails/13.jpg",
    slug: "anuraj-youth-fest",
    buttonLabel: "View Festival",
    buttonLink: "/events/Anuraj-Youth-Fest-2025",
    category: "Cultural"
  },
  {
    id: 14,
    title: "Shaskiya Yojna Mohotsav",
    date: "2025-03-20",
    description: "Informative event raising awareness about various government schemes through sessions, presentations, and interactive displays.",
    image: "/images/Shaskiya-Yojna-Mohotsav/1.jpg",
    thumbnail: "/images/thumbnails/14.jpg",
    slug: "shaskiya-yojna-mohotsav",
    buttonLabel: "View Event",
    buttonLink: "/events/Shaskiya-Yojna-Mohotsav",
    category: "Academic"
  },
  {
    id: 15,
    title: "Legal Charts Making Session",
    date: "2025-03-25",
    description: "Interactive session conducted by Prof. Sakshi Prathamshetty where students created informative legal charts combining knowledge with creativity.",
    image: "/images/LEGAL-CHARTS-MAKING-SESSION/1.jpg",
    thumbnail: "/images/thumbnails/16.jpg",
    slug: "legal-charts-making",
    buttonLabel: "View Session",
    buttonLink: "/events/LEGAL-CHARTS-MAKING-SESSION",
    category: "Academic"
  },
  {
    id: 16,
    title: "Ambedkar Jayanti",
    date: "2025-04-14",
    description: "Celebration commemorating Dr. B.R. Ambedkar's birth anniversary with speeches and discussions on constitutional values and social justice.",
    image: "/images/Ambedkar-Jayanti/1.jpg",
    thumbnail: "/images/thumbnails/15.jpg",
    slug: "ambedkar-jayanti",
    buttonLabel: "View Celebration",
    buttonLink: "/events/Ambedkar-Jayant",
    category: "Cultural"
  }
];

export default function EventsPage() {
  const router = useRouter();
  const [refreshedImages, setRefreshedImages] = useState({});
  
  // Sort events by date (descending - newest first)
  const sortedEvents = [...eventsData].sort((a, b) => {
    // Parse the date strings in YYYY-MM-DD format
    const [yearA, monthA, dayA] = a.date.split('-').map(Number);
    const [yearB, monthB, dayB] = b.date.split('-').map(Number);
    
    // Compare years first
    if (yearA !== yearB) return yearB - yearA;
    
    // If years are equal, compare months
    if (monthA !== monthB) return monthB - monthA;
    
    // If months are equal, compare days
    return dayB - dayA;
  });

  // Function to refresh all thumbnail images
  const refreshAllThumbnails = () => {
    const refreshed = {};
    eventsData.forEach(event => {
      refreshed[event.id] = getRefreshedImageUrl(event.thumbnail || event.image);
    });
    setRefreshedImages(refreshed);
  };

  // Refresh thumbnails on initial load
  useEffect(() => {
    refreshAllThumbnails();
    
    // Set up auto-refresh every 5 minutes
    const intervalId = setInterval(refreshAllThumbnails, 5 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  const categories = ["All", "Academic", "Cultural"];
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  // Filter events based on category and search term
  const filteredEvents = eventsData
    .filter(event => 
      activeCategory === "All" || event.category === activeCategory
    )
    .filter(event =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Sort events by date (newest first)
  const sortedFilteredEvents = [...filteredEvents].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen">
      {/* Hero/Cover Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image
          src={getRefreshedImageUrl("/images/events/caver.jpg")}
          alt="College Events Cover"
          fill
          priority
          className="object-cover brightness-75"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex flex-col justify-end p-6 md:p-12">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              College Events
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Explore the vibrant academic and cultural events at Shri Shivajirao Nagawade Law College
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            All Events
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <p className="text-lg text-gray-600">
              Stay updated with our latest events and activities
            </p>
            <button 
              onClick={refreshAllThumbnails}
              className="bg-[#233876] text-white py-2 px-4 rounded-md hover:bg-[#1a2a5a] transition-colors text-sm"
            >
              Refresh Images
            </button>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedFilteredEvents.map((event, index) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={refreshedImages[event.id] || (event.thumbnail || event.image)}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={index < 3} // Only prioritize the first 3 images that are likely above the fold
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                    <span className="text-white font-medium text-sm bg-[#233876]/80 px-3 py-1 rounded-full">
                      {formatDate(event.date)}
                    </span>
                  </div>
                </div>
                <div className="p-6 border-t border-gray-100 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#233876] transition-colors">
                    {event.title}
                  </h3>
                  <div className="mb-4 text-gray-600 hidden">
                    <p className="mb-2">
                      <span className="font-medium">Date:</span> {formatDate(event.date)}
                    </p>
                  </div>
                  <p className="text-gray-600 mb-5 line-clamp-3 flex-grow">
                    {event.description}
                  </p>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  <Link 
                    href={event.buttonLink}
                    className="w-full bg-[#233876] text-white py-2 px-4 rounded-md hover:bg-[#1a2a5a] transition-all duration-300 flex items-center justify-center group-hover:shadow-lg"
                  >
                    <span>{event.buttonLabel}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 