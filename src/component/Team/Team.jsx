import React from "react";
import Title from "../title/Title";
import Button from "../button/Button";
import teamData from "../../data/teamData";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import AOS from "aos";
import { useEffect } from "react";

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <main>
      <div>
        <div className="p-4 flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <Title name="Our Experts Team Members" title="TEAM" />
          <div className="pl-4">
            <Button name="See more" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 p-6 md:grid-cols-2 lg:grid-cols-3">
          {teamData.map((data) => {
            return (
              <div
                key={data.id}
                data-aos="zoom-in"
                className="w-full h-full shadow-2xl flex flex-col justify-center items-center rounded-md relative group  "
              >
                <div className="relative">
                  <img
                    src={data.img}
                    alt="personImg"
                    className="w-full h-full  rounded-t-md  "
                  />
                  <div className="absolute w-full h-full top-0 bottom-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 "></div>
                </div>
                <div>
                  <div className="flex gap-4 cursor-pointer absolute left-12 xl:left-36  bottom-0      ">
                    <FaFacebookF className=" text-4xl bg-primary text-white p-2 rounded pb-1  hover:pb-2 transition-all duration-500 hover:bg-white opacity-0 group-hover:opacity-100 mb-0 group-hover:mb-32 hover:text-primary  group-hover:transition-all group-hover:duration-700  group-hover:delay-75 " />
                    <FaInstagram className=" text-4xl bg-primary text-white p-2 rounded pb-1  hover:pb-2 transition-all duration-500 hover:bg-white opacity-0 group-hover:opacity-100 mb-0 group-hover:mb-32 hover:text-primary  group-hover:transition-all group-hover:duration-700  group-hover:delay-100 " />
                    <FaTwitter className=" text-4xl bg-primary text-white p-2 rounded pb-1  hover:pb-2 transition-all duration-500 hover:bg-white opacity-0 group-hover:opacity-100 mb-0 group-hover:mb-32 hover:text-primary  group-hover:transition-all group-hover:duration-700  group-hover:delay-300 " />
                    <FaYoutube className=" text-4xl bg-primary text-white p-2 rounded pb-1  hover:pb-2 transition-all duration-500 hover:bg-white opacity-0 group-hover:opacity-100 mb-0 group-hover:mb-32 hover:text-primary  group-hover:transition-all group-hover:duration-700  group-hover:delay-300 " />
                  </div>
                </div>
                <div className="p-4  text-center">
                  <h1 className="text-2xl font-medium text-gray-900">
                    {data.name}
                  </h1>
                  <h2 className="text-base font-medium text-gray-600">
                    {data.role}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Team;
