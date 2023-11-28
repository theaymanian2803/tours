import React from "react";
import { getProjects } from "@/sanity/sanity-utils";
import urlFor from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import Fq from "@/components/Fq";
import Buttons from "@/components/Buttons";

async function Tours() {
  const posts = await getProjects();
  return (
    <div className=" md:p-20 bg-gray-200">
      <div
        className="hero  h-[300px]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1581471665933-26626821e891?auto=format&fit=crop&q=80&w=1744&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold capitalize">our tours</h1>
            <p className="mb-5">checkout our tours</p>
            <Buttons text="book Now" />
          </div>
        </div>
      </div>
      <div className=" container grid sm:grid-col-1 gap-3 justify-center items-center text-center  rounded-lg p-10     md:grid-cols-3   ">
        {posts.map((post) => (
          <div
            key={post._id}
            className="flex justify-center text-center items-center shadow-md  rounded-lg bg-slate-150 dark:bg-gray-800 overflow-hidden   ">
            <div className=" cursor-pointer  h-[500px] text-blue-600  p-4 rounded-lg flex flex-col text-center justify-evenly ">
              <div className=" flex items-center justify-center">
                <Image
                  src={urlFor(post.mainImage).url()}
                  width={300}
                  height={300}
                  alt={post.title}
                  className="w-96 h-48 object-cover rounded-lg hover:scale-105 hover:shadow-lg transition "
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-700 font-bold tracking-wide dark:text-white">
                  {post.slug}
                </p>
                <Link
                  href={`/posts/${post.slug}`}
                  className="mt-2 inline-block text-blue-100 hover:underline  p-2 rounded-lg ">
                  <Buttons text="discover more" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Fq />
    </div>
  );
}

export default Tours;
