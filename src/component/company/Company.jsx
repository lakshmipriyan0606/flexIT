import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { company } from "../../data/company";
import "swiper/css";
import "swiper/css/pagination";


export default function Company() {
  return (
    <div className="bg-primary w-full">
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
              className="   h-[150px] rounded-lg shadow-lg "
              key={i}
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
