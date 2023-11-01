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
      <h1 className="text-5xl text-red-700 shadow-lg rounded-md py-10 font-semibold">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl text-red-700 shadow-lg rounded-md py-10 font-semibold">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl text-red-700 shadow-lg rounded-md py-10 font-semibold">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl text-blue-600  shadow-lg rounded-md drop-shadow-sm py-10 font-semibold">
        {children}
      </h4>
    ),
    p: ({ children }: any) => (
      <p className="text-2xl py-10 font-semibold text-gray-100">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className=" border-l-blue-700 border-l-4 py-7 my-7">
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
          className=" underline decoration-blue-800 hover:decoration-black transition">
          {children}
        </Link>
      );
    },
  },
};
