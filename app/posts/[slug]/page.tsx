import { getProject } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

type Props = {
  params: {
    slug: string;
  };
};
async function Post({ params }: Props) {
  const slug = params.slug;

  const post = await getProject(slug);

  return (
    <>
      <div className="relative h-96 shadow-lg hover:opacity-90 cursor-pointer transition">
        <Image
          src={post.mainImage}
          alt={post.slug}
          layout="fill"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-lg text-center">{post.slug}</p>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
            Enquire Now
          </button>
        </div>
      </div>
      <div className="h-screen flex w-full justify-center bg-gray-200 relative p-9">
        <div className=" bg-slate-400 h-9 absolute top=10"></div>
        <Image
          src={post.mainImage}
          height={300}
          width={300}
          alt="image"
          className="h-96"
        />
      </div>
    </>
  );
}

export default Post;
