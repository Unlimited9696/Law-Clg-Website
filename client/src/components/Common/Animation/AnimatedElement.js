"use client";
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedElement = ({ children, className = '' }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;