import React from "react";
import Title from "../title/Title";
import aboutImg from "../../assets/img/aboutImg.png";
import aboutData from "../../data/aboutData";
import Button from "../button/Button";
import sign from "../../assets/img/signature-dark.png"

const About = () => {
  return (
    <main className="">
      <section>
        <div>
          <img src={aboutImg} className="w-full h-[400px]" alt="aboutImg" />
        </div>
        <div>
          <Title
            title=" ABOUT US"
            desc=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
          architecto dolorum inventore totam adipisci"
            name="Trusted By Worldwide Clients Since "
            year="1980"
          />
        </div>
      </section>
      <section className="grid gap-7 p-3">
        {aboutData.map((data) => {
          return (
            <div className="group flex flex-col gap-5 p-4" key={data.id}>
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
      <section className="flex gap-8 p-4 items-center  ">
        <Button name= "Get in Touch" width="250px"   />
        <div className="relative">
            <img src={sign} alt="signature" />
            <h1 className="absolute left-9  text-base text-primary">CEO & Founder</h1>
        </div>
      </section> 
      <section>
       </section>   
    </main>
  );
};

export default About;
