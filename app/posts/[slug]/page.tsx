import { getProject } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "@/components/RichTextComponent";
import urlFor from "@/sanity/sanity-utils";
import Buttons from "@/components/Buttons";

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
      <div className="relative h-96 shadow-lg hover:opacity-90 cursor-pointer  transition">
        <Image
          src={urlFor(post.mainImage).url()}
          alt={post.slug}
          layout="fill"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-black opacity-40 "></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-lg text-center">{post.slug}</p>
          <Buttons text="book NOW" />
          <div className="  bg-slate-400 h-9 absolute top=10"></div>
        </div>
      </div>
      <div className=" text-center w-3/4 p-7 mx-auto overflow-hidden">
        <PortableText value={post.body} components={RichTextComponent} />
      </div>
    </>
  );
}

export default Post;
