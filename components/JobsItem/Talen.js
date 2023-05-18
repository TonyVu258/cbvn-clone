import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TalenItem from "./TalenItem";
import { Navigation } from "swiper";

import "swiper/css/navigation";
import "swiper/css"

function Talen() {
  return (
    <Swiper
        className={"swiper-container-initialized swiper-container-horizontal"}
        slidesPerView={4}
        spaceBetween={15}
        navigation={true}
        modules={[ Navigation]}
        breakpoints={{
          1199: {
            slidesPerView: 4,
          },
          767: {
            slidesPerView: 2,
          },
        }}
    >
      <SwiperSlide><TalenItem css={"item bg-trends"}/></SwiperSlide>
      <SwiperSlide><TalenItem css={"item bg-self"}/></SwiperSlide>
      <SwiperSlide><TalenItem css={"item bg-tips"}/></SwiperSlide>
      <SwiperSlide><TalenItem css={"item bg-trends"}/></SwiperSlide>
    </Swiper>
  );
}

export default Talen;
