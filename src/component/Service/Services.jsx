import React from "react";
import serviceData from "../../data/serviceData";
import Title from "../title/Title.jsx";
import { FaArrowRight} from "react-icons/fa6";
import Button from "../button/Button";



const Services = () => {
  return (
    <main className="my-6">
      <section className="p-3 flex  flex-col gap-4 ">
        <Title
          title=" SERVICES"
          desc=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
          architecto dolorum inventore totam adipisci"
          name="Services We Offer"
        />
        <div className="pl-5">
          <Button name="All Services" width="160px" />
        </div>
      </section>

      <div className="p-4 grid grid-cols-1 gap-5">
        {serviceData.map((data) => {
          return (
            <section className="group  relative cursor-pointer " key={data.id}>
              <div className="absolute top-0 left-0 w-0 h-full bg-white  -z-50 group-hover:w-full group-hover:bg-primary group-hover:transition-all rounded-md  group-hover:duration-1000 transition-all duration-1000 "></div>
              <div className="text-xl border-[1.4px] border-primary p-5 flex flex-col gap-3 shadow-2xl rounded-lg ">
                <div>
                  <img
                    src={data.img1}
                    alt="icon img "
                    className="group-hover:hidden w-[60px] h-[60px] flex group-hover:transition-all group-hover:duration-300 transition-all duration-300"
                  />
                  <img
                    src={data.img2}
                    alt="icon img "
                    className="group-hover:flex w-[60px] h-[60px] hidden group-hover:transition-all group-hover:duration-300 transition-all duration-300"
                  />
                </div>
                <h1 className="font-bold text-2xl  group-hover:text-white group-hover:transition-all group-hover:duration-1000 transition-all duration-1000">
                  {data.title}
                </h1>
                <h2 className="group-hover:text-white text-gray-700 group-hover:transition-all group-hover:duration-1000 transition-all duration-1000">
                  {data.desc}
                </h2>
                <button className="flex gap-5 items-center text-primary group-hover:text-white group-hover:transition-all group-hover:duration-1000 transition-all duration-1000">
                  Read More <FaArrowRight />
                </button>
              </div>
            </section>
          );
        })}
      </div>

    </main>
  );
};

export default Services;
