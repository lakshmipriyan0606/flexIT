import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { company } from "../../data/company";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import { useEffect } from "react";


export default function Company() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="bg-primary w-full sm:p-6 lg:p-8 xl:p-16">
      <div className="text-center p-4 text-lg text-white ">
        Trusted By Over 500 Clients Around The World
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper w-full p-4  "
      >
        {company.map((data, i) => {
          return (
            <SwiperSlide
              className="   h-[150px] rounded-lg shadow-lg lg:h-[200px]  xl:h-[210px] cursor-pointer "
              key={i}
              data-aos="zoom-out"
            >
              <img
                src={data}
                className=" w-full  h-full rounded-xl object-fill shadow-lg "
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
