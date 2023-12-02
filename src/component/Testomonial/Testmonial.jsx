import React from "react";
import person1 from "../../assets/img/person1.jpg";
import person2 from "../../assets/img/person2.jpg";
import person3 from "../../assets/img/person3.jpg";
import bgImg from "../../assets/img/testbg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Title from "../title/Title";

const Testmonial = () => {
  const Carousel = [
    {
      id: 1,
      img: person1,
      desc: " ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.",
      name: "Lakshmi",
      Role: "CEO",
    },
    {
      id: 2,
      img: person2,
      desc: " ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.",
      name: "Jerry",
      Role: "Developer",
    },
    {
      id: 3,
      img: person3,
      desc: " ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.",
      name: "Sudha",
      Role: "Manager",
    },
  ];
  return (
    <div
      className="bg-cover w-full h-full  bg-no-repeat grid  bg-center relative -z-20 "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black   opacity-50"></div>
      <div className="flex justify-center items-center z-10 mx-auto  text-center ">
        <Title name="customers  testmonials " title="Testimonials" color="white" center="true" />
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-[400px] sm:h-[450px] lg:h-[450px] xl:h-[350px] p-4 "
      >
        {Carousel.map((item, i) => {
          return (
            <SwiperSlide className="" key={i}>
              <div className="flex  flex-col gap-5 items-center w-full h-full p-4 ">
                <img
                  src={item.img}
                  className="w-[50px] h-[50px] rounded-full object-cover  md:object-fill"
                  alt="caruosel-img"
                />
                <h1 className="p-5 text-center text-white lg:w-[650px]">{item.desc}</h1>
                <h2 className="text-2xl font-medium text-white ">
                  {item.name}
                </h2>
                <h2 className="text-lg text-slate-300">{item.Role}</h2>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testmonial;
