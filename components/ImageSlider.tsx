"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const images = [
  'https://images.unsplash.com/photo-1511185307590-3c29c11275ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80',
  'https://images.unsplash.com/photo-1450858930767-64b21437d41f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1542389087050-5567ef8673cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  // Add more image URLs as needed
];

const ImageSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
      <div className="relative container">
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-1 rounded-lg" onClick={prevImage}>
          Previous
        </button>
        <Image
           width={900} height={700} src={images[currentImageIndex]}
          alt={`Trip ${currentImageIndex + 1}`}
          className="w-full h-[800px] object-cover"
        />
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-1 rounded-lg" onClick={nextImage}>
          Next
        </button>
      </div>
    );
  };

export default ImageSlider;
