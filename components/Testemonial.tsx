"use client"
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel urna sit amet nunc fringilla mattis.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: 'Suspendisse potenti. Vestibulum at eleifend ex. Nulla facilisi. Vivamus id quam a nisi lobortis elementum.',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    text: 'Fusce commodo vehicula ante, ac consequat justo egestas sit amet. Praesent gravida euismod euismod.',
  },
  {
    id: 4,
    name: 'Jane Smith',
    text: 'Suspendisse potenti. Vestibulum at eleifend ex. Nulla facilisi. Vivamus id quam a nisi lobortis elementum.',
  },
  {
    id: 5,
    name: 'Alice Johnson',
    text: 'Fusce commodo vehicula ante, ac consequat justo egestas sit amet. Praesent gravida euismod euismod.',
  },
  {
    id: 6,
    name: 'Jane Smith',
    text: 'Suspendisse potenti. Vestibulum at eleifend ex. Nulla facilisi. Vivamus id quam a nisi lobortis elementum.',
  },
  {
    id: 7,
    name: 'Alice Johnson',
    text: 'Fusce commodo vehicula ante, ac consequat justo egestas sit amet. Praesent gravida euismod euismod.',
  },
];

const TestimonialCarousel = () => {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 2,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "60px",
    cssEase: "linear",
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-3xl mx-auto text-center">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-4 py-8 bg-slate-100 shadow-sm">
            <p className="text-gray-600">{testimonial.text}</p>
            <p className="font-bold mt-2">{testimonial.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
