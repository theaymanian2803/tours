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
      <div className="mx-auto p-2 ">
        <div className=" shadow-sm bg-white h-[600px]">
          <BannerSlider />
        </div>
        <hr />

        <div className="flex justify-center content-center  mt-9 p-8  h-[300px]">
          <News />
        </div>

        <div>
          <h1 className="text-center font-bold tracking-wider text-2xl text-blue-500 uppercase underline  p-9">
            our tours
          </h1>

          <div className=" container grid sm:grid-col-1 gap-3 justify-center items-center text-center  rounded-lg p-10     md:grid-cols-3   ">
            {posts.map((post) => (
              <div
                key={post._id}
                className="flex justify-center text-center items-center shadow-md  rounded-lg bg-slate-150 dark:bg-gray-800 overflow-hidden   "
              >
                <div className=" cursor-pointer  h-[500px] text-blue-600  p-4 rounded-lg flex flex-col text-center justify-evenly ">
                  <div className=" flex items-center justify-center">
                    <Image
                      src={post.mainImage}
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
                      className="mt-2 inline-block text-blue-100 hover:underline bg-blue-900 p-2 rounded-lg "
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" container bg-gay-300 p-5 mt-9 mb-9">
            <div className=" w-full container h-[400px] bg-slate-100 dark:bg-gray-800">
              <h1 className="text-center font-bold tracking-wider text-2xl text-blue-500  uppercase underline p-9">
                our clients
              </h1>

              <Testemonial />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
