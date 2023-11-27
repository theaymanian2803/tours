import React from "react";
import { client } from "@/sanity/sanity-utils";
import Image from "next/image";
import { groq } from "next-sanity";

export type GalProps = {
  title: string;
  mainImage: string;
};

async function Gallery() {
  const query = groq`*[_type == "gallery"]{
        title,
        "mainImage" : mainImage.asset->url,

    }`;
  const gal = await client.fetch(query);
  const galRes: GalProps[] = await gal;

  return (
    <>
      <div className=" mx-auto max-w-5xl">
        <p className=" text-red-800 shadow-lg rounded-lg p-8 text-center capitalize font-semibold">
          Welcome to our Travelers Gallery, a captivating collection of images
          and stories that transport you to the far corners of the globe through
          the eyes of intrepid explorers. In this vibrant online space,
          passionate travelers from around the world come together to share
          their most awe-inspiring photos and recount the unforgettable
          experiences that accompany them.
        </p>
      </div>
      <div className="divider"></div>

      <div className=" grid gap-2 sm:grid-cols-1 md:grid-cols-4 p-11 ">
        {galRes.map((img) => {
          return (
            <Image
              className="rounded-lg"
              key={img.mainImage}
              src={img.mainImage}
              alt={img.title}
              width={400}
              height={600}
            />
          );
        })}
      </div>

      <div className="divider"></div>
    </>
  );
}

export default Gallery;
