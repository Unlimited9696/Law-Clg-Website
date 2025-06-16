"use client"
// ======================== Imports ========================
import 'flowbite';
import React, { useEffect, useState } from 'react'
import { Carousel } from "flowbite-react";
// Removed import for FetchCarouselImages
// import FetchCarouselImages from '@/Helper/FetchCarouselImages';
import './Carousel.css'
import Image from 'next/image';

// Enhanced carousel images with captions and descriptions
const manualCarouselImages = [
	{ 
		ImageLink: '/images/carousel/photo2.png', 
		alt: 'Campus View',
		caption: 'Welcome to SSNLC',
		description: 'A premier institution for legal education'
	},
	{ 
		ImageLink: '/images/carousel/collegepic(9).png', 
		//alt: 'Moot Court Hall',
		//caption: 'State-of-the-art Moot Court',
		//description: 'Where future legal professionals practice their craft'
	},
	{ 
		ImageLink: '/images/carousel/collegepic(2).png', 
		//alt: 'Law Library',
		//caption: 'Extensive Law Library',
		//description: 'Access to comprehensive legal resources'
	},
	{ 
		ImageLink: '/images/carousel/collegepic(1).jpg', 
		//alt: 'Modern Classroom',
		//caption: 'Interactive Learning',
		//description: 'Engaging classroom environment for effective learning'
	},
	{ 
		ImageLink: '/images/carousel/photo8.jpg', 
		//alt: 'College Events',
		//caption: 'Vibrant Campus Life',
		//description: 'Regular events and activities for holistic development'
	},
	{ 
		ImageLink: '/images/carousel/photo9.jpg', 
		//alt: 'Faculty Members',
		//caption: 'Expert Faculty',
		//description: 'Learn from experienced legal professionals'
	},
];

export function CarouselCompo() {
	const [CarouselImages] = useState(manualCarouselImages);

	// Removed useEffect for fetching images
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const res = await FetchCarouselImages();
	// 		if (res.success) {
	// 			setCarouselImages(res.data);
	// 		}
	// 	};
	// 	fetchData();
	// }, []);

	return (
		<div className="relative h-[80vh] w-full">
			<Carousel
				slideInterval={5000}
				indicators={false}
				leftControl={
					<div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 cursor-pointer hover:scale-110">
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
						</svg>
					</div>
				}
				rightControl={
					<div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 cursor-pointer hover:scale-110">
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
						</svg>
					</div>
				}
			>
				{CarouselImages.map((image, index) => (
					<div key={index} className="relative h-full w-full">
						<Image
							src={image.ImageLink}
							alt={image.alt}
							fill
							priority={index === 0}
							sizes="100vw"
							className="object-cover transition-transform duration-700"
							quality={90}
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
						<div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-all duration-500">
							<h2 className="text-4xl md:text-5xl font-bold mb-2 opacity-0 transform translate-y-4 animate-fadeInUp">
								{image.caption}
							</h2>
							<p className="text-xl md:text-2xl opacity-0 transform translate-y-4 animate-fadeInUp animation-delay-200">
								{image.description}
							</p>
						</div>
					</div>
				))}
			</Carousel>
		</div>
	);
}
