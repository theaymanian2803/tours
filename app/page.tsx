import { getProjects } from "@/sanity/sanity-utils";
import BannerSlider from "@/components/Banner";
import News from "@/components/News";
import Image from "next/image";
import Link from "next/link";
import Testemonial from "@/components/Testemonial";

export default async function Home() {
  const posts = await getProjects();

  return (
    <>
      <div className="mx-auto p-2 "></div>
      <div className=" shadow-sm bg-slate-100 h-[600px]">
        <BannerSlider />
      </div>
      <hr />

      <div className="flex justify-center content-center container bg-gray-100  h-[300px]">
        <News />
      </div>
      <hr />

      <div>
        <h1 className="text-center font-bold tracking-wider text-2xl text-blue-500 uppercase underline p-9">our tours</h1>
        <div className=" p-5 bg-slate-100">
          {posts.map((post) => (
            <div key={post._id}>
              <div className=" container bg-slate-150 hover:scale-105 hover:text-blue-700 cursor-pointer transition text-blue-400 shadow-md p-4 rounded-lg flex flex-col md:flex-row">
                <Image
                  src={post.mainImage}
                  width={300}
                  height={300}
                  alt={post.title}
                  className="w-96 h-48 object-cover rounded-lg"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className="text-gray-600">{post.slug}</p>
                  <Link
                    href={`/posts/${post.slug}`}
                    className="mt-2 inline-block text-blue-500 hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" container bg-gay-300 p-5 shadow-sm">
          <hr />
        </div>
        <div className=" w-full container h-[400px] bg-slate-100">
        <h1 className="text-center font-bold tracking-wider text-2xl text-blue-500  uppercase underline p-9">our clients</h1>
        <hr />

          <Testemonial/>
        </div>
        <hr />

      </div>
    </>
  );
}
