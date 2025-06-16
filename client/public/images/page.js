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
    title: "Student Induction Program",
    date: "2024-09-26",
    description: "Welcomed first-year LL.B. students, introducing them to the academic environment and legal studies, with dignitaries from Shrigonda Bar Association.",
    image: "/images/events/1.png",
    thumbnail: "/images/events/thumbnails/1.jpg",
    slug: "student-induction-program",
    buttonLabel: "View Details",
    buttonLink: "/events/student-induction-program"
  },
  {
    id: 2,
    title: "Constitution Day",
    date: "2024-11-26",
    description: "Celebrated with speeches and discussions on the Indian Constitution, emphasizing its values and significance.",
    image: "/images/events/2.png",
    thumbnail: "/images/events/thumbnails/2.jpg",
    slug: "constitution-day",
    buttonLabel: "See Full Report",
    buttonLink: "/events/constitution-day"
  },
  {
    id: 3,
    title: "Savitribai Phule Jayanti",
    date: "2025-01-03",
    description: "Tributes paid to India's first female teacher with speeches and activities highlighting her contributions to women's education.",
    image: "/images/events/3.png",
    thumbnail: "/images/events/thumbnails/3.jpg",
    slug: "savitribai-phule-jayanti",
    buttonLabel: "View Gallery",
    buttonLink: "/events/savitribai-phule-jayanti"
  },
  {
    id: 4,
    title: "Appointment of Student Council 2024–25",
    date: "2025-01-15",
    description: "Council for 2024–25 appointed, with Shoyeb Khan as Student Representative, Pooja Bendre as Women's Representative, and Ashwin Waghmare as Cultural Representative.",
    image: "/images/events/1.png",
    thumbnail: "/images/events/thumbnails/4.jpg",
    slug: "student-council-appointment",
    buttonLabel: "Read More",
    buttonLink: "/events/Appointment-of-Students-Council"
  },
  {
    id: 5,
    title: "Shri Shivajirao Nagawade Jayanti Rally and Celebration",
    date: "2025-01-18",
    description: "Rally and campus celebration honoring his contributions to education and society.",
    image: "/images/events/2.png",
    thumbnail: "/images/events/thumbnails/5.jpg",
    slug: "shivajirao-nagawade-jayanti",
    buttonLabel: "View Celebration",
    buttonLink: "/events/Shri-Shivajirao-Nagawade-Jayanti"
  },
  {
    id: 6,
    title: "Republic Day Celebration",
    date: "2025-01-26",
    description: "Patriotic celebrations with addresses by dignitaries stressing democratic values.",
    image: "/images/events/3.png",
    thumbnail: "/images/events/thumbnails/6.jpg",
    slug: "republic-day",
    buttonLabel: "See Photos",
    buttonLink: "/events/Republic-Day"
  },
  {
    id: 7,
    title: "Picnic to Alibaug",
    date: "2025-02-06",
    description: "A recreational trip for students and faculty, blending relaxation with educational exploration.",
    image: "/images/events/1.png",
    thumbnail: "/images/events/thumbnails/7.jpg",
    slug: "picnic-to-alibaug",
    buttonLabel: "View Trip Photos",
    buttonLink: "/events/Picnic-To-Alibaug"
  },
  {
    id: 8,
    title: "Shiv Jayanti Celebration",
    date: "2025-02-19",
    description: "Tributes to Chhatrapati Shivaji Maharaj with speeches and cultural performances.",
    image: "/images/events/2.png",
    thumbnail: "/images/events/thumbnails/8.jpg",
    slug: "shiv-jayanti",
    buttonLabel: "View Event",
    buttonLink: "/events/Shiv-Jayanti-Celebration"
  },
  {
    id: 9,
    title: "Traditional Day",
    date: "2025-03-01",
    description: "Cultural event with students and staff in regional attire, showcasing India's diversity.",
    image: "/images/events/3.png",
    thumbnail: "/images/events/thumbnails/9.jpg",
    slug: "traditional-day",
    buttonLabel: "See Celebrations",
    buttonLink: "/events/Traditional Day"
  },
  {
    id: 10,
    title: "Women's Day Celebration",
    date: "2025-03-08",
    description: "Event recognizing women's achievements, featuring speeches, performances, and awareness activities.",
    image: "/images/events/1.png",
    thumbnail: "/images/events/thumbnails/10.jpg",
    slug: "womens-day",
    buttonLabel: "View Program",
    buttonLink: "/events/Women's-Day-Celebration"
  },
  {
    id: 11,
    title: "Anuraj Youth Fest 2025",
    date: "2025-04-11",
    description: "Prize distribution and inspiring guest speeches during Mahatma Phule Jayanti celebrations.",
    image: "/images/events/2.png",
    thumbnail: "/images/events/thumbnails/13.jpg",
    slug: "anuraj-youth-fest",
    buttonLabel: "See Highlights",
    buttonLink: "/events/Anuraj-Youth-Fest-2025"
  },
  {
    id: 12,
    title: "Ambedkar Jayanti",
    date: "2025-04-14",
    description: "Tributes to Dr. B.R. Ambedkar with speeches and discussions on equality and social justice.",
    image: "/images/events/3.png",
    thumbnail: "/images/events/thumbnails/15.jpg",
    slug: "ambedkar-jayanti",
    buttonLabel: "View Ceremony",
    buttonLink: "/events/Ambedkar-Jayant"
  },
  {
    id: 13,
    title: "Bollywood Day",
    date: "2025-03-15",
    description: "Fun celebration with students dressed as iconic Bollywood characters, featuring music and dance.",
    image: "/images/events/1.png",
    thumbnail: "/images/events/thumbnails/10.jpg",
    slug: "bollywood-day",
    buttonLabel: "See Photos",
    buttonLink: "/events/Bollywood-day"
  },
  {
    id: 14,
    title: "Mismatch Day",
    date: "2025-03-16",
    description: "Students wore quirky, mismatched outfits, adding humor and creativity to campus life.",
    image: "/images/events/2.png",
    thumbnail: "/images/events/thumbnails/11.jpg",
    slug: "mismatch-day",
    buttonLabel: "View Gallery",
    buttonLink: "/events/Mismatch-Day"
  },
  {
    id: 15,
    title: "Shaskiya Yojna Mohotsav",
    date: "2025-03-20",
    description: "Awareness program on government welfare schemes, with informative sessions and presentations.",
    image: "/images/events/3.png",
    thumbnail: "/images/events/thumbnails/14.jpg",
    slug: "shaskiya-yojna-mohotsav",
    buttonLabel: "Learn More",
    buttonLink: "/events/Shaskiya-Yojna-Mohotsav"
  },
  {
    id: 16,
    title: "Legal Charts Making Session",
    date: "2025-03-25",
    description: "Interactive session led by Prof. Sakshi Prathamshetty, where students created informative legal charts combining law concepts and creativity.",
    image: "/images/events/1.png",
    thumbnail: "/images/events/thumbnails/16.jpg",
    slug: "legal-charts-making",
    buttonLabel: "View Session",
    buttonLink: "/events/LEGAL-CHARTS-MAKING-SESSION"
  }
];

export default function EventsPage() {
  const router = useRouter();
  const [refreshedImages, setRefreshedImages] = useState({});
  
  // Debug the dates to see their format
  console.log("Date examples:", eventsData.map(event => event.date));
  
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

        {/* Events Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedEvents.map((event, index) => (
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