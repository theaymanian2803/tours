import urlFor from "@/sanity/sanity-utils";
import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
const ToursPosts = async () => {
  const posts = await getProjects();
  const cutArray = posts.slice(0, 6);

  return (
    <>
      <div className=" container grid sm:grid-col-1 gap-10 justify-center items-center text-center  rounded-lg p-10  md:grid-cols-3   ">
        {cutArray.map((post) => (
          <div
            key={post._id}
            className=" relative flex justify-center text-center items-center shadow-md  rounded-lg bg-slate-150 dark:bg-gray-800 overflow-hidden">
            <div className=" cursor-pointer  h-[750px] text-blue-600  p-4 rounded-lg flex flex-col text-center justify-evenly ">
              <div className=" flex items-center justify-center">
                <Image
                  src={urlFor(post.mainImage).url()}
                  width={300}
                  height={300}
                  alt={post._id}
                  className="w-96 h-48 object-cover rounded-lg hover:scale-105 hover:shadow-lg transition "
                />
              </div>
              <div className="p-4">
                <p className="text-xl uppercase text-black font-semibold">
                  {post.title}
                </p>
                <p className="text-gray-700 font-bold tracking-wide dark:text-white">
                  {post.slug}
                </p>
                <>
                  <div>
                    <div className=" text-center p-11 text-black font-semibold rounded-md w-full ">
                      {post.categories.map((cat) => (
                        <div key={cat._id}>
                          <h3>{cat.title}</h3>
                          <p>{cat.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
                <div className=" flex justify-between items-center">
                  {
                    <Image
                      className=" h-10 w-10 rounded-full border-4 border-orange-600"
                      src={urlFor(post.author.image).url()}
                      alt="ss"
                      width={200}
                      height={200}
                    />
                  }

                  <Link
                    href={`/posts/${post.slug}`}
                    className="mt-2 inline-block text-blue-100 hover:underline bg-orange-600 p-2 rounded-lg ">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 p-10 w-full bg-blue-500 h-10 shadow-lg">
              <div className="flex text-center items-center justify-between  text-white font-bold mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>from 3 To 10 days</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="   text-white text-center mx-auto">
        <button className=" bg-orange-700 hover:bg-red-600 transition p-4 rounded-xl drop-shadow-md shadow-lg ">
          SEE ALL EXCURSIONS
        </button>
      </div>
    </>
  );
};

export default ToursPosts;
