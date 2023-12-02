import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import bg from "../../assets/img/herobg.jpg";
import PlayButton from "../button/PlayButton";
import Button from "../button/Button";
import herosectionimg from "../../assets/img/herosectionimg.png";
import Title from "../title/Title";
const HeroSection = () => {
  return (
    <section className="p-5 bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url(${bg})`}}>
      <main>
        <div className="flex gap-5 p-4 text-white">
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
          color ="white"
        />

        <div className=" flex  gap-5 my-10">
          <Button name="Start Now" width="160px" />
          <PlayButton />
        </div>
      </main>
      <main>
        <img src={herosectionimg} alt="hero-img" />
      </main>
    </section>
  );
};

export default HeroSection;
