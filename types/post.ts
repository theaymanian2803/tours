 import { PortableTextBlock } from "sanity";

export type Posts = {
    _id: string;
    createdAt:Date,
    title: string;
    mainImage: string;
    slug: string;
    body: PortableTextBlock[];
    author: string;

}

