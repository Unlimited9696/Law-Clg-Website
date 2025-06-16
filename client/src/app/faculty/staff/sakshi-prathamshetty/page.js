"use client";
import React, { useEffect } from "react";
import Image from "next/image";

export default function MsSakshiPrathamshetty() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center p-6 md:p-8">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
            <Image
              src="/images/faculty/sakshi.png"
              alt="Prof. Sakshi Babu Prathamshetty"
              width={160}
              height={179}
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
              Prof. Sakshi Babu Prathamshetty
            </h1>
            <p className="text-lg font-semibold text-blue-700 mb-2">
              Assistant Professor, [CEO] College Examination Officer, Incharge (Diploma Courses)
            </p>
            <p className="text-gray-600">
              Specialization:{" "}
              <span className="font-medium text-gray-800">
                Criminal Law, Cyber Law, Artificial Intelligence Law
              </span>
            </p>
          </div>
        </div>

        <div className="p-4 md:p-8 pt-0 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-800 bg-gray-50 w-1/3 text-left">Name</th>
                <td className="px-6 py-4 text-blue-900 font-bold">Prof. Sakshi Babu Prathamshetty</td>
              </tr>
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-800 bg-gray-50 text-left">Designation</th>
                <td className="px-6 py-4 text-blue-800 font-semibold">
                  Assistant Professor, [CEO] College Examination Officer, Incharge (Diploma Courses)
                </td>
              </tr>
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-800 bg-gray-50 text-left">Additional Designation</th>
                <td className="px-6 py-4 text-gray-600">
                  College Examination Officer [CEO], Incharge (Diploma Courses), Prospectus Chief Chief Editor
                </td>
              </tr>
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-800 bg-gray-50 text-left">Education</th>
                <td className="px-6 py-4 text-gray-600">BALLB, DCCL, LLM, PhD (Pursuing)</td>
              </tr>
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-800 bg-gray-50 text-left">Specialization</th>
                <td className="px-6 py-4 text-gray-600">
                  Criminal Law, Cyber Law, Artificial Intelligence Law
                </td>
              </tr>
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-800 bg-gray-50 text-left">Industrial Experience</th>
                <td className="px-6 py-4 text-gray-600">
                  IP Associate - 1 Year, Court Practice - 3 Years
                </td>
              </tr>
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-800 bg-gray-50 text-left">Teaching Experience</th>
                <td className="px-6 py-4 text-gray-600">3-4 Years</td>
              </tr>
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-800 bg-gray-50 text-left">Contact</th>
                <td className="px-6 py-4 text-gray-600 break-words">
                  Email: sakshi.prathamshetty@lawcollege.edu
                </td>
              </tr>
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-800 bg-gray-50 text-left">Area of Interest</th>
                <td className="px-6 py-4 text-gray-600">
                  IPR, Cyber Law, Artificial Intelligence Law, Jurisprudence, Constitutional Law, Criminal Law,
                  Interpretation of Statutes, ADRs, Company Law, Evidence Law, Law of Torts, Environment Law,
                  Food Law, Fashion Law
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 md:p-8 pt-4 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Other Faculty Members</h3>
          <div className="flex gap-4 flex-wrap">
            <a
              href="/faculty/staff/fate-jagannath"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Mr. Fate Jagannath
            </a>
            <a
              href="/faculty/staff/anjula-chowbe"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Dr. Anjula Chowbe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
