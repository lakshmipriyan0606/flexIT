import React from "react";
import Title from "../title/Title";
import customerData from "../../data/customer";
import Button from "../button/Button";
import customerbg from "../../assets/img/customerbg.jpg";
import projectData from "../../data/projectData";

const Customer = () => {
  return (
    <main>
      <div className="my-7 p-4 ">
        <Title
          title="WHY CHOOSE US"
          name="Why Our Customers Choose Working With Us"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero voluptate!"
        />
        <div className="grid grid-cols-1 gap-6 p-4">
          {customerData.map((data ,i) => {
            return (
              <div key={i} className="flex flex-col gap-1">
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
        <div className="pl-4 my-3">
          <Button name="Get in Touch " />
        </div>
      </div>
      <section className="p-0">
        <div
          className="w-full relative -z-10 bg-cover  bg-center h-[1000px]  "
          style={{ backgroundImage: `url(${customerbg})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 "></div>
          <div className="absolute z-50 grid grid-cols-1 p-4 gap-5 w-full h-full ">
            {projectData.map((data) => {
              return (
                <div key={data.id} className="flex flex-col justify-center items-center gap-4 p-4 border-t-[6px] border bg-black bg-opacity-20 rounded-md  border-primary ">
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
