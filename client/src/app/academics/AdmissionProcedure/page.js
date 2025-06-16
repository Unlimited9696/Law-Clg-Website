"use client";
import React from 'react';
import Link from 'next/link';

export default function AdmissionProcedure() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header - Full Width */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
            Admission Procedure
          </h1>
          <div className="h-1 w-24 bg-blue-600 mx-auto my-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Complete guide to the admission process at Shri Shivajirao Nagawade Law College
          </p>
        </div>
        
        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4 bg-white p-6 rounded-lg shadow-md h-fit lg:sticky lg:top-24">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Quick Navigation</h3>
            <nav className="space-y-2">
              <a href="#programme" className="block text-blue-700 hover:text-blue-900 hover:underline py-1">Programme Overview</a>
              <a href="#eligibility" className="block text-blue-700 hover:text-blue-900 hover:underline py-1">Eligibility Criteria</a>
              <a href="#steps" className="block text-blue-700 hover:text-blue-900 hover:underline py-1">Steps for Admission</a>
              <a href="#documents" className="block text-blue-700 hover:text-blue-900 hover:underline py-1">Documents Required</a>
            </nav>

            {/* Download PDF Button */}
            <a 
              href="/pdfs/admission-requirements.pdf" 
              download 
              className="mt-6 inline-block bg-blue-700 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-800 transition w-full"
            >
              📄 Download Admission PDF
            </a>
          </aside>

          {/* Main Content */}
          <div className="prose max-w-none text-gray-800 lg:w-3/4 bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <div className="text-center mb-10">
              <p className="text-base leading-8 text-gray-600">Tuljabhavani Seva Pratishthan (TSP's)</p>
              <h2 className="text-2xl font-bold tracking-tight text-blue-900 sm:text-3xl">Shri Shivajirao Nagawade Law College Shrigonda</h2>
              <div className="h-1 w-24 bg-blue-600 mx-auto mt-4"></div>
            </div>

            <section id="programme" className="mb-10 scroll-mt-24">
              <h3 className="text-2xl font-semibold text-blue-900 border-b border-gray-200 pb-2">Programme: LL.B. THREE YEARS COURSE</h3>
              <div className="mt-4 space-y-4">
                <p>The College offers Three Year Law programme under SSNLC. The courses offered are Three-Year Law Course LL.B. The duration of the above-mentioned degree course shall be for a period of three academic years...</p>
                <p>As per the Government of Maharashtra's Notification No. CET-2015/C.R.243/Mashi-2 dated 2nd April 2016, admissions to the LL.B. (Three Year) and B.A. LL.B. (Five Year) courses are conducted through a Centralized Admission Process (CAP) via the State Common Entrance Test (CET) Cell, Maharashtra State.</p>
              </div>
            </section>

            <section id="eligibility" className="mb-10 scroll-mt-24">
              <h4 className="text-xl font-semibold text-blue-900 border-b border-gray-200 pb-2">Eligibility Criteria:</h4>
              <div className="mt-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p><strong>LL.B. (Three Year Course):</strong> Candidates must be graduates in any discipline from a recognized university with at least 45% marks. For SC/ST candidates, the minimum required marks are 40%...</p>
              </div>
            </section>

            <section id="steps" className="mb-10 scroll-mt-24">
              <h4 className="text-xl font-semibold text-blue-900 border-b border-gray-200 pb-2">Steps for Admission:</h4>
              <ol className="list-decimal mt-4 space-y-3 pl-5">
                <li>Obtain the Admission Form from the college office or download it from the college website if available.</li>
                <li>Fill in the admission form manually and completely.</li>
                <li>Submit the duly filled hard copy of the admission form, along with all required documents...</li>
                <li>Admission will be processed after document verification, confirmation of eligibility, and payment of prescribed fees.</li>
              </ol>
            </section>

            <section id="documents" className="scroll-mt-24">
              <h4 className="text-xl font-semibold text-blue-900 border-b border-gray-200 pb-2">Documents Required for Admission:</h4>
              <div className="mt-6 grid md:grid-cols-2 gap-y-3 gap-x-6">
                <div className="flex items-start">
                  <span className="text-blue-700 mr-2 flex-shrink-0">•</span>
                  <span>SSNLC Admission Form</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-2 flex-shrink-0">•</span>
                  <span>College Leaving Certificate/TC – original &amp; photocopy</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-2 flex-shrink-0">•</span>
                  <span>Migration Certificate (if applicable)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-2 flex-shrink-0">•</span>
                  <span>Gap Certificate (applicable to students having a break in education)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-2 flex-shrink-0">•</span>
                  <span>SSC, HSC and Graduation Marksheets – original &amp; photocopy</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-2 flex-shrink-0">•</span>
                  <span>MH CET Scorecard – original &amp; photocopy</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-2 flex-shrink-0">•</span>
                  <span>CET Application Form and Hall Ticket – original &amp; photocopy</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-2 flex-shrink-0">•</span>
                  <span>CET Allotment Letter – original &amp; photocopy</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-2 flex-shrink-0">•</span>
                  <span>Caste Certificate (if applicable) – original &amp; photocopy</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-2 flex-shrink-0">•</span>
                  <span>Caste Validity Certificate (if applicable) – original &amp; photocopy</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-2 flex-shrink-0">•</span>
                  <span>Non‐Creamy Layer Certificate – original &amp; photocopy</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-2 flex-shrink-0">•</span>
                  <span>Income Certificate – original &amp; photocopy</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-2 flex-shrink-0">•</span>
                  <span>Domicile and Nationality Certificate – original &amp; photocopy</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-2 flex-shrink-0">•</span>
                  <span>Aadhaar Card – with photocopy</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-2 flex-shrink-0">•</span>
                  <span>Five (5) Passport‐Size Photographs</span>
                </div>
              </div>

              <p className="italic text-gray-700 mt-8 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <strong>Note:</strong> All candidates applying through the CET Cell must scan and upload all relevant documents in PDF format during the CET online registration process.
              </p>

              <blockquote className="mt-8 border-l-4 border-blue-600 pl-4 py-2 bg-blue-50 rounded-r-lg">
                <p className="text-lg text-blue-900 italic">
                  "Every page you turn is a step toward your future; some lessons inspire, some challenge, and some transform you."
                </p>
              </blockquote>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
