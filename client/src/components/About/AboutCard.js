"use client"
import AnimatedElement from '@/components/Common/Animation/AnimatedElement'
import React from 'react'
import Image from 'next/image'

export default function AboutCard() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <AnimatedElement>
                <h1 className="text-3xl font-bold text-blue-900 mb-8 flex items-center">
                    <span className="w-2 h-8 bg-blue-600 rounded-full mr-4"></span>
                    About SSNLC
                </h1>
            </AnimatedElement>

            <div className="space-y-8">
            <AnimatedElement>
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-1/3 relative h-64 w-full overflow-hidden rounded-lg">
                                <video 
                                    className="absolute inset-0 w-full h-full object-cover" 
                                    src='/Video/SSNLCCampus.mp4' 
                                    autoPlay 
                                    muted 
                                    loop 
                                    preload="metadata" 
                                />
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-gray-600 leading-relaxed">
                                    Established in 2023 under the Tuljabhavani Seva Pratisthan and guided by the visionary leadership of Shri Shivajirao Bappu Nagawade, followed by Shri Rajendra Dada Nagawade and Smt. Anuradha Tai Nagawade, Shri Shivajirao Nagawade Law College (SSNLC), Shrigonda, is committed to providing accessible and quality legal education. Affiliated with Savitribai Phule Pune University and recognized by the Bar Council of India, SSNLC offers a comprehensive three-year LL.B. program designed to equip students with a strong foundation in legal principles, critical thinking, and practical skills.
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimatedElement>

                <AnimatedElement>
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
                        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                            <div className="md:w-1/3 bg-blue-50 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-blue-900 mb-4">Core Values</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        Justice
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        Ethics
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        Social Responsibility
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-gray-600 leading-relaxed">
                                    The college is deeply rooted in the values of justice, ethics, and social responsibility, aiming to nurture not only skilled legal professionals but also socially conscious individuals who can contribute meaningfully to society. SSNLC's campus offers modern facilities including a well-stocked law library, digital classrooms, and a dedicated moot court hall, providing an enriching academic environment that encourages collaboration and professional growth.
                                </p>
                            </div>
                        </div>
                    </div>
            </AnimatedElement>

            <AnimatedElement>
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-1/3 bg-blue-50 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-blue-900 mb-4">Learning Approach</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        Personalized Mentorship
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        Practical Training
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        Industry Exposure
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-gray-600 leading-relaxed">
                                    With a focus on personalized mentorship through a low student-teacher ratio, the college ensures each student receives the support needed to excel. Beyond classroom teaching, SSNLC actively promotes legal awareness through literacy camps, community outreach, court visits, and internships, bridging the gap between theoretical knowledge and practical application. Students benefit from regular seminars, workshops, and guest lectures by eminent legal experts, as well as opportunities to participate in moot courts and legal competitions, preparing them for diverse legal and civic roles.
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimatedElement>

                <AnimatedElement>
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
                        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                            <div className="md:w-1/3 bg-blue-50 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-blue-900 mb-4">Our Impact</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        Community Service
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        Rural Development
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        Social Justice
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-gray-600 leading-relaxed">
                                    Serving the semi-urban and rural communities, SSNLC is dedicated to empowering first-generation learners and fostering leadership grounded in integrity and justice. Shri Shivajirao Nagawade Law College continues to evolve as a center of legal learning and social empowerment, inspiring students to uphold the rule of law and become catalysts for positive change in India's legal and social framework.
                                </p>
                            </div>
                        </div>
                    </div>
            </AnimatedElement>
            </div>
        </div>
    )
}
