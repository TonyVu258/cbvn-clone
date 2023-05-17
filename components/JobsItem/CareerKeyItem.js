import Link from "next/link";
import React from "react";

function CareerKeyItem({ children }) {
  return (
    <div className="item">
      <div className="inner">
        <div className="box-icon">
          <img src={children.imgSrc} alt={children.careerTitle} />
        </div>
        <div className="box-desc">
          <h3>
            <Link href={children.careerHref} title={children.careerTitle}>
              {children.careerTitle}
            </Link>
          </h3>
          <span>{children.jobAvailable}</span>
        </div>
      </div>
      <Link
        href={children.careerHref}
        title={children.careerTitle}
        className="link"
      />
    </div>
  );
}

export default CareerKeyItem;
