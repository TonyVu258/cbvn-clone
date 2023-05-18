import React from "react";
import JobsItem from "../../JobsItem/JobsItem";

function TabItem({ children, tapID, tabClass }) {
  return (
    <div className="tab-content" id={tapID}>
      <div className="hot-jobs-slide" id={tabClass}>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {" "}
            <div className="swiper-slide">
              <div className="row">
                <JobsItem>{children}</JobsItem>
              </div>
            </div>
          </div>
          <div className="swiper-bottom">
            <div className="swiper-navigation">
              <div className="swiper-prev">
                <span className="mdi mdi-chevron-left" />
              </div>
              <div className="main-pagination">
                <div className="swiper-pagination" />
              </div>
              <div className="swiper-next">
                <span className="mdi mdi-chevron-right" />
              </div>
            </div>
            <div className="view-more">
              <a href="https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-vi.html">
                Xem việc làm mới cập nhật
                <span className="mdi mdi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabItem;
