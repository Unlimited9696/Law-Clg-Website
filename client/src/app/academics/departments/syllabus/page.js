"use client";
import React from "react";

export default function SyllabusPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-4 px-1 sm:py-10 sm:px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-2 sm:p-6">
        <h1 className="text-2xl font-bold text-blue-900 mb-4 text-center">
          Revised (CBCS) Rule and Syllabus<br />First year and Third year LL.B. syllabus
        </h1>
        <div className="mb-4 text-center">
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
            PDF Preview
          </span>
        </div>
        <div className="w-full border rounded overflow-hidden shadow" style={{height: '80vh', minHeight: 600}}>
          <iframe
            src="/pdfs/llb-cbcs-syllabus.pdf"
            title="LL.B. Syllabus PDF Preview"
            width="100%"
            height="100%"
            className="w-full h-full border-none"
            style={{minHeight: 600}}
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-4 text-center">
          <a
            href="/pdfs/llb-cbcs-syllabus.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
} 