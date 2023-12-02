import React, { useEffect } from "react";
import Title from "../title/Title";
import Button from "../button/Button";
import blogData from "../../data/blogData";
import { CiBookmark } from "react-icons/ci";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import AOS from "aos";

const Blog = ({format}) => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <section className="-z-50">
      <div className=" flex flex-col md:flex-row md:justify-between md:items-center">
        <Title name="Latest News" title="Blog" />
        <div className="">
          <Button name="See All Posts " />
        </div>
      </div>
      <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 p-4  ${format ? "lg:grid-cols-2" : "lg:grid-cols-3"}  ${format ? "xl:grid-cols-3" : "xl:grid-cols-4"} `}>
        {blogData.map((data, i) => {
          return (
            <div
              key={data.id ? data.id : i}
              data-aos="fade-up"
              data-aos-duration="4000"
              data-aos-delay="300"
              className="w-full  flex  flex-col group  relative  cursor-pointer overflow-hidden"
            >
              <img
                src={data.img}
                alt="blog-img"
                className="w-full rounded-t-md group-hover:scale-110 overflow-hidden  duration-300 transition-all"
              />
              <div className="absolute top-4 left-4 w-[140px] h-[30px] bg-black bg-opacity-80 text-white  text-center rounded-3xl pt-1">
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
      <div className="max-w-2xl grid my-9  ml-4  ">
        <nav className="">
          <ul className=" flex transition-all duration-500">
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
                className="bg-white border border-primary text-primary hover:hover:bg-primary hover:text-white leading-tight py-2 px-3"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Blog;
