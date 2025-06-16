"use client"
import React from 'react';
import Image from 'next/image';

export default function LLB() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bachelor of Laws (LLB)</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Embark on a prestigious legal education journey with our comprehensive LLB program
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="relative h-[300px] w-full">
            <Image
              src="/images/llb-department.jpg"
              alt="LLB Department"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Program Overview</h3>
            <p className="text-gray-600 mb-4">
              Our LLB program is designed to provide students with a strong foundation in legal principles, 
              critical thinking, and practical skills necessary for a successful legal career.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Duration</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 3 Years Full-Time Program</li>
              <li>• 6 Semesters</li>
              <li>• Regular Classes</li>
            </ul>
          </div>
         
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Eligibility</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 10+2 with minimum 45% marks</li>
              <li>• Valid CLAT/LSAT Score</li>
              <li>• Entrance Test Qualification</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">Course Advantages</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-3">Career Opportunities</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Corporate Law Firms</li>
                <li>• Judiciary Services</li>
                <li>• Legal Consultancy</li>
                <li>• Government Legal Services</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-3">Program Benefits</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Experienced Faculty</li>
                <li>• Moot Court Facilities</li>
                <li>• Legal Aid Clinic</li>
                <li>• Industry Internships</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6">Course Curriculum Highlights</h3>
          <div className="grid md:grid-cols-2 gap-6">
            
            <div>
              <h4 className="text-lg font-medium mb-3">Specialized Papers</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Intellectual Property Rights</li>
                <li>• Environmental Law</li>
                <li>• International Law</li>
                <li>• Cyber Laws</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}