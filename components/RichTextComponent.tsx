import Image from "next/image";
import Link from "next/link";
import urlFor from "@/sanity/sanity-utils";

export const RichTextComponent = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className=" relative w-full h-[300px]  m-10 mx-auto">
          <Image
            className=" object-cover h-full mx-auto"
            src={urlFor(value).url()}
            alt="alt"
            width={800}
            height={300}
          />
        </div>
      );
    },
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className=" ml-10 py-5 list-disc space-y-7">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className=" mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl text-orange-500  py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl text-orange-500 rounded-md py-10 font-semibold">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl text-orange-500 rounded-md py-10 font-semibold">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl text-orange-500 shadow-lg rounded-md drop-shadow-sm py-10 font-semibold">
        {children}
      </h4>
    ),
    p: ({ children }: any) => (
      <p className="text-2xl py-10 font-semibold text-gray-400">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className=" border-l-orange-500 border-l-4 py-7 my-7">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className=" underline decoration-orange-800/60 hover:decoration-black transition">
          {children}
        </Link>
      );
    },
  },
};
