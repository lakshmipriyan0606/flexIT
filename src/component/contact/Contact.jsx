import React from "react";
import bgImg from "../../assets/img/contactbg.jpg";
import Title from "../title/Title";
import Button from "../button/Button";

const Contact = () => {
  return (
    <div
      className="bg-cover w-full h-[350px] my-6  bg-no-repeat grid  bg-center relative -z-20 "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black   opacity-70"></div>
      <div className="z-20  ">
        <Title
          name="Get In Totch With Us"
          title="CONTACT US"
          desc="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Omnis
Id Atque Dignissimos Repellat Quae Ullam"
          color="white"
          center="true"
        />
        <Button name="Contact us " center= "true"/>
      </div>
    </div>
  );
};

export default Contact;
