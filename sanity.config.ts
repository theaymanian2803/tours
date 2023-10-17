import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "@/sanity/schemas";

const config = defineConfig({
  projectId: "d55mds4x",
  dataset: "production",
  title: "tourists website",
  apiVersion: "2023-03-04",
  basePath: "/admin",
  token: process.env.TOKEN_APP,

  useCdn: false,
  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
export default config;
