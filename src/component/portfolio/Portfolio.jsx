import React from "react";
import Title from "../title/Title";
import Button from "../button/Button";
import portfolioData from "../../data/portfolioData";
import { FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const [active, setActive] = useState(0);
  const [portfolio, setPortfolio] = useState(portfolioData);
  const [listPortfolio, setListPortfolio] = useState([]);

  const activeTab = (id, cat) => {
    setActive(id);
    const portfolioData = portfolio.filter((item) => item.category === cat);
    if (id === 0) {
      setListPortfolio(portfolio);
    } else {
      setListPortfolio(portfolioData);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    setActive(0);
    setListPortfolio(portfolioData);
  }, []);

  const category = ["All", "Mobile Apps", "Cloud", "Data Analysis", "Hoisting"];

  return (
    <section>
      <div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:p-4 lg:items-center">
          <Title name="Awesome Portfolio" title="PORTFOLIO" />
          <div className=" ">
            <Button name="See More" width="200px" />
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 sm:my-5 pt-4   gap-2 pl-4 ">
          {category.map((data, i) => {
            return (
              <button
                key={i}
                onClick={() => activeTab(i, data)}
                className=" flex  gap-3 text-xl   justify-center items-center hover:border-b-2  hover:border-primary active:border-b-2  active:border-primary"
              >
                {data}
              </button>
            );
          })}
        </div>
        <motion.div  layout className="p-3 my-4  grid grid-cols-1 gap-2  lg:p-12  rounded w-full cursor-pointer sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4">
          {listPortfolio.map((data) => {
            return (
              <AnimatePresence>
                <motion.div
                  className="relative w-full h-full group overflow-hidden  "
                  key={data.id}
                  layout
                  initial ={{opacity:0}}
                  animate ={{opacity:1}}
                  exit ={{opacity:0}}
                  transition={{duration:0.5}}
                >
                  <img
                    src={data.img}
                    alt="images "
                    className="rounded w-full h-[350px] group-hover:scale-125 group-hover:transition-all group-hover:duration-500 "
                  />
                  <div className=" absolute w-full  bottom-0 bg-[#212934] h-0 group-hover:h-14 group-hover:transition-all group-hover:duration-700 transition-all duration-700  flex justify-center items-center text-white text-2xl opacity-0 group-hover:opacity-100">
                    {data.category}
                  </div>
                  <div className="absolute  left-0 w-0 bottom-0 h-14 group-hover:w-14 bg-blue-800  flex justify-center items-center text-xl group-hover:transition-all group-hover:duration-700  group-hover:delay-200  transition-all duration-700">
                    <FaArrowRight className="hidden group-hover:flex text-white" />
                  </div>
                </motion.div>
              </AnimatePresence>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
