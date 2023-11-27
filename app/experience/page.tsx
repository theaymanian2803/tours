"use client";
import { useTransform, useScroll, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import useDimensions from "@/components/useDimensions";
const images = [
  "/img-1.png",
  "/img-2.png",
  "/hero.png",
  "/phone.png",
  "/pattern.png",
];
const Experience = () => {
  const [open, setIsOpen] = useState(false);
  const { height } = useDimensions();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0.8, 1], [0, height * 0.1]);
  const y1 = useTransform(scrollYProgress, [0.5, 1], [0, height * 0.8]);
  const y2 = useTransform(scrollYProgress, [0.6, 1], [0, height * 1]);
  const y3 = useTransform(scrollYProgress, [0.9, 1], [0, height * 0.2]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <div className=" h-[380px] relative flex justify-center items-center">
        <Image
          src="/boat.png"
          alt="alt"
          width={400}
          height={500}
          className=" w-full drop-shadow-xl shadow-lg"
        />
        <div className=" w-full h-full bg-black opacity-60  absolute inset-0">
          <h1>Experiences</h1>
          <h3>
            There is so much one can enjoy in the Sahara. Here are some popular
            and some must of desert activities suited for anyone. Many of the
            activities are included in your stay.
          </h3>
        </div>
      </div>

      <div
        className=" h-screen relative mx-auto overflow-hidden w-full grid items-center justify-center md:grid-cols-4 gap-8"
        ref={container}>
        <Column
          className=" absolute top-[-45%]"
          images={[images[0], images[1], images[2]]}
          y={y}
        />
        <Column
          className=" absolute top-52"
          images={[images[3], images[4], images[2]]}
          y={y1}
        />
        <Column
          className=" absolute top-52"
          images={[images[0], images[3], images[2]]}
          y={y2}
        />
        <Column images={[images[2], images[1], images[0]]} y={y3} />
      </div>
      <div className="divider tracking-widest font-bold mt-9 capitalize text-3xl ">
        the best experience you can think of
      </div>
      <div
        className=" h-[700px] 
      ">
        <div>
          <div className="hero min-h-[500px] bg-gray-100">
            <div className="hero-content flex-col lg:flex-row">
              <Image
                src="/img/a.jpg"
                className="w-[500px] h-[400px] rounded-lg shadow-2xl object-cover"
                alt="banner"
                width={500}
                height={300}
              />
              <div className=" flex flex-col gap-8">
                <h1 className="text-3xl  capitalize tracking-widest font-semibold">
                  marrakech
                </h1>
                <p className=" text-gray-600 ">
                  The two tents in our Royal Camp are a true gem in the Sahara.
                  These tents are perched on the dunes, showcasing the
                  spectacular surrounding landscape. These tents are the largest
                  on-site, measuring in at 78 square meters, making them
                  well-suited for sultans and kings. Here, the true meaning of
                  <p>
                    glamping reveals itself, with extraordinary vistas and
                    unmatched peace and tranquility. This is the pinnacle of Erg
                    Chebbi luxury desert camping. Tents are equipped with:
                    Bathtub jacuzzi A/C hot or cold working at night Private
                    bathroom with flush toilet/ sink/ shower – hot and cold
                    water Towels and set of toiletries Electricity Water and
                    seasonal fruit
                  </p>
                </p>
                <p className="py-6">Erg Chebbi Camping: Royal Camp</p>
                <button className="btn btn-secondary w-[150px]">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Column = ({ images, y = 0 }: any) => {
  return (
    <motion.div
      style={{ y }}
      className=" relative mx-auto bg-black max-w-[500px] w-[580px] ">
      {images.map((img: any, i: any) => {
        return (
          <>
            <div key={Math.random().toFixed(2) + 1}>
              <Image
                src={img}
                width={400}
                height={500}
                alt="img"
                className="md:w-full h-[400px] object-cover border-8 border-blue-400"
              />
            </div>
          </>
        );
      })}
    </motion.div>
  );
};

export default Experience;
