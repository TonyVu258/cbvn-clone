import Link from "next/link";
import React from "react";

function TalenItem({ props = "" }) {
  return (
    <div className="item bg-tips">
      <div className="img">
        <Link
          target="_blank"
          href="https://careerbuilder.vn/vi/talentcommunity/12-khoan-tien-cua-nguoi-lao-dong-se-tang-khi-tang-luong-co-so.35A52308.html"
          title="12 khoản tiền của người lao động sẽ tăng khi tăng lương cơ sở"
        >
          <img
            className="swiper-lazy"
            src="https://images.careerbuilder.vn/tintuc/career/20230515/crop/319x319/1684143734_12-khoan-tien-cua-nguoi-lao-dong-se-tang-khi-tang-luong-co-so-careerbuilder.jpg"
            alt="12 khoản tiền của người lao động sẽ tăng khi tăng lương cơ sở"
          />
        </Link>
      </div>
      <div className="caption">
        <p className="category-title">Thị trường &amp; Xu hướng</p>
        <Link
          target="_blank"
          className="title"
          href="https://careerbuilder.vn/vi/talentcommunity/12-khoan-tien-cua-nguoi-lao-dong-se-tang-khi-tang-luong-co-so.35A52308.html"
          title="12 khoản tiền của người lao động sẽ tăng khi tăng lương cơ sở"
        >
          12 khoản tiền của người lao động sẽ tăng khi tăng lương cơ sở
        </Link>
      </div>
    </div>
  );
}

export default TalenItem;
