import Banner from "../../components/Banner";
import Header from "../../components/Header";
import JobsItem from "../../components/JobsItem/JobsItem";
import Section from "../../components/Section/Section";
import "../styles/index.css";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Section css={"cb-section cb-section-border-bottom"}>
        <div className="container">
          <div className="cb-title cb-title-center">
            <h2>NHÀ TUYỂN DỤNG HÀNG ĐẦU</h2>
          </div>
          <div
            className="top-employers-list"
            id="top-employers-list"
            data-id="886,887,888,889,890,891"
          />
          <div className="top-employers-banner">
            <div className="row">
              <div className="col-lg-6">
                <div className="item">
                  <div className="image adsTopBanner" id={846} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="item">
                  <div className="image adsTopBanner" id={847} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section css={"cb-section"}>
        <div className="container">
          <div className="hot-jobs-list">
            <div className="tabs">
              <ul className="tabs-toggle">
                <li>
                  <a
                    tabIndex={0}
                    role="button"
                    className="pointer"
                    alt="#tab-1"
                  >
                    Việc Làm Nổi Bật
                  </a>
                </li>
                <li>
                  <a
                    tabIndex={0}
                    role="button"
                    className="pointer"
                    alt="#tab-2"
                  >
                    Việc Làm VIP ($1000+)
                  </a>
                </li>
                <li>
                  <a
                    tabIndex={0}
                    role="button"
                    className="pointer"
                    alt="#tab-3"
                  >
                    Việc Làm Từ Top Headhunter
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="tab-1">
                <div className="hot-jobs-slide" id="hot-jobs-slide">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      {" "}
                      <div className="swiper-slide">
                        <div className="row">
                          <JobsItem
                            companyHref={
                              "https://careerbuilder.vn/vi/nha-tuyen-dung/summit-polymers-vietnam-co-ltd.35A88F56.html"
                            }
                            companyTitle={"Summit Polymers Vietnam Co Ltd. "}
                            imgSrc={
                              "https://images.careerbuilder.vn/employer_folders/lot9/221789/67x67/103316momopink-logo.png"
                            }
                            dataScr={
                              "https://images.careerbuilder.vn/employer_folders/lot0/239190/67x67/94043logo.jpg"
                            }
                            jobTitle={
                              "HR Coordinator (Recruitment & Training)- Nhon Trach"
                            }
                            jobHref={
                              "https://careerbuilder.vn/vi/tim-viec-lam/hr-coordinator-recruitment-training-nhon-trach.35BCD007.html"
                            }
                            jobSalary={"Lương: Cạnh Tranh"}
                            jobLocation={"Đồng Nai"}
                            isTop={true}
                          />
                          <JobsItem
                            companyHref={
                              "https://careerbuilder.vn/vi/nha-tuyen-dung/summit-polymers-vietnam-co-ltd.35A88F56.html"
                            }
                            companyTitle={"Summit Polymers Vietnam Co Ltd. "}
                            imgSrc={
                              "https://images.careerbuilder.vn/employer_folders/lot9/221789/67x67/103316momopink-logo.png"
                            }
                            dataScr={
                              "https://images.careerbuilder.vn/employer_folders/lot0/239190/67x67/94043logo.jpg"
                            }
                            jobTitle={
                              "HR Coordinator (Recruitment & Training)- Nhon Trach"
                            }
                            jobHref={
                              "https://careerbuilder.vn/vi/tim-viec-lam/hr-coordinator-recruitment-training-nhon-trach.35BCD007.html"
                            }
                            jobSalary={"Lương: Cạnh Tranh"}
                            jobLocation={"Đồng Nai"}
                            isTop={true}
                          />
                          <JobsItem
                            companyHref={
                              "https://careerbuilder.vn/vi/nha-tuyen-dung/summit-polymers-vietnam-co-ltd.35A88F56.html"
                            }
                            companyTitle={"Summit Polymers Vietnam Co Ltd. "}
                            imgSrc={
                              "https://images.careerbuilder.vn/employer_folders/lot9/221789/67x67/103316momopink-logo.png"
                            }
                            dataScr={
                              "https://images.careerbuilder.vn/employer_folders/lot0/239190/67x67/94043logo.jpg"
                            }
                            jobTitle={
                              "HR Coordinator (Recruitment & Training)- Nhon Trach"
                            }
                            jobHref={
                              "https://careerbuilder.vn/vi/tim-viec-lam/hr-coordinator-recruitment-training-nhon-trach.35BCD007.html"
                            }
                            jobSalary={"Lương: Cạnh Tranh"}
                            jobLocation={"Đồng Nai"}
                            isTop={true}
                          />
                          <JobsItem
                            companyHref={
                              "https://careerbuilder.vn/vi/nha-tuyen-dung/summit-polymers-vietnam-co-ltd.35A88F56.html"
                            }
                            companyTitle={"Summit Polymers Vietnam Co Ltd. "}
                            imgSrc={
                              "https://images.careerbuilder.vn/employer_folders/lot9/221789/67x67/103316momopink-logo.png"
                            }
                            dataScr={
                              "https://images.careerbuilder.vn/employer_folders/lot0/239190/67x67/94043logo.jpg"
                            }
                            jobTitle={
                              "HR Coordinator (Recruitment & Training)- Nhon Trach"
                            }
                            jobHref={
                              "https://careerbuilder.vn/vi/tim-viec-lam/hr-coordinator-recruitment-training-nhon-trach.35BCD007.html"
                            }
                            jobSalary={"Lương: Cạnh Tranh"}
                            jobLocation={"Đồng Nai"}
                            isTop={true}
                          />
                          <JobsItem
                            companyHref={
                              "https://careerbuilder.vn/vi/nha-tuyen-dung/summit-polymers-vietnam-co-ltd.35A88F56.html"
                            }
                            companyTitle={"Summit Polymers Vietnam Co Ltd. "}
                            imgSrc={
                              "https://images.careerbuilder.vn/employer_folders/lot9/221789/67x67/103316momopink-logo.png"
                            }
                            dataScr={
                              "https://images.careerbuilder.vn/employer_folders/lot0/239190/67x67/94043logo.jpg"
                            }
                            jobTitle={
                              "HR Coordinator (Recruitment & Training)- Nhon Trach"
                            }
                            jobHref={
                              "https://careerbuilder.vn/vi/tim-viec-lam/hr-coordinator-recruitment-training-nhon-trach.35BCD007.html"
                            }
                            jobSalary={"Lương: Cạnh Tranh"}
                            jobLocation={"Đồng Nai"}
                            isTop={true}
                          />
                          <JobsItem
                            companyHref={
                              "https://careerbuilder.vn/vi/nha-tuyen-dung/summit-polymers-vietnam-co-ltd.35A88F56.html"
                            }
                            companyTitle={"Summit Polymers Vietnam Co Ltd. "}
                            imgSrc={
                              "https://images.careerbuilder.vn/employer_folders/lot9/221789/67x67/103316momopink-logo.png"
                            }
                            dataScr={
                              "https://images.careerbuilder.vn/employer_folders/lot0/239190/67x67/94043logo.jpg"
                            }
                            jobTitle={
                              "HR Coordinator (Recruitment & Training)- Nhon Trach"
                            }
                            jobHref={
                              "https://careerbuilder.vn/vi/tim-viec-lam/hr-coordinator-recruitment-training-nhon-trach.35BCD007.html"
                            }
                            jobSalary={"Lương: Cạnh Tranh"}
                            jobLocation={"Đồng Nai"}
                            isTop={true}
                          />
                          <JobsItem
                            companyHref={
                              "https://careerbuilder.vn/vi/nha-tuyen-dung/summit-polymers-vietnam-co-ltd.35A88F56.html"
                            }
                            companyTitle={"Summit Polymers Vietnam Co Ltd. "}
                            imgSrc={
                              "https://images.careerbuilder.vn/employer_folders/lot9/221789/67x67/103316momopink-logo.png"
                            }
                            dataScr={
                              "https://images.careerbuilder.vn/employer_folders/lot0/239190/67x67/94043logo.jpg"
                            }
                            jobTitle={
                              "HR Coordinator (Recruitment & Training)- Nhon Trach"
                            }
                            jobHref={
                              "https://careerbuilder.vn/vi/tim-viec-lam/hr-coordinator-recruitment-training-nhon-trach.35BCD007.html"
                            }
                            jobSalary={"Lương: Cạnh Tranh"}
                            jobLocation={"Đồng Nai"}
                            isTop={true}
                          />
                          <JobsItem
                            companyHref={
                              "https://careerbuilder.vn/vi/nha-tuyen-dung/summit-polymers-vietnam-co-ltd.35A88F56.html"
                            }
                            companyTitle={"Summit Polymers Vietnam Co Ltd. "}
                            imgSrc={
                              "https://images.careerbuilder.vn/employer_folders/lot9/221789/67x67/103316momopink-logo.png"
                            }
                            dataScr={
                              "https://images.careerbuilder.vn/employer_folders/lot0/239190/67x67/94043logo.jpg"
                            }
                            jobTitle={
                              "HR Coordinator (Recruitment & Training)- Nhon Trach"
                            }
                            jobHref={
                              "https://careerbuilder.vn/vi/tim-viec-lam/hr-coordinator-recruitment-training-nhon-trach.35BCD007.html"
                            }
                            jobSalary={"Lương: Cạnh Tranh"}
                            jobLocation={"Đồng Nai"}
                            isTop={true}
                          />
                          <JobsItem
                            companyHref={
                              "https://careerbuilder.vn/vi/nha-tuyen-dung/summit-polymers-vietnam-co-ltd.35A88F56.html"
                            }
                            companyTitle={"Summit Polymers Vietnam Co Ltd. "}
                            imgSrc={
                              "https://images.careerbuilder.vn/employer_folders/lot9/221789/67x67/103316momopink-logo.png"
                            }
                            dataScr={
                              "https://images.careerbuilder.vn/employer_folders/lot0/239190/67x67/94043logo.jpg"
                            }
                            jobTitle={
                              "HR Coordinator (Recruitment & Training)- Nhon Trach"
                            }
                            jobHref={
                              "https://careerbuilder.vn/vi/tim-viec-lam/hr-coordinator-recruitment-training-nhon-trach.35BCD007.html"
                            }
                            jobSalary={"Lương: Cạnh Tranh"}
                            jobLocation={"Đồng Nai"}
                            isTop={true}
                          />
                          <JobsItem
                            companyHref={
                              "https://careerbuilder.vn/vi/nha-tuyen-dung/summit-polymers-vietnam-co-ltd.35A88F56.html"
                            }
                            companyTitle={"Summit Polymers Vietnam Co Ltd. "}
                            imgSrc={
                              "https://images.careerbuilder.vn/employer_folders/lot9/221789/67x67/103316momopink-logo.png"
                            }
                            dataScr={
                              "https://images.careerbuilder.vn/employer_folders/lot0/239190/67x67/94043logo.jpg"
                            }
                            jobTitle={
                              "HR Coordinator (Recruitment & Training)- Nhon Trach"
                            }
                            jobHref={
                              "https://careerbuilder.vn/vi/tim-viec-lam/hr-coordinator-recruitment-training-nhon-trach.35BCD007.html"
                            }
                            jobSalary={"Lương: Cạnh Tranh"}
                            jobLocation={"Đồng Nai"}
                            isTop={true}
                          />
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
              <div className="tab-content" id="tab-2">
                <div className="hot-jobs-slide" id="vip-jobs-slide">
                  <div className="swiper-container">
                    <div className="swiper-wrapper" />
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
                        <a href="https://careerbuilder.vn/viec-lam/muc-luong-20trvnd-s20-vi.html">
                          Xem việc làm mới cập nhật
                          <span className="mdi mdi-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="tab-3">
                <div className="hot-jobs-slide" id="topheadhunt-jobs-slide">
                  <div className="swiper-container">
                    <div className="swiper-wrapper" />
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
                        <a
                          href="https://careerbuilder.vn/top-headhunt?utm_source=Home_TopHeadhunt&utm_medium=TopHeadhunt&utm_campaign=Promote_TopHeadhunt"
                          target="_blank"
                        >
                          Việc Làm Từ Top Headhunter
                          <span className="mdi mdi-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
