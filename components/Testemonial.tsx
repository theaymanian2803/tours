"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "anya",
    text: "We recently completed a trip from Marrakech to Draa Valley to the desert before heading to Fes. Ali was a great tour guide and driver and made us feel very comfortable throughout our 3 day trip. He was attentive, knowledgeable and thoughtful and went above and beyond to make sure we had the best experience possible. Our favorite part by far was our night in the desert. The staff was attentive and welcoming and the accommodations were beautiful. We were able to go on two camel rides, one for sunset and one for sunrise. Truly an experience we will never forget. Ali also took us to go ATVing in the Sahara sand dunes, which was a really cool experience as well. Every part about this trip was well-executed and thoughtfully curated (everything from our lunch spots and trying camel tajine to the adventure experiences). We cannot thank Ali enough for his kindness and we will forever cherish this trip!",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Mooad was fantastic from when he picked us up from Casablanca to Luxury Desert Camp location. Nice clean care and a very safe enjoyable 9 hours road-trip. Super friendly and very knowledgeable. He also drove us from our camp location to Marrakech which is another 9hrs drive. Highly recommend him. Feel free to request him as your driver for your transportation needs in Morocco.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    text: "Great customer service and amazing staff. Would highly recommend.",
  },
  {
    id: 4,
    name: "Jane Smith",
    text: "Is a beautiful place! Full of luxury in the middle of nowhere! Hamid is the most wonderful guy! Everyone else in the camp is very nice too! You have to do this at least once in your life time!",
  },
  {
    id: 5,
    name: "Alice Johnson",
    text: "Awesome experience overall! Little on the pricier end but definitely makes you feel safe and boy do they feed you! Luxury tents were fantastic and our private driver booked by the camp was amazing all around (make sure to ask for Abdeljalil for the private transport. He’s super responsive and even texted us the day after to make sure we were doing okay). Camp itself is one of the more secluded ones which makes the experience all the better! Staff at the camp were also fantastic!",
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-5xl   mx-auto text-center ">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-4 py-8 dark:text-white  ">
            <p className="text-gray-600 dark:text-white line-clamp-4">
              {testimonial.text}
            </p>
            <p className="font-bold mt-2 text-orange-500">{testimonial.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
