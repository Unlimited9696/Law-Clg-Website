"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const handleEmailClick = () => {
    window.location.href = "mailto:snlawcollegeshrigonda@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+919404449696";
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 sm:py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-indigo-800 mb-6 sm:mb-12">Contact Us</h1>

        {/* Map + Contact Info Section */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 mb-8 md:mb-12 items-start">
          {/* Contact Info Cards - On Mobile, show these first */}
          <div className="space-y-4 sm:space-y-6 h-full flex flex-col justify-center order-1 md:order-2 w-full">
            <div 
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow hover:shadow-lg transition flex items-center cursor-pointer group w-full"
              onClick={handleEmailClick}
            >
              <div className="bg-indigo-50 p-3 sm:p-4 rounded-full mr-4 sm:mr-6 group-hover:bg-indigo-100 transition flex-shrink-0">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800">Email</h2>
                <p className="text-gray-600 text-sm sm:text-base group-hover:text-indigo-600 transition truncate">
                  snlawcollegeshrigonda@gmail.com
                </p>
              </div>
            </div>

            <div 
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow hover:shadow-lg transition flex items-center cursor-pointer group w-full"
              onClick={handlePhoneClick}
            >
              <div className="bg-indigo-50 p-3 sm:p-4 rounded-full mr-4 sm:mr-6 group-hover:bg-indigo-100 transition flex-shrink-0">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800">Phone</h2>
                <p className="text-gray-600 text-sm sm:text-base group-hover:text-indigo-600 transition">
                  +91 94044 49696
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow hover:shadow-lg transition flex items-center group w-full">
              <div className="bg-indigo-50 p-3 sm:p-4 rounded-full mr-4 sm:mr-6 group-hover:bg-indigo-100 transition flex-shrink-0">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800">Address</h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Balaji Nagar, Mandavgaon Road, MH SH 55, Shrigonda, Ahilyanagar, Maharashtra 413701
                </p>
              </div>
            </div>
          </div>

          {/* Map - On Mobile, show this second */}
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg h-full order-2 md:order-1 w-full mt-4 md:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2924.3960710016295!2d74.70476099999999!3d18.61739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM3JzAyLjYiTiA3NMKwNDInMTcuMSJF!5e1!3m2!1sen!2sin!4v1750003835201!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[250px] sm:h-[300px] md:h-[400px]"
              title="SSNLC Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
