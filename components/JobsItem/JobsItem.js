import React from "react";

function JobsItem({
  companyHref,
  companyTitle,
  imgSrc,
  dataScr,
  jobTitle,
  jobHref,
  jobSalary,
  jobLocation,
  isTop = false,
}) {
  return (
    <>
      <div className="col-lg-6 ">
        <div className="job-item">
          <div className="figure">
            <div className="image">
              <a
                target="_blank"
                href={companyHref}
                title={companyTitle}
              >
                <img
                  src={imgSrc}
                  className="swiper-lazy"
                  data-src={dataScr}
                  alt={companyTitle}
                />
              </a>
            </div>
            <div className="figcaption">
              <div className="title">
                <a
                  target="_blank"
                  href={jobHref}
                  title={jobTitle}
                >
                  {jobTitle}
                </a>
              </div>
              <div className="caption">
                <a
                  className="company-name"
                  title={companyTitle}
                  href={companyHref}
                  target="_blank"
                >
                  {companyTitle}{" "}
                </a>
                <p className="salary">
                  <em className="fa fa-usd" />
                  {jobSalary}
                </p>
                <div className="location">
                  <em className="mdi mdi-map-marker" />
                  <p>{" "}{jobLocation}</p>
                </div>
              </div>
            </div>
            {isTop && (
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
