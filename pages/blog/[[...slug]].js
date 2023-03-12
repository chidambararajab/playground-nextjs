import { useRouter } from "next/router";
import React from "react";

const slug = () => {
  const { slug } = useRouter().query;
  console.log("data", slug);
  return <h1>slug</h1>;
};

export default slug;
