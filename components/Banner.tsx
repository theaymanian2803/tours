"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
const slides = [
  {
    id: 1,
    imageUrl: "/img/a.jpg",
    caption: "join our community ",
    btn: "lean more",
  },
  {
    id: 2,
    imageUrl: "/img/b.jpg",
    caption: "Slide 2",
    btn: "lean more",
  },
  {
    id: 3,
    imageUrl: "/img/c.jpg",
    caption: "Slide 3",
    btn: "lean more",
  },
];

const BannerSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full shadow-lg">
      <div className="relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-[600px] transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.imageUrl}
              alt={slide.caption}
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <h2 className="text-4xl font-bold text-white">{slide.caption}</h2>
              <br />
              <button className="text-4xl font-bold bg-blue-700 opacity-90 shadow-lg p-2 rounded-lg tracking-2 text-white">
                {slide.btn}
              </button>
            </div>
          </div>
        ))}
        <button
          className="absolute left-0 top-5 transform -translate-y-1/2 text-white bg-blue-500 px-4 py-2 rounded-r-md"
          onClick={prevSlide}
        >
          Previous
        </button>
        <button
          className="absolute right-0 top-5 transform -translate-y-1/2 text-white bg-blue-500 px-4 py-2 rounded-l-md"
          onClick={nextSlide}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BannerSlider;
