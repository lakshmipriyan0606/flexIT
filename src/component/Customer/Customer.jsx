import React from "react";
import Title from "../title/Title";
import customerData from "../../data/customer";
import Button from "../button/Button";
import customerbg from "../../assets/img/customerbg.jpg";
import projectData from "../../data/projectData";
import work from "../../assets/img/work.png";
import AOS from "aos";
import { useEffect } from "react";

const Customer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <main>
      <div className="my-12 p-4 xl:my-3" data-aos="zoom-out">
        <Title
          title="WHY CHOOSE US"
          name="Why Our Customers Choose Working With Us"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero voluptate!"
        />
      </div>
      <section className=" ">
        <div className="my-9 p-4 flex flex-col lg:flex-row-reverse xl:my-2 xl:flex-row ">
          <div className="m-5" data-aos="zoom-in-up">
            <img
              src={work}
              className="w-full h-[250px]  sm:h-[500px] lg:h-[600px]"
              alt="aboutImg"
            />
          </div>

          <section>
            <div className="grid grid-cols-1 gap-6 p-4 ">
              {customerData.map((data, i) => {
                return (
                  <div key={i} className="flex flex-col gap-1 p-4" data-aos="fade-down-left">
                    <h1 className="text-primary text-3xl font-medium">
                      {data.id} .{" "}
                    </h1>
                    <h2 className="text-2xl font-medium text-gray-900">
                      {data.title}
                    </h2>
                    <h3 className="text-lg text-gray-600">{data.desc}</h3>
                  </div>
                );
              })}
            </div>
            <div className=" my-3">
              <Button name="Get in Touch " />
            </div>
          </section>
        </div>
      </section>
      <section className="">
        <div
          className="w-full relative -z-10 bg-cover  bg-center h-[1000px] sm:h-[580px] xl:h-[300px]  "
          style={{ backgroundImage: `url(${customerbg})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 "></div>
          <div className="absolute z-50 grid grid-cols-1 p-4 gap-5 w-full s sm:grid-cols-2 md:grid-cols-3 sm:p-6 xl:grid-cols-4">
            {projectData.map((data) => {
              return (
                <div
                data-aos="flip-up"
                  key={data.id}
                  className="flex flex-col justify-center items-center gap-4 p-4  sm:p-7 border-t-[6px] border bg-black bg-opacity-20 rounded-md  border-primary "
                >
                  <img src={data.img} className="w-[60px] h-60px]" alt="icon" />
                  <h2 className="text-white text-2xl">{data.count}</h2>
                  <h1 className="text-white text-2xl">{data.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Customer;
