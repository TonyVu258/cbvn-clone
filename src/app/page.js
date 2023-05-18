"use client";
import { Swiper } from "swiper/react";
import Banner from "../../components/Banner";
import BannerPromo from "../../components/BannerPromo";
import Header from "../../components/Header";
import JobsItem from "../../components/JobsItem/JobsItem";
import Section from "../../components/Section/Section";
import "../styles/index.css";
import CareerKey from "../../components/JobsItem/CareerKey";
import Talen from "../../components/JobsItem/Talen";

const DATA_BANNER_PROMO = {
  first: {
    href: "https://ads.careerbuilder.vn/www/delivery/ck.php?oaparams=2__bannerid=6352__zoneid=848__cb=d74e9fba31__oadest=https%3A%2F%2Fcareerstart.vn%2F",
    target: "_blank",
    img1Src:
      "https://ads.careerbuilder.vn/www/images/a5b2628391fac3d894caa7e1a29d12fa.jpg",
    img2Src:
      "https://ads.careerbuilder.vn/www/delivery/lg.php?bannerid=6352&campaignid=1749&zoneid=848&loc=https%3A%2F%2Fcareerbuilder.vn%2Fvi&cb=d74e9fba31",
    imgAlt: "Careerstart tuyendung",
  },
  second: {
    href: "https://ads.careerbuilder.vn/www/delivery/ck.php?oaparams=2__bannerid=6716__zoneid=848__cb=f68f85cfd4__oadest=https%3A%2F%2Fcareerbuilder.vn%2Fvi%2Ftalentcommunity%2Fcareerbuilder-cong-bo-top-100-nha-tuyen-dung-yeu-thich-nam-2022.35A522B8.html",
    target: "_blank",
    img1Src:
      "https://ads.careerbuilder.vn/www/images/40322bfe0026051c3092d837b500e854.jpg",
    img2Src:
      "https://ads.careerbuilder.vn/www/delivery/lg.php?bannerid=6716&amp;campaignid=1812&amp;zoneid=848&amp;loc=https%3A%2F%2Fcareerbuilder.vn%2Fvi&amp;cb=f68f85cfd4",
    imgAlt: "EOC Result 2022",
  },
  third: {
    href: "https://ads.careerbuilder.vn/www/delivery/ck.php?oaparams=2__bannerid=4738__zoneid=850__cb=331b419b20__oadest=https%3A%2F%2Fvietnamsalary.careerbuilder.vn%2F%3Futm_source%3DCB%26utm_medium%3DVNSalary%26utm_campaign%3DCBVNSalary",
    target: "_blank",
    img1Src:
      "https://ads.careerbuilder.vn/www/images/cd36bdd64ecdebbeeafc6347057ee992.png",
    img2Src:
      "https://ads.careerbuilder.vn/www/delivery/lg.php?bannerid=4738&amp;campaignid=1349&amp;zoneid=850&amp;loc=https%3A%2F%2Fcareerbuilder.vn%2Fvi&amp;cb=331b419b20",
    imgAlt: "Vietnam Salary",
  },
  fourth: {
    href: "https://ads.careerbuilder.vn/www/delivery/ck.php?oaparams=2__bannerid=4739__zoneid=851__cb=77a765a0ce__oadest=https%3A%2F%2Fvieclamit.careerbuilder.vn%2F",
    target: "_blank",
    img1Src:
      "https://ads.careerbuilder.vn/www/images/b818531cf76fdafbf772e3d95f5f102a.png",
    img2Src:
      "https://ads.careerbuilder.vn/www/delivery/lg.php?bannerid=4739&amp;campaignid=1349&amp;zoneid=851&amp;loc=https%3A%2F%2Fcareerbuilder.vn%2Fvi&amp;cb=77a765a0ce",
    imgAlt: "Vieclam IT",
  },
};

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
          <div className="top-employers-list">
            <div className="row">
              <div className="col-lg-6">
                <div className="item">
                  <div className="image" id={846} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="item">
                  <div className="image" id={847} />
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

      <Section
        css={
          "form-email-get-job lazy-bg bg-[url('https://images.careerbuilder.vn/content/Product/bg-4_3.jpg')]"
        }
      >
        <div className="container form-email">
          <div className="cb-title cb-title-center cb-title-white">
            <h2>
              Đăng ký theo dõi để nhận cập nhật về cơ hội việc làm mới và phù
              hợp nhất
            </h2>
          </div>
          <form
            method="get"
            id="home_page_created_jobalert"
            action="https://careerbuilder.vn/thong-bao-viec-lam"
          >
            <div className="row">
              <div className="col-xl-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    placeholder="Nhập địa chỉ email của bạn"
                  />
                  <button type="submit" className="btn-gradient">
                    <span className="mdi mdi-pencil" />
                    ĐĂNG KÝ NGAY
                  </button>
                  <div id="email_validate" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </Section>
      <Section
        css={"banner-promo cb-section"}
      >
        <div className="container">
          <div className="row">
            <BannerPromo>{DATA_BANNER_PROMO.first}</BannerPromo>
            <BannerPromo>{DATA_BANNER_PROMO.second}</BannerPromo>
            <BannerPromo>{DATA_BANNER_PROMO.third}</BannerPromo>
            <BannerPromo>{DATA_BANNER_PROMO.fourth}</BannerPromo>
          </div>
        </div>
      </Section>
      <Section css={"career-key cb-section"}>
        <div className="container">
          <div className="cb-title cb-title-center">
            <h2>Ngành Nghề Trọng Điểm</h2>
          </div>
          <div className="career-key-slide">
              <CareerKey />
            <div className="swiper-navigation">
              <div
                className="swiper-btn swiper-prev"
                style={{ background: "transparent", marginLeft: "-40px" }}
              >
                <em
                  className="lnr lnr-chevron-left"
                  style={{ background: "transparent", marginRight: "-40px" }}
                />
              </div>
              <div className="swiper-btn swiper-next">
                <em className="lnr lnr-chevron-right" />
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section css={"talent-network cb-section cb-section-border-bottom"}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5">
              <div
                className="title-wrap lazy-bg bg-[url(https://static.careerbuilder.vn/themes/careerbuilder/img/home/bg-2.png)]"
                data-src="./img/home/bg-2.png"
              >
                <div className="title">
                  <div className="quote-left">
                    <img
                      src="https://static.careerbuilder.vn/themes/careerbuilder/img/home/quote1.png"
                      alt="careerbuilder"
                    />
                  </div>
                  <h2>
                    Gia tăng cơ hội nghề nghiệp{" "}
                    <span>
                      khi kết nối cùng các công ty hàng đầu tại TalentNetwork
                    </span>
                  </h2>
                  <div className="quote-right">
                    <img
                      src="https://static.careerbuilder.vn/themes/careerbuilder/img/home/quote2.png"
                      alt="careerbuilder"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-6 col-sm-4 col-lg-3 col-app-intro">
                  <div className="item">
                    <div className="image">
                      <a
                        href="https://tuyendung.sonha.com.vn"
                        target="_blank"
                        title="Tập đoàn Sơn Hà"
                        rel="nofollow"
                      >
                        <img
                          className="lazy-bg"
                          src="https://images.careerbuilder.vn/logotalent/173x90/logo_sonha_1669705136_1669889619.png"
                          alt="Tập đoàn Sơn Hà"
                          title="Tập đoàn Sơn Hà"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-lg-3 col-app-intro">
                  <div className="item">
                    <div className="image">
                      <a
                        href="https://crccareers.com"
                        target="_blank"
                        title="CRC Sport & Lifestyle"
                        rel="nofollow"
                      >
                        <img
                          className="lazy-bg"
                          src="https://images.careerbuilder.vn/logotalent/173x90/logo_03_1651637278_1660619617.jpg"
                          alt="CRC Sport & Lifestyle"
                          title="CRC Sport & Lifestyle"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-lg-3 col-app-intro">
                  <div className="item">
                    <div className="image">
                      <a
                        href="https://career.cc1.vn"
                        target="_blank"
                        title="Tổng công ty xây dựng số 1"
                        rel="nofollow"
                      >
                        <img
                          className="lazy-bg"
                          src="https://images.careerbuilder.vn/logotalent/173x90/logo_1659609091.jpg"
                          alt="Tổng công ty xây dựng số 1"
                          title="Tổng công ty xây dựng số 1"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-lg-3 col-app-intro">
                  <div className="item">
                    <div className="image">
                      <a
                        href="https://tuyendung.decofi.vn"
                        target="_blank"
                        title="Decofi"
                        rel="nofollow"
                      >
                        <img
                          className="lazy-bg"
                          src="https://images.careerbuilder.vn/logotalent/173x90/logo_03_1656052165_1657780600.jpg"
                          alt="Decofi"
                          title="Decofi"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-lg-3 col-app-intro">
                  <div className="item">
                    <div className="image">
                      <a
                        href="https://tuyendunghoanggia.com"
                        target="_blank"
                        title="Royal Group"
                        rel="nofollow"
                      >
                        <img
                          className="lazy-bg"
                          src="https://images.careerbuilder.vn/logotalent/173x90/royal_1656387085.jpg"
                          alt="Royal Group"
                          title="Royal Group"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-lg-3 col-app-intro">
                  <div className="item">
                    <div className="image">
                      <a
                        href="https://nekoglobal.talentnetwork.vn"
                        target="_blank"
                        title="Neko global"
                        rel="nofollow"
                      >
                        <img
                          className="lazy-bg"
                          src="https://images.careerbuilder.vn/logotalent/173x90/logo_1652779932.jpg"
                          alt="Neko global"
                          title="Neko global"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-lg-3 col-app-intro">
                  <div className="item">
                    <div className="image">
                      <a
                        href="https://finhay.talentnetwork.vn"
                        target="_blank"
                        title="Finhay"
                        rel="nofollow"
                      >
                        <img
                          className="lazy-bg"
                          src="https://images.careerbuilder.vn/logotalent/173x90/logo_finhay_1651804999.png"
                          alt="Finhay"
                          title="Finhay"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-lg-3 col-app-intro">
                  <div className="item">
                    <div className="image">
                      <a
                        href="https://career.vanphu.vn"
                        target="_blank"
                        title="Văn Phú - Invest"
                        rel="nofollow"
                      >
                        <img
                          className="lazy-bg"
                          src="https://images.careerbuilder.vn/logotalent/173x90/vanphu_1648778182.png"
                          alt="Văn Phú - Invest"
                          title="Văn Phú - Invest"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="view-more">
                <a
                  target="_blank"
                  href="https://careerbuilder.vn/vi/talentnetwork"
                >
                  Xem thêm
                  <span className="mdi mdi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section css={"cb-section career-development"}>
        <div className="container">
          <div className="cb-title cb-title-center">
            <h2>
              <span>Cẩm nang nghề nghiệp</span>
            </h2>
          </div>
          <div className="career-development-slide">
            <div className="swiper-container">
              <Talen/>
            </div>
            <div className="swiper-prev">
              <span className="lnr lnr-chevron-left" />
            </div>
            <div className="swiper-next">
              <span className="lnr lnr-chevron-right" />
            </div>
          </div>
          <div className="view-more">
            <a
              target="_blank"
              href="https://careerbuilder.vn/vi/talentcommunity"
            >
              Xem thêm
              <span className="mdi mdi-arrow-right" />
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
