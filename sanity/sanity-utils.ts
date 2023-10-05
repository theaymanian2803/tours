import { Posts } from "@/types/post";
import { createClient , groq } from "next-sanity";

export async function getProjects():Promise<Posts[]> {
  const client = createClient({
    projectId: "d55mds4x",
    dataset: "production",
    apiVersion: "2023-03-04",
  });


  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      createdAt,
      title,
      author,
      "slug": slug.current,
      "mainImage" : mainImage.asset->url,
    }`
  )
  
}

export async function getProject(slug:string):Promise<Posts> {
  const client = createClient({
    projectId: "d55mds4x",
    dataset: "production",
    apiVersion: "2023-03-04",
  });


  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      createdAt,
      title,
      author,
      "slug": slug.current,
      body,
      "mainImage" : mainImage.asset->url,
    }`,
    {slug}
  )
  
}
