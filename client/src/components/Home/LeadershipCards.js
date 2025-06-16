"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const leaders = [
  {
    id: "founder",
    name: "Hon'ble Shri Shivajirao (Bapu) Nagawade",
    title: "Founder (Late)",
    image: "/images/founder/bapu.jpg",
    description:
      "A visionary statesman, former Member of the Legislative Assembly (MLA), and President of the Maharashtra State Cooperative Sugar Association who recognized the importance of education in rural development.",
    link: "/academics/leadership/founder",
  },
  {
    id: "president",
    name: "Shri Rajendra (Dada) Nagawade",
    title: "President",
    image: "/images/founder/dada.jpg",
    description:
      "Chairman of Sahakarmaharshi Shivajirao Narayanrao Nagawade Cooperative Sugar Factory Ltd. and Member of the Maharashtra State Board of Higher Secondary Education, Pune.",
    link: "/academics/leadership/president",
  },
  {
    id: "secretary",
    name: "Mrs. Anuradha (Tai) Nagawade",
    title: "Secretary",
    image: "/images/founder/vahini.jpg",
    description:
      "District President of the Ahmednagar Mahila Congress Committee and Chairperson of the Women Welfare and Child Development Committee, Zilla Parishad, Ahmednagar.",
    link: "/academics/leadership/secretary",
  },
];

export default function LeadershipCards() {
  return (
    <div className="max-w-7xl mx-auto mb-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Leadership</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Visionary leaders guiding Shri Shivajirao Nagawade Law College towards
          excellence.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {leaders.map((leader, index) => (
          <motion.div
            key={leader.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
            className="flex flex-col h-full bg-white rounded-2xl border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden items-center p-8"
          >
            <div className="flex flex-col items-center w-full flex-1">
              <div className="relative w-36 h-36 mb-4 flex items-center justify-center">
                <div className="absolute w-full h-full rounded-full ring-4 ring-blue-300 bg-white"></div>
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top ' }}
                  className="rounded-full z-10 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-900 text-center mb-1 mt-2">
                {leader.name}
              </h3>
              <p className="text-blue-600 font-medium text-center mb-3">
                {leader.title}
              </p>
              <p className="text-gray-600 text-sm text-center mb-6">
                {leader.description}
              </p>
              <div className="flex-grow" />
              <Link
                href={leader.link}
                className="block text-center w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow mt-4"
              >
                Read More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
