"use client";
import React from 'react';
import Image from 'next/image';

export default function GoverningBody() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900 opacity-75"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Governing Body
              </h1>
              <p className="mt-4 text-xl text-blue-100">
                Leadership and Vision of SSNLC 2025–2026
              </p>
            </div>
            <div className="relative h-32 w-32">{/* Optional Logo Image */}</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative h-[200px] w-full md:w-1/3">
              <Image
                src="/collegelogonew.png"
                alt="ssnlc"
                fill
                className="rounded-lg object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Shri Shivajirao Nagawade Law College Shrigonda
              </h2>
              <p className="text-gray-600">
                Our governing body comprises distinguished individuals who bring their expertise and dedication to guide the institution towards excellence in legal education. Under their leadership, SSNLC continues to grow and maintain high standards of academic quality.
              </p>
            </div>
          </div>
        </div>

        {/* Members Table Card */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">GOVERNING COUNCIL OF SSNLC 2025–2026</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-600 to-blue-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Sr. No.</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Designation</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Name</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ['1', 'President', 'Hon. Shri. Rajendra (Dada) Nagawade'],
                  ['2', 'Vice President', 'Hon. Shri. Bhikaji Hirabhau Thorat'],
                  ['3', 'Secretary', 'Hon. Smt. Anuradha (Tai) Rajendra Nagawade'],
                  ['4', 'Trustee', 'Shri. Pruthviraj Rajendra Nagawade'],
                  ['5', 'Trustee', 'Smt. Kaushalya Devi Shivajirao Nagawade'],
                  ['6', 'Trustee', 'Shri. Vikrant Bhikaji Thorat'],
                  ['7', 'Member', 'Adv. Ashok Rode'],
                  ['8', 'Member', 'Adv. Sunil Bhos'],
                  ['9', 'Member', 'Adv. Jayant Shinde'],
                  ['10', 'Principal', 'Dr. Anjula Shrikrishna Chowbe'],
                  ['11', 'Educational Department Member', 'Mr. Amol Nagawade'],
                ].map(([sr, designation, name]) => (
                  <tr key={sr} className="hover:bg-blue-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-sm text-gray-900">{sr}</td>
                    <td className="px-6 py-4 text-sm font-medium text-blue-900">{designation}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
