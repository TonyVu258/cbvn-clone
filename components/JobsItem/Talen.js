import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TalenItem from "./TalenItem";

import "swiper/css"

function Talen() {
  return (
    <Swiper>
      <SwiperSlide><TalenItem/></SwiperSlide>
      <SwiperSlide><TalenItem/></SwiperSlide>
      <SwiperSlide><TalenItem/></SwiperSlide>
      <SwiperSlide><TalenItem/></SwiperSlide>
    </Swiper>
  );
}

export default Talen;
