import React from "react";
import Blog from "../component/blog/Blog";
import BlogDetail from "../component/blog/BlogDetail";

const BlogPages = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:p-7 justify-around  ">
      <div className="lg:w-[70%]">
        <Blog format="true" />
      </div>
      <BlogDetail />
    </div>
  );
};

export default BlogPages;
