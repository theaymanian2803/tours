import Image from "next/image";
import React from "react";

function Experience() {
  return (
    <div className=" md:container mx-auto text-center flex justify-center flex-col items-center">
      <h1 className=" text-2xl uppercase text-center tracking-widest underline font-bold p-10">
        experience
      </h1>
      <div className=" md:flex gap-2 w-full">
        <div className="w-full">
          <Image
            src="/morocco5.jpg"
            alt="img"
            width={700}
            height={600}
            className=" h-64 w-full object-cover drop-shadow-lg"
          />
        </div>
        <div className="w-full">
          <Image
            src="/morocco3.jpg"
            alt="img"
            width={700}
            height={400}
            className=" h-64 w-full object-cover drop-shadow-lg"
          />
        </div>
      </div>

      <button className="relative mt-9 mb-5 border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-orange-500  p-2 flex justify-center items-center font-extrabold">
        <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-900 delay-150 group-hover:delay-75"></div>
        <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-800 delay-150 group-hover:delay-100"></div>
        <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-500 delay-150 group-hover:delay-150"></div>
        <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-600 delay-150 group-hover:delay-200"></div>
        <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-500 delay-150 group-hover:delay-300"></div>
        <p className="z-10">Discover More</p>
      </button>
    </div>
  );
}

export default Experience;
