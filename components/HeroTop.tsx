import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroTop() {
  return (
    <>
      <div className="hero hidden sm:block sm:h-[700px] overflow-hidden ">
        <Image
          src="/lg.png"
          className="w-full h-[800px] object-cover"
          alt="banner"
          width={1200}
          height={900}
        />
      </div>
      <div className="hero sm:hidden  md:hidden md:h-[1200] overflow-hidden ">
        <Link href="/tours">
          <Image
            src="/phone.png"
            className="w-full"
            alt="banner"
            width={1200}
            height={900}
          />
        </Link>
      </div>
    </>
  );
}

export default HeroTop;
