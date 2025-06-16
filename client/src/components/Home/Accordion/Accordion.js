"use client"
// ======================== Imports ========================
import 'flowbite';
import React from 'react'
import AccordionCard from './AccordionCard';
import AnimatedElement from '@/components/Common/Animation/AnimatedElement';

export default function Accordion() {
    const AccordionData = [
        
    ]

    return (
        <div className='mb-10 px-4 max-w-4xl mx-auto'>
            <AnimatedElement>
                <h1 className="mb-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-blue-400"></span>
                </h1>
            </AnimatedElement>
            <div className="space-y-4 transition-all duration-300 ease-in-out">
                {AccordionData.map((data, index) => (
                    <div key={index} className="transform transition-all duration-300 ease-in-out hover:scale-[1.02]">
                        <AccordionCard title={data.title} description={data.description} />
                    </div>
                ))}
            </div>
        </div>

    )
}
