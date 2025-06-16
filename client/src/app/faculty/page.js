"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Faculty() {
  const facultyData = [
    {
      name: "DR. ANJULA SHRIKRISHNA CHOWBE",
      role: "PRINCIPAL",
      image: "/images/faculty/principal.jpg",
      slug: "anjula-chowbe",
    },
    {
      name: "PROF.PURUSHOTTAM JAGANNATH FATE",
      role: "ASSISTANT PROFESSOR",
      image: "/images/faculty/fate.jpg",
      slug: "fate-jagannath",
    },
    {
      name: "PROF. SAKSHI BABU PRATHAMSHETTY",
      role: "ASSISTANT PROFESSOR",
      image: "/images/faculty/sakshi.png",
      slug: "sakshi-prathamshetty",
    }
    
  ];

  return (
    <div className="bg-[#0a2a52] py-12 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center text-white mb-10">
          <h2 className="text-4xl font-bold mb-3">Our Faculty</h2>
          <p className="text-lg text-gray-200">Meet our distinguished and dedicated faculty members</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {facultyData.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full w-full max-w-sm mx-auto">
              <div className="flex flex-col items-center text-center flex-grow">
                <div className="mb-4 flex justify-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={160}
                    height={180}
                    className="object-top-cover rounded-lg shadow-md"
                    style={{ width: "160px", height: "180px" }}
                  />
                </div>
                <div className="space-y-2 w-full">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">{member.name}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{member.role}</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  href={`/faculty/staff/${member.slug}`}
                  className="block w-full px-4 py-2 bg-[#0a2a52] text-white text-sm font-medium rounded-md hover:bg-[#143c72] transition-colors duration-200 text-center"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
