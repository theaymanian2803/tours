import { PortableTextBlock } from "sanity";
type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};
export interface Posts extends Base {
  _id: string;
  createdAt: Date;
  title: string;
  mainImage: MainImage;
  slug: string;
  body: PortableTextBlock[];
  categories: Category[];
  author: Author;
}

interface Author {
  name: string;
  Slug: Slug;
  image: string;
  bio: Block[];
}

interface Category extends Base {
  title: string;
  description: string;
}

interface Image {
  _type: "image";
  assets: Reference;
}
interface Reference {
  _ref: string;
  _type: "reference";
}
interface Slug {
  _type: "slug";
  current: string;
}
interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}
interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}
interface MainImage {
  _type: "image ";
  asset: Reference;
}
