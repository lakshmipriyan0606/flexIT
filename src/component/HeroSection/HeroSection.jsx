import React, { useEffect } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import bg from "../../assets/img/herobg.jpg";
import PlayButton from "../button/PlayButton";
import Button from "../button/Button";
import herosectionimg from "../../assets/img/herosectionimg.png";
import Title from "../title/Title";
import AOS from "aos";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  

  return (
    <section
      className="p-5 bg-cover bg-no-repeat bg-center flex flex-col lg:items-center  xl:justify-center lg:flex-row h-[1000px] md:h-[1100px] lg:h-[650px]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <main data-aos="fade-down">
        <div className="flex gap-5 p-4 text-xl  text-white">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
        <Title
          title="IT SOLUTIONS"
          desc=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
          architecto dolorum inventore totam adipisci"
          name="Providing The Best Services & IT Solutions"
          color="white"
        />

        <div className=" flex w-full flex-col justify-center items-center gap-12 sm:justify-start  md:flex-row sm:items-start  my-10">
          <Button name="Start Now" width="160px" />
          <PlayButton />
        </div>
      </main>
      <main className="grid" data-aos="fade-up" data-aos-duration="4000">
        <img
          src={herosectionimg}
          alt="hero-img"
          className=" w-full sm:w-[80%] lg:w-full   h-[350px] sm:h-[550px] sm:mx-auto"
        />
      </main>
    </section>
  );
};

export default HeroSection;
