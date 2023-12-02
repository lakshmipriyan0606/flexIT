import React from "react";
import Title from "../title/Title";
import Button from "../button/Button";
import portfolioData from "../../data/portfolioData";
import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  const category = ["All", "Mobile Apps", "Cloud", "Data Analysis", "Hosting"];
  return (
    <section>
      <div>
        <Title name="Awesome Portfolio" title="PORTFOLIO" />
        <div className="pl-4 ">
          <Button name="See More" width="200px" />
        </div>
        <div className="grid grid-cols-3  pt-4 pl-1  gap-2 ">
          {category.map((data, i) => {
            return (
              <button
                key={i}
                className=" flex  gap-3 text-xl   justify-center items-center"
              >
                {data}
              </button>
            );
          })}
        </div>
        <div className="p-3 my-4  grid grid-cols-1 gap-2 rounded w-full cursor-pointer">
          {portfolioData.map((data) => {
            return (
              <div className="relative w-full h-full group overflow-hidden  " key={data.id}>
                <img
                  src={data.img}
                  alt="images "
                  className="rounded w-full h-[350px] group-hover:scale-125 group-hover:transition-all group-hover:duration-500 "
                />
                <div className=" absolute w-full  bottom-0 bg-[#212934] h-0 group-hover:h-14 group-hover:transition-all group-hover:duration-700 transition-all duration-700  flex justify-center items-center text-white text-2xl opacity-0 group-hover:opacity-100">{data.category}</div>
                <div className="absolute  left-0 w-0 bottom-0 h-14 group-hover:w-14 bg-blue-800  flex justify-center items-center text-xl group-hover:transition-all group-hover:duration-700  group-hover:delay-200  transition-all duration-700">
                  <FaArrowRight className="hidden group-hover:flex text-white" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
