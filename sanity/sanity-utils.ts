import { Posts } from "@/types/post";
import { createClient, groq } from "next-sanity";

import imageUrlBuilder from "@sanity/image-url";
export const client = createClient({
  projectId: "d55mds4x",
  dataset: "production",
  apiVersion: "2023-03-04",
  useCdn: false,
  token: process.env.TOKEN_APP,
});
const builder = imageUrlBuilder(client);


 function urlFor(source:any) {
  return builder.image(source);
}
export default urlFor;

export async function getProjects(): Promise<Posts[]> {
  const query = groq`*[_type == "post"]{
      _id,
      createdAt,
      title,
      author->,
      categories[]->,
      "slug": slug.current,
      "mainImage" : mainImage.asset->url,
    }`;

  return client.fetch(query);
}

export async function getProject(slug: string): Promise<Posts> {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      createdAt,
      title,
       author->,
       categories[]->,
      "slug": slug.current,
      body,
      "mainImage" : mainImage.asset->url,
    }`;

  return client.fetch(query, { slug }, { next: { revalidate: 60 } });
}

    // { next: { revalidate: 10 } }
  

