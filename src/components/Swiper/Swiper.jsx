import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Sw() {
  return (
    <>
      <Swiper
        loop={true}
        cssMode={true}
        navigation={true}

        
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="cursor-pointer  h-[200px] md:h-[300px] xl:h-[400px] w-full">
            <img
              className="h-full"
              src="public/swiper-images/img1.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] md:h-[300px] xl:h-[400px] w-full">
            <img
              className="h-full"
              src="public/swiper-images/img2.jpeg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h-[200px] md:h-[300px] xl:h-[400px] w-full">
            <img
              className="h-full"
              src="public/swiper-images/img3.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h-[200px] md:h-[300px] xl:h-[400px] w-full">
            <img
              className="h-full"
              src="public/swiper-images/img4.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h-[200px] md:h-[300px] xl:h-[400px] w-full">
            <img
              className="h-full"
              src="public/swiper-images/img5.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
    
      </Swiper>
    </>
  );
}
