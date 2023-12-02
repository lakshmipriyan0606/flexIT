import React from "react";
import Title from "../title/Title";
import aboutImg from "../../assets/img/aboutImg.png";
import aboutData from "../../data/aboutData";
import Button from "../button/Button";
import sign from "../../assets/img/signature-dark.png";
import AOS from "aos";
import { useEffect } from "react";

const About = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <main className="">
      <div className="p-4" data-aos="fade-up">
        <Title
          title=" ABOUT US"
          desc=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
          architecto dolorum inventore totam adipisci"
          name="Trusted By Worldwide Clients Since "
          year="1980"
        />
      </div>

      <div className="sm:my-12 flex flex-col  lg:flex-row-reverse lg:p-6 lg:items-center xl:my-2">
        <section>
          <div data-aos="zoom-out">
            <img
              src={aboutImg}
              className="w-full h-[400px] sm:h-[500px] lg:h-[400px] lg:w-[800px]"
              alt="aboutImg"
            />
          </div>
        </section>
        <div>
          <section className="grid lg:grid-cols-2 gap-7 lg:gap-2 p-4">
            {aboutData.map((data) => {
              return (
                <div className="group flex flex-col gap-5 p-4" key={data.id} data-aos="zoom-in-down" data-aos-duration="3000">
                  <h2 className="w-[70px] h-[70px] mb-0 group-hover:pb-2  rounded-md bg-[#DAF3FD] flex justify-center items-center group-hover:bg-primary group-hover:transition-all duration-500">
                    <img
                      src={data.img1}
                      alt="aboutIcon"
                      className="w-[30px] h-[30px] flex group-hover:hidden"
                    />
                    <img
                      src={data.img2}
                      alt="aboutIcon"
                      className="w-[30px] h-[30px] hidden group-hover:flex "
                    />
                  </h2>
                  <h1 className="text-2xl font-semibold ">{data.title}</h1>
                  <h4 className="text-lg text-gray-600 ">{data.desc}</h4>
                </div>
              );
            })}
          </section>
          <section className="flex flex-col  justify-center items-center gap-10  sm:flex-row sm:p-6 sm:justify-between   ">
            <Button name="Get in Touch" width="250px" />
            <div className="relative">
              <img src={sign} alt="signature" />
              <h1 className="absolute left-9  text-base text-primary">
                CEO & Founder
              </h1>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;
