"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import BookForm from "@/components/BookForm";

function BookNow() {
  const [open, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(!open);
  }, []);

  return (
    <div>
      <div
        className="hero h-96"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md flex flex-col justify-center items-center">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="my-drawer-4 relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-orange-500 p-2 flex justify-center items-center font-extrabold">
              <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-800 delay-150 group-hover:delay-100"></div>
              <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-700 delay-150 group-hover:delay-150"></div>
              <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-600 delay-150 group-hover:delay-200"></div>
              <p className="z-10">
                <label htmlFor="my-drawer-4" className="drawer-button">
                  BOOK NOW
                </label>
              </p>
            </button>
          </div>
        </div>
      </div>

      <div className="container flex flex-col justify-center items-center mx-auto text-center mt-9">
        <h1>BOOK NOW</h1>
        <p className=" text-center font-semibold text-gray-600 tracking-wider text-xl w-4/5  p-5  ">
          Itching to start planning your next trip? Request your tailor made
          journey to Morocco by sending us some basic info and we’ll be in touch
          to help you weave your own magic carpet ride through this marvellous
          Kingdom.
        </p>
        <h3 className=" text-blue-700  font-bold text-xl">
          (THIS IS A FREE SERVICE. NO CREDIT CARD NEEDED)
        </h3>
      </div>
      {/* <div className=" container mx-auto mt-3 bg-white w-6/12 h-[700px]">
        form goes here
      </div> */}
      <div className=" h-auto p-5 mt-8 bg-black opacity-90 md:h-[400px]  w-full flex justify-center items-center flex-col ">
        <h1 className="text-white font-bold">Absolutely Fabulous </h1>
        <span className=" text-blue-800 text-sm">Tris Zainol Abidin</span>
        <p className="text-white w-3/6 text-center font-bold text-lg leading-9">
          I would highly recommend Absolute Morocco. Sanae’s service was top
          notch. She has the perfect balance of professionalism and warmth. She
          handled all of my tours needs like a real family member would. With
          genuine care. I can’t wait to go back to Morocco. There is a still so
          much more to discover. There is no one I’d rather do it with than
          Absolute{" "}
          <span className=" font-bold text-xl text-blue-700 tracking-widest">
            Morocco
          </span>{" "}
        </p>
      </div>
      <div className=" h-auto  md:flex justify-center items-center  p-10 md:h-[800px]">
        <div className=" max-w-2xl flex items-center justify-center h-[300px] ">
          <Image
            className=" h-full  object-cover"
            src="/img-1.png"
            alt="img"
            width={800}
            height={600}
          />
        </div>
        <div className=" p-8  flex flex-col justify-center shadow-lg  md:p-5 items-center max-w-2xl text-center lg-[300px]">
          <h3 className=" text-blue-600 font-bold mt-16">
            JOANNE WEIR INTERNATIONAL CULINARY GROUP TOUR.
          </h3>
          <h1 className=" font-semibold text-gray-600">
            Private Morocco Tour.
          </h1>
          <p className=" text-gray-800">
            For the American award-winning cookbook author, food writer, cooking
            teacher, professional & celebrity chef Joanne Weir we organised an
            exceptional trip to Marrakech enriched with authentic insider
            access. Our experienced, handpicked tour guide and our robust local
            connections took Joanne Weir and her 14 guests beyond the guidebook
            and behind the scenes, and in to the heart of authentic experiences
            and in to the most exclusive and private places in Marrakech and its
            region.
          </p>
        </div>
      </div>
      <div className=" pb-10">
        <BookForm />
      </div>
    </div>
  );
}

export default BookNow;
