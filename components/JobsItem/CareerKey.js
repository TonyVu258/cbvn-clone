import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CareerKeyItem from "./CareerKeyItem";

import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const DATA_CAREER_KEY = [
  {
    careerHref:
      "https://careerbuilder.vn/viec-lam/ke-toan-kiem-toan-c2-vi.html",
    careerTitle: "Kế toán / Kiểm toán",
    imgSrc:
      "https://static.careerbuilder.vn/themes/careerbuilder/images/png/2.png",
    jobAvailable: "2.230 việc làm khác",
  },
  {
    careerHref: "https://careerbuilder.vn/viec-lam/nhan-su-c22-vi.html",
    careerTitle: "Nhân sự",
    imgSrc:
      "https://static.careerbuilder.vn/themes/careerbuilder/images/png/22.png",
    jobAvailable: "988 việc làm khác",
  },
  {
    careerHref: "https://careerbuilder.vn/viec-lam/ban-le-ban-si-c30-vi.html",
    careerTitle: "Bán lẻ / Bán sỉ",
    imgSrc:
      "https://static.careerbuilder.vn/themes/careerbuilder/images/png/30.png",
    jobAvailable: "2.059 việc làm khác",
  },
  {
    careerHref:
      "https://careerbuilder.vn/viec-lam/tai-chinh-dau-tu-c59-vi.html",
    careerTitle: "Tài chính / Đầu tư",
    imgSrc:
      "https://static.careerbuilder.vn/themes/careerbuilder/images/png/59.png",
    jobAvailable: "2.768 việc làm khác",
  },
  {
    careerHref: "https://careerbuilder.vn/viec-lam/xay-dung-c8-vi.html",
    careerTitle: "Xây dựng",
    imgSrc:
      "https://static.careerbuilder.vn/themes/careerbuilder/images/png/8.png",
    jobAvailable: "847 việc làm khác",
  },
  {
    careerHref: "https://careerbuilder.vn/viec-lam/ngan-hang-c19-vi.html",
    careerTitle: "Ngân hàng",
    imgSrc:
      "https://static.careerbuilder.vn/themes/careerbuilder/images/png/19.png",
    jobAvailable: "3.165 việc làm khác",
  },
  {
    careerHref:
      "https://careerbuilder.vn/viec-lam/dich-vu-khach-hang-c12-vi.html",
    careerTitle: "Dịch vụ khách hàng",
    imgSrc:
      "https://static.careerbuilder.vn/themes/careerbuilder/images/png/12.png",
    jobAvailable: "2.150 việc làm khác",
  },
  {
    careerHref:
      "https://careerbuilder.vn/viec-lam/san-xuat-van-hanh-san-xuat-c25-vi.html",
    careerTitle: "Sản xuất / Vận hành sản xuất",
    imgSrc:
      "https://static.careerbuilder.vn/themes/careerbuilder/images/png/25.png",
    jobAvailable: "1.081 việc làm khác",
  },
  {
    careerHref:
      "https://careerbuilder.vn/viec-lam/quan-ly-dieu-hanh-c17-vi.html",
    careerTitle: "Quản lý điều hành",
    imgSrc:
      "https://static.careerbuilder.vn/themes/careerbuilder/images/png/17.png",
    jobAvailable: "918 việc làm khác",
  },
  {
    careerHref:
      "https://careerbuilder.vn/viec-lam/dien-dien-tu-dien-lanh-c48-vi.html",
    careerTitle: "Điện / Điện tử / Điện lạnh",
    imgSrc:
      "https://static.careerbuilder.vn/themes/careerbuilder/images/png/48.png",
    jobAvailable: "1.089 việc làm khác",
  },
];

function CareerKey() {
  return (
    <>
      <Swiper
        className={
          "swiper-container swiper-container-initialized swiper-container-horizontal"
        }
        slidesPerView={5}
        spaceBetween={15}
        navigation={true}
        modules={[ Navigation]}
        breakpoints={{
          1199: {
            slidesPerView: 5,
          },
          767: {
            slidesPerView: 2,
          },
        }}
      >
        {DATA_CAREER_KEY.map((val, index) => (
          <SwiperSlide>
            <CareerKeyItem key={index}>{val}</CareerKeyItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default CareerKey;
