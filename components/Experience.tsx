import Image from "next/image";
import React from "react";
import Buttons from "./Buttons";

function Experience() {
  return (
    <div className=" p-2 md:container mx-auto text-center flex gap-3 justify-center flex-col items-center">
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

      <Buttons text="Discover More" />
    </div>
  );
}

export default Experience;
