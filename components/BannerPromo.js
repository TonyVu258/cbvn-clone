import React from "react";

function BannerPromo({ children }) {
  return (
    <div className="col-sm-6 col-lg-3">
      <div className="item">
        <div className="image loadAds" id={848}>
          <a href={children.href} target={children.target}>
            <img
              src={children.img1Src}
              width={330}
              height={290}
              alt={children.imgAlt}
              title={children.imgAlt}
              border={0}
            />
          </a>
          <div
            id="beacon_d74e9fba31"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              visibility: "hidden",
            }}
          >
            <img
              src={children.img2Src}
              width={0}
              height={0}
              alt={children.imgAlt}
              style={{ width: 0, height: 0 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerPromo;
