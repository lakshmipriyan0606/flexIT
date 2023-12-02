import React from "react";
import Title from "../title/Title";
import Button from "../button/Button";
import blogData from "../../data/blogData";
import { CiBookmark } from "react-icons/ci";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import categoryData, { tags } from "../../data/categoryData";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Blog = () => {
  return (
    <section className="-z-50">
      <div className="p-4">
        <Title name="Latest News" title="Blog" />
        <div className="pl-4">
          <Button name="See All Posts " />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5  p-4 ">
        {blogData.map((data , i) => {
          return ( <div
            key={data.id ? data.id : i}
              className="w-full  flex  flex-col  relative  cursor-pointer overflow-hidden"
             
            >
              <img
                src={data.img}
                alt="blog-img"
                className="w-full rounded-t-md hover:scale-110 overflow-hidden  duration-300 transition-all"
              />
              <div className="absolute top-4 left-4 w-[200px] h-[30px] bg-black bg-opacity-80 text-white  text-center rounded-3xl pt-1">
                {data.date}
              </div>
              <div className="bg-[#DAF3FD] p-5  flex flex-col gap-3 rounded-md">
                <h1 className="flex items-center text-gray-900 text-lg ">
                  <CiBookmark className="text-primary ml-2 text-xl" />
                  <span className="mr-3 ml-2"> {data.service} </span> |{" "}
                  <CiUser className="ml-4 text-primary text-xl" />{" "}
                  <span className="mr-3 ml-2">{data.user}</span>{" "}
                </h1>
                <h2 className="font-bold text-gray-900 text-2xl">
                  {data.title}
                </h2>
                <h3 className="text-base text-gray-700">{data.detail}</h3>
                <button className="flex items-center gap-2 cursor-pointer text-primary font-medium text-lg">
                  Read More <FaArrowRight />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid my-5 cursor-pointer">
        <div className="max-w-2xl mx-auto ">
          <nav>
            <ul className="inline-flex -space-x-px transition-all duration-500">
              <li>
                <a
                  href="#"
                  className="bg-white border text-primary border-primary  hover:hover:bg-primary hover:text-white leading-tight py-2 px-3"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-white border border-primary text-gray-500 hover:hover:bg-primary hover:text-white leading-tight py-2 px-3 "
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-white border border-primary text-gray-500 hover:hover:bg-primary hover:text-white leading-tight py-2 px-3"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="bg-white border border-primary text-gray-500 hover:hover:bg-primary hover:text-white leading-tight py-2 px-3"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-white border border-primary text-gray-500 hover:hover:bg-primary hover:text-white leading-tight py-2 px-3"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-white border border-primary text-gray-500 hover:hover:bg-primary hover:text-white leading-tight py-2 px-3"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-white border border-primary text-primary hover:hover:bg-primary hover:text-white leading-tight py-2 px-3"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div>
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
              placeholder="Search for city or address"
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
            {categoryData.map((data ,i) => {
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
                <div className="bg-[#DAF3FD] p-2 rounded ">
                  <div className="flex gap-4 items-center ">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[70px] h-[70px] rounded-md"
                    />
                    <div>
                      <h1 className="font-medium text-lg hover:text-primary">
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
    </section>
  );
};

export default Blog;
