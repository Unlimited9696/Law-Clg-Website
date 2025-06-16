"use client";
import React from "react";
import Image from "next/image";

export default function LLBDepartmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-12">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 w-full mb-10">
        <Image
          src="/images/llb-department.jpg"
          alt="LLB Department"
          fill
          className="object-cover object-center brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/60 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Bachelor of Laws (LL.B.)
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl">
            Shaping ethical and dynamic legal professionals for the future of
            justice.
          </p>
        </div>
      </div>

      {/* Department Overview */}
      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 mb-10">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          About the Department
        </h2>
        <p className="text-gray-700 mb-4">
          The LL.B. Department at Shri Shivajirao Nagawade Law College offers a
          rigorous three-year legal education program tailored for graduates
          from any discipline. The curriculum integrates theoretical frameworks
          with hands-on practice, encouraging legal research, critical
          analysis, and professional ethics.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Highly qualified and experienced faculty.</li>
          <li>Dedicated Moot Court for simulated court practice.</li>
          <li>Active Legal Aid Clinic offering pro bono services.</li>
          <li>
            Seminars, workshops, and guest lectures by renowned legal
            professionals.
          </li>
          <li>Supportive academic and mentoring environment.</li>
        </ul>

        <h3 className="text-xl font-semibold text-blue-800 mb-3">
          Programme Overview
        </h3>
        <p className="text-gray-700 mb-4">
          The three-year LL.B. program is designed to build a strong
          foundation in various branches of law including constitutional law,
          criminal law, civil law, corporate law, and human rights. Emphasis is
          placed on developing analytical thinking, legal drafting, advocacy
          skills, and ethical judgment.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mb-3">
          Programme Objectives
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>To equip students with comprehensive knowledge of the law.</li>
          <li>To foster critical thinking and problem-solving skills.</li>
          <li>To develop practical skills through moot courts and internships.</li>
          <li>To inculcate professional ethics and social responsibility.</li>
          <li>To prepare students for diverse career paths in law and justice.</li>
        </ul>

        <h3 className="text-xl font-semibold text-blue-800 mb-3">
          Curriculum Highlights
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Core courses: Contract Law, Criminal Law, Constitutional Law.</li>
          <li>Specialized electives: Intellectual Property, Cyber Law, Taxation.</li>
          <li>Practical sessions including Legal Drafting and Moot Court.</li>
          <li>Internships with legal firms, NGOs, and government bodies.</li>
          <li>Research projects and dissertations on contemporary legal issues.</li>
        </ul>

        <h3 className="text-xl font-semibold text-blue-800 mb-3">
          Career Opportunities
        </h3>
        <p className="text-gray-700">
          Graduates from the LL.B. program can pursue careers as advocates,
          legal advisors, judges, corporate counsels, public prosecutors,
          legal analysts, or academics. The program also prepares students for
          competitive exams for judiciary services and civil services.
        </p>
      </section>

      {/* Admission Procedure */}
      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 mb-10">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Admission Procedure</h2>

        <p className="text-gray-700 mb-4">
          Admissions to the LL.B. (Three-Year) course are conducted through the
          Centralized Admission Process (CAP) via the State Common Entrance Test
          (CET) Cell, Maharashtra State, as per Government Notification No.
          CET-2015/C.R.243/Mashi-2 dated 2nd April 2016.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mb-2">Eligibility Criteria</h3>
        <p className="text-gray-700">
          Candidates must be graduates in any discipline from a recognized
          university with at least 45% marks (40% for SC/ST candidates).
        </p>
      </section>

     
    </div>
  );
}
