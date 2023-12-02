import React from "react";
import categoryData, { tags } from "../../data/categoryData";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import {  FaSearch } from "react-icons/fa";
import blogData from "../../data/blogData";

const BlogDetail = () => {
  return (
    <div>
      <div className="sticky top-0 right-0">
        <div className="flex p-5">
          <label
            htmlFor="location-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your Email
          </label>
          <div className="relative w-full rounded-md">
            <input
              type="search"
              id="location-search"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white rounded-md dark:focus:border-blue-500"
              placeholder="Search "
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <FaSearch />
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
        <div>
          <h1 className=" font-medium p-4 text-xl ">Categories</h1>
          <div className="grid grid-cols-1 p-4 text-lg cursor-pointer">
            {categoryData.map((data, i) => {
              return (
                <div
                  className="flex justify-between hover:bg-primary hover:text-white p-4"
                  key={i}
                >
                  <h1>{data.name}</h1>
                  <h1>{data.count}</h1>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className=" font-medium p-4 text-xl ">Recent Posts </h1>
          <div className="grid grid-cols-1 gap-5 p-4 ">
            {blogData.map((data) => {
              return (
                <div className="bg-[#DAF3FD] p-2 rounded cursor-pointer " data-aos="flip-right">
                  <div className="flex gap-4 items-center group ">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[70px] h-[70px] rounded-md"
                    />
                    <div>
                      <h1 className="font-medium text-lg group-hover:text-primary">
                        This is Article Tile
                      </h1>
                      <h1 className="text-gray-500 ">{data.date}</h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className=" font-medium p-4 text-xl ">Tags</h1>
          <div className="grid grid-cols-3  gap-4 p-4 ">
            {tags.map((data, i) => {
              return (
                <div key={i} className="cursor-pointer">
                  <h1 className="hover:bg-primary text-center p-1  capitalize hover:text-white">
                    {data}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className=" font-medium p-4 text-xl ">Follows Us</h1>
          <div className="flex gap-4  p-4 cursor-pointer">
            <FaFacebookF className=" text-3xl shadow-2xl  bg-primary text-white p-1 rounded pb-1  hover:pb-2 transition-all duration-500 hover:bg-white hover:text-primary " />
            <FaInstagram className=" text-3xl shadow-2xl  bg-primary text-white p-1 rounded pb-1  hover:pb-2 transition-all duration-500 hover:bg-white hover:text-primary " />
            <FaTwitter className=" text-3xl shadow-2xl  bg-primary text-white p-1 rounded pb-1  hover:pb-2 transition-all duration-500 hover:bg-white hover:text-primary " />
            <FaYoutube className="hover:shadow-2xl text-3xl bg-primary text-white p-1 rounded pb-1  hover:pb-2 transition-all duration-500 hover:bg-white hover:text-primary " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
