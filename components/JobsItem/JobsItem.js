import React from "react";

function JobsItem({children}) {
  return (
    <>
      <div className="col-lg-6 ">
        <div className="job-item">
          <div className="figure">
            <div className="image">
              <a target="_blank" href={children.companyHref} title={children.companyTitle}>
                <img src={children.imgSrc} className="swiper-lazy" alt={children.companyTitle} />
              </a>
            </div>
            <div className="figcaption">
              <div className="title">
                <a target="_blank" href={children.jobHref} title={children.jobTitle}>
                  {children.jobTitle}
                </a>
              </div>
              <div className="caption">
                <a
                  className="company-name"
                  title={children.companyTitle}
                  href={children.companyHref}
                  target="_blank"
                >
                  {children.companyTitle}{" "}
                </a>
                <p className="salary">
                  <em className="fa fa-usd" />
                  {children.jobSalary}
                </p>
                <div className="location">
                  <em className="mdi mdi-map-marker" />
                  <p> {children.jobLocation}</p>
                </div>
              </div>
            </div>
            {children.isTop && (
              <div className="top-icon">
                {" "}
                <span className="top">Top</span>{" "}
              </div>
            )}
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default JobsItem;
