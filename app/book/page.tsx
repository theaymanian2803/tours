import React from "react";
import Image from "next/image";

function BookNow() {
  return (
    <div>
      <div className="w-full h-[800px] relative">
        <Image
          src="/trave.jpg"
          alt="banner"
          fill
          className=" object-cover relative"
        />
      </div>

      <div className="container flex flex-col justify-center items-center mx-auto text-center mt-9">
        <h1>BOOK NOW</h1>
        <p className=" text-center font-bold tracking-wider text-xl w-4/5 md:text-start p-5  ">
          Itching to start planning your next trip? Request your tailor made
          journey to Morocco by sending us some basic info and we’ll be in touch
          to help you weave your own magic carpet ride through this marvellous
          Kingdom.
        </p>
        <h3 className=" text-blue-700  font-bold text-xl">
          (THIS IS A FREE SERVICE. NO CREDIT CARD NEEDED)
        </h3>
      </div>
      <div className=" container mx-auto mt-3 bg-white w-6/12 h-[700px]">
        form goes here
      </div>
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
          .
        </p>
      </div>
      <div className="flex justify-center w-full bg-slate-500 h-[800px]">
        <div className="basis-2/5 justify-center items-center flex border-emerald-600 border-8 w-[400px]">
          img goes here
        </div>
        <div className="basis-2/5 w-[400px] border-emerald-800 border-8 flex justify-center items-center  flex-col">
          <h3>JOANNE WEIR INTERNATIONAL CULINARY GROUP TOUR.</h3>
          <h1>Private Morocco Tour.</h1>
          <p className=" w-2/4">
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
    </div>
  );
}

export default BookNow;
