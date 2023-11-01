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
  );
}

export default Gallery;
