import Link from "next/link";
import React from "react";

function BannerItem({ children }) {
  return (
    <div className="swiper-slide">
      {" "}
      <Link
        href={children.href}
        rel="nofollow;noreferrer"
        target={children.target}
      >
        {" "}
        <div className="image">
          {" "}
          <img
            src={children.imgSrc}
            alt="Banner"
          />{" "}
        </div>
      </Link>
    </div>
  );
}

export default BannerItem;
