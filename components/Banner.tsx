"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
const slides = [
  {
    id: 1,
    imageUrl: "/img/a.jpg",
    caption:
      "here is so much one can enjoy in the Sahara. Here are some popular and some must of desert activities suited for anyone. Many of the activities are included in your stay. ",
    btn: "Discover More",
  },
  {
    id: 2,
    imageUrl: "/img/b.jpg",
    caption:
      "Your evening gastronomic experience combines the best of Moroccan cuisine with desert tradition. A traditional dinner, drinks are not included .",
    btn: "Discover More",
  },
  {
    id: 3,
    imageUrl: "/img/c.jpg",
    caption:
      "Located strategically in the middle of the big dunes of the Erg Chebi Desert, Merzouga luxury desert camps .also offers a spectacular nomadic experience",
    btn: "Discover More",
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
    <div className="w-full  shadow-lg">
      <div className="relative ">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-[600px] transition-opacity duration-500  ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}>
            <Image
              src={slide.imageUrl}
              alt={slide.caption}
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 w-full  md:bottom-[-150px]  ">
              <h2 className="text-2xl line-clamp-3 bg-orange-800 p-10 w-2/4 opacity-95 shadow-lg  text-center font-semibold capitalize text-black rounded-2xl mb-5">
                {slide.caption}
              </h2>
              <br />
              {/* <button className="relative mt-9 mb-5 border hover:border-orange-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-orange-800 p-2 flex justify-center items-center font-extrabold">
                <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-900 delay-150 group-hover:delay-75"></div>
                <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-800 delay-150 group-hover:delay-100"></div>
                <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-700 delay-150 group-hover:delay-150"></div>
                <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-600 delay-150 group-hover:delay-200"></div>
                <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-500 delay-150 group-hover:delay-300"></div>
                <p className="z-10">{slide.btn}</p>
              </button> */}
            </div>
          </div>
        ))}
        <button
          className="absolute left-0 top-15 transform -translate-y-1/2 text-white bg-orange-500 px-4 py-2 rounded-r-md"
          onClick={prevSlide}>
          Previous
        </button>
        <button
          className="absolute right-0 top-15 transform -translate-y-1/2 text-white bg-orange-500 px-4 py-2 rounded-l-md"
          onClick={nextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default BannerSlider;
