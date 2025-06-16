"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const developers = [
  {
    name: "Tejas Chavan",
    role: "Frontend Developer",
    bio: "Passionate about creating beautiful and intuitive user interfaces.",
    instagram: "https://www.instagram.com/mr_tej_s7/",
    email: "tejas.chavan@example.com",
    github: "https://github.com/tejasc123",
    linkedin: "https://linkedin.com/in/tejasc123",
    photo: "/images/developers/tejas.png",
    color: "from-blue-400 to-blue-600",
    skills: ["React", "Tailwind", "Next.js"],
    //experience: "2+ years",
  },
  {
    name: "Nikhil Nagawade",
    role: "Backend Developer",
    bio: "Specialized in building robust server-side applications.",
    instagram: "https://www.instagram.com/nikhil_nagawade_2210/",
    email: "nikhilnagawade34@gmail.com",
    github: "https://github.com/Unlimited9696",
    linkedin: "https://www.linkedin.com/in/nikhil-nagawade-471680366",
    photo: "/images/developers/nikhil.jpg",
    color: "from-green-400 to-green-600",
    skills: ["Node.js", "Express", "MongoDB"],
    experience: "3+ years",
  },
  {
    name: "Atharva Shitole",
    role: "UI/UX Designer",
    bio: "Creating intuitive and engaging user experiences.",
    instagram: "https://www.instagram.com/_mr_atharva_96/",
    email: "aatharvashitole0032@gmail.com",
    github: "https://github.com/Atharva0032",
    linkedin: "https://linkedin.com/in/atharva-shitole-6abb0b36a",
    photo: "/images/developers/atharva.jpg",
    color: "from-purple-400 to-purple-600",
    skills: ["Figma", "Illustrator", "Prototyping"],
    experience: "2 years",
  },
  {
    name: "Abhay Jadhav",
    role: "Full Stack Developer",
    bio: "Experienced in both frontend and backend technologies.",
    instagram: "https://www.instagram.com/dev.abhayyy/",
    email: "Jadhavabhay596@gmail.com",
    github: "https://github.com/AbhiDevepl",
    linkedin: "https://www.linkedin.com/in/abhay-jadhav-56a623309/",
    photo: "/images/developers/abhay.jpg",
    color: "from-red-400 to-red-600",
    skills: ["React", "Node.js", "SQL"],
    experience: "3 years",
  },
];

export default function Developers() {
  const [loading, setLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState({});
  const [refreshCount, setRefreshCount] = useState(0);
  const [imageKeys, setImageKeys] = useState({});
  const [pageTitle, setPageTitle] = useState("Our Developer Team");

  // Handle initial loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Function to handle image errors
  const handleImageError = (name) => {
    setImageErrors((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  // Function to refresh images periodically
  const refreshImages = useCallback(() => {
    // Only attempt refresh if there are errors
    if (Object.keys(imageErrors).length > 0) {
      // Generate new unique keys for images to force reload
      const newKeys = {};
      developers.forEach(dev => {
        if (imageErrors[dev.name]) {
          newKeys[dev.name] = Date.now() + Math.random();
        }
      });
      
      setImageKeys(prev => ({...prev, ...newKeys}));
      setRefreshCount(prev => prev + 1);
      
      // Clear errors for the images we're trying to refresh
      if (refreshCount < 5) { // Limit to 5 attempts
        setImageErrors({});
      }
    }
  }, [imageErrors, refreshCount]);

  // Set up automatic refresh timer
  useEffect(() => {
    // Don't start refreshing until initial loading is complete
    if (loading) return;
    
    // Try to refresh images every 10 seconds, but only up to 5 times
    const refreshInterval = setInterval(() => {
      if (refreshCount < 5) {
        refreshImages();
      } else {
        clearInterval(refreshInterval);
      }
    }, 10000); // 10 seconds
    
    return () => clearInterval(refreshInterval);
  }, [loading, refreshCount, refreshImages]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-blue-900 mb-4">{pageTitle}</h1>
          <p className="text-gray-600 text-lg">Meet the creators behind this project</p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {developers.map((dev, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${dev.color} p-8 relative`}>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {loading ? (
                    <div className="w-28 h-28 rounded-full bg-gray-200 animate-pulse"></div>
                  ) : (
                    <div className="relative w-28 h-28">
                      <Image
                        src={imageErrors[dev.name] 
                          ? `/images/developers/placeholder.png?v=${imageKeys[dev.name] || ''}` 
                          : `${dev.photo}?v=${imageKeys[dev.name] || ''}`}
                        alt={dev.name}
                        width={112}
                        height={112}
                        className="rounded-full border-4 border-white shadow-lg object-cover"
                        onError={() => handleImageError(dev.name)}
                        priority={true}
                        key={imageKeys[dev.name] || index}
                      />
                    </div>
                  )}
                  <div className="text-white text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-1">{dev.name}</h3>
                    <p className="text-lg opacity-90 font-medium">{dev.role}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-4">{dev.bio}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {dev.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Experience:</h4>
                  <p className="text-gray-600">{dev.experience}</p>
                </div>

                <div className="flex justify-center space-x-5 text-2xl mt-6">
                  {dev.email && (
                    <a href={`mailto:${dev.email}`} className="hover:text-red-500 transition transform hover:scale-110">
                      <FaEnvelope />
                    </a>
                  )}
                  {dev.github && (
                    <a href={dev.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition transform hover:scale-110">
                      <FaGithub />
                    </a>
                  )}
                  {dev.instagram && (
                    <a href={dev.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition transform hover:scale-110">
                      <FaInstagram />
                    </a>
                  )}
                  {dev.linkedin && (
                    <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition transform hover:scale-110">
                      <FaLinkedin />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
