import React from "react";
import JobsItem from "../../JobsItem/JobsItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css/pagination";

import "swiper/css";

function TabItem({ children, tapID, tabClass }) {
  var res = children.reduce((a, c, i) => {
    return i % 5 === 0 ? a.concat([children.slice(i, i + 5)]) : a;
  }, []);
  var group = res.reduce((a, c, i) => {
    return i % 2 === 0 ? a.concat([res.slice(i, i + 2)]) : a;
  }, []);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  };
  return (
    <div className="tab-content" id={tapID}>
      <div className="hot-jobs-slide" id={tabClass}>
        <Swiper
          className={"swiper-container"}
          loop={true}
          pagination={pagination}
          autoplay={true}
          modules={[Pagination, Autoplay]}
        >
          <div className="swiper-wrapper">
            {group.map((array, index) => (
              <SwiperSlide key={index} className="swiper-slide-duplicate">
                <div className="row">
                  <JobsItem>{array[0]}</JobsItem>
                  <JobsItem>{array[1]}</JobsItem>
                </div>
              </SwiperSlide>
            ))}{" "}
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default TabItem;
