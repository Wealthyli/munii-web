"use client";

import React from "react";
import { TopReadBlog, BlogPostContent } from "@/components/blog";
import { Header, Footer } from "@/components/main";

const Page = () => {
  return (
    <>
      <Header />
      <main className="">
        <BlogPostContent />
        <TopReadBlog />
      </main>
      <Footer />
    </>
  );
};

export default Page;
