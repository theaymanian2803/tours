import React from "react";
import Image from "next/image";
import BookForm from "@/components/BookForm";

function BookNow() {
  return (
    <div>
      <div
        className="hero h-96"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
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
