import React from "react";

function JobsItem({ children }) {
  return (
    <>
      <div className="col-lg-6 ">
        {children.map((val, index) => (
          <div className="job-item" key={index}>
            <div className="figure">
              <div className="image">
                <a
                  target="_blank"
                  href={val.companyHref}
                  title={val.companyTitle}
                >
                  <img
                    src={val.imgSrc}
                    className="swiper-lazy"
                    alt={val.companyTitle}
                  />
                </a>
              </div>
              <div className="figcaption">
                <div className="title">
                  <a target="_blank" href={val.jobHref} title={val.jobTitle}>
                    {val.jobTitle}
                  </a>
                </div>
                <div className="caption">
                  <a
                    className="company-name"
                    title={val.companyTitle}
                    href={val.companyHref}
                    target="_blank"
                  >
                    {val.companyTitle}{" "}
                  </a>
                  <p className="salary">
                    <em className="fa fa-usd" />
                    {val.jobSalary}
                  </p>
                  <div className="location">
                    <em className="mdi mdi-map-marker" />
                    <p> {val.jobLocation}</p>
                  </div>
                </div>
              </div>
              {val.isTop && (
                <div className="top-icon">
                  {" "}
                  <span className="top">Top</span>{" "}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>{" "}
    </>
  );
}

export default JobsItem;
