"use client"
import React from 'react';
import Carousel from './Carousel/Carousel';
import About from './About/About';
import Committees from './Committees/Committees';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <Carousel />
            <About />
            <Committees />
        </div>
    );
};

export default Home; 