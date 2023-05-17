import Banner from "../../components/Banner";
import BannerPromo from "../../components/BannerPromo";
import Header from "../../components/Header";
import JobsItem from "../../components/JobsItem/JobsItem";
import Section from "../../components/Section/Section";
import "../styles/index.css";

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
      <Section css={"banner-promo cb-section cb-section-border-bottom"}>
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
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="item">
                      <div className="inner">
                        <div className="box-icon">
                          <img
                            src="images/png/2.png"
                            alt="Kế toán / Kiểm toán"
                          />
                        </div>
                        <div className="box-desc">
                          <h3>
                            <a
                              href="https://careerbuilder.vn/viec-lam/ke-toan-kiem-toan-c2-vi.html"
                              title="Kế toán / Kiểm toán"
                            >
                              Kế toán / Kiểm toán
                            </a>
                          </h3>
                          <span>(2.222 việc làm khác)</span>
                        </div>
                      </div>
                      <a
                        href="https://careerbuilder.vn/viec-lam/ke-toan-kiem-toan-c2-vi.html"
                        title="Kế toán / Kiểm toán"
                        className="link"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="item">
                      <div className="inner">
                        <div className="box-icon">
                          <img src="images/png/22.png" alt="Nhân sự" />
                        </div>
                        <div className="box-desc">
                          <h3>
                            <a
                              href="https://careerbuilder.vn/viec-lam/nhan-su-c22-vi.html"
                              title="Nhân sự"
                            >
                              Nhân sự
                            </a>
                          </h3>
                          <span>(988 việc làm khác)</span>
                        </div>
                      </div>
                      <a
                        href="https://careerbuilder.vn/viec-lam/nhan-su-c22-vi.html"
                        title="Nhân sự"
                        className="link"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="item">
                      <div className="inner">
                        <div className="box-icon">
                          <img src="images/png/30.png" alt="Bán lẻ / Bán sỉ" />
                        </div>
                        <div className="box-desc">
                          <h3>
                            <a
                              href="https://careerbuilder.vn/viec-lam/ban-le-ban-si-c30-vi.html"
                              title="Bán lẻ / Bán sỉ"
                            >
                              Bán lẻ / Bán sỉ
                            </a>
                          </h3>
                          <span>(2.059 việc làm khác)</span>
                        </div>
                      </div>
                      <a
                        href="https://careerbuilder.vn/viec-lam/ban-le-ban-si-c30-vi.html"
                        title="Bán lẻ / Bán sỉ"
                        className="link"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="item">
                      <div className="inner">
                        <div className="box-icon">
                          <img
                            src="images/png/59.png"
                            alt="Tài chính / Đầu tư"
                          />
                        </div>
                        <div className="box-desc">
                          <h3>
                            <a
                              href="https://careerbuilder.vn/viec-lam/tai-chinh-dau-tu-c59-vi.html"
                              title="Tài chính / Đầu tư"
                            >
                              Tài chính / Đầu tư
                            </a>
                          </h3>
                          <span>(2.768 việc làm khác)</span>
                        </div>
                      </div>
                      <a
                        href="https://careerbuilder.vn/viec-lam/tai-chinh-dau-tu-c59-vi.html"
                        title="Tài chính / Đầu tư"
                        className="link"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="item">
                      <div className="inner">
                        <div className="box-icon">
                          <img src="images/png/8.png" alt="Xây dựng" />
                        </div>
                        <div className="box-desc">
                          <h3>
                            <a
                              href="https://careerbuilder.vn/viec-lam/xay-dung-c8-vi.html"
                              title="Xây dựng"
                            >
                              Xây dựng
                            </a>
                          </h3>
                          <span>(847 việc làm khác)</span>
                        </div>
                      </div>
                      <a
                        href="https://careerbuilder.vn/viec-lam/xay-dung-c8-vi.html"
                        title="Xây dựng"
                        className="link"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="item">
                      <div className="inner">
                        <div className="box-icon">
                          <img src="images/png/19.png" alt="Ngân hàng" />
                        </div>
                        <div className="box-desc">
                          <h3>
                            <a
                              href="https://careerbuilder.vn/viec-lam/ngan-hang-c19-vi.html"
                              title="Ngân hàng"
                            >
                              Ngân hàng
                            </a>
                          </h3>
                          <span>(3.165 việc làm khác)</span>
                        </div>
                      </div>
                      <a
                        href="https://careerbuilder.vn/viec-lam/ngan-hang-c19-vi.html"
                        title="Ngân hàng"
                        className="link"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="item">
                      <div className="inner">
                        <div className="box-icon">
                          <img
                            src="images/png/12.png"
                            alt="Dịch vụ khách hàng"
                          />
                        </div>
                        <div className="box-desc">
                          <h3>
                            <a
                              href="https://careerbuilder.vn/viec-lam/dich-vu-khach-hang-c12-vi.html"
                              title="Dịch vụ khách hàng"
                            >
                              Dịch vụ khách hàng
                            </a>
                          </h3>
                          <span>(2.150 việc làm khác)</span>
                        </div>
                      </div>
                      <a
                        href="https://careerbuilder.vn/viec-lam/dich-vu-khach-hang-c12-vi.html"
                        title="Dịch vụ khách hàng"
                        className="link"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="item">
                      <div className="inner">
                        <div className="box-icon">
                          <img
                            src="images/png/25.png"
                            alt="Sản xuất / Vận hành sản xuất"
                          />
                        </div>
                        <div className="box-desc">
                          <h3>
                            <a
                              href="https://careerbuilder.vn/viec-lam/san-xuat-van-hanh-san-xuat-c25-vi.html"
                              title="Sản xuất / Vận hành sản xuất"
                            >
                              Sản xuất / Vận hành sản xuất
                            </a>
                          </h3>
                          <span>(1.081 việc làm khác)</span>
                        </div>
                      </div>
                      <a
                        href="https://careerbuilder.vn/viec-lam/san-xuat-van-hanh-san-xuat-c25-vi.html"
                        title="Sản xuất / Vận hành sản xuất"
                        className="link"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="item">
                      <div className="inner">
                        <div className="box-icon">
                          <img
                            src="images/png/17.png"
                            alt="Quản lý điều hành"
                          />
                        </div>
                        <div className="box-desc">
                          <h3>
                            <a
                              href="https://careerbuilder.vn/viec-lam/quan-ly-dieu-hanh-c17-vi.html"
                              title="Quản lý điều hành"
                            >
                              Quản lý điều hành
                            </a>
                          </h3>
                          <span>(918 việc làm khác)</span>
                        </div>
                      </div>
                      <a
                        href="https://careerbuilder.vn/viec-lam/quan-ly-dieu-hanh-c17-vi.html"
                        title="Quản lý điều hành"
                        className="link"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="item">
                      <div className="inner">
                        <div className="box-icon">
                          <img
                            src="images/png/48.png"
                            alt="Điện / Điện tử / Điện lạnh"
                          />
                        </div>
                        <div className="box-desc">
                          <h3>
                            <a
                              href="https://careerbuilder.vn/viec-lam/dien-dien-tu-dien-lanh-c48-vi.html"
                              title="Điện / Điện tử / Điện lạnh"
                            >
                              Điện / Điện tử / Điện lạnh
                            </a>
                          </h3>
                          <span>(1.089 việc làm khác)</span>
                        </div>
                      </div>
                      <a
                        href="https://careerbuilder.vn/viec-lam/dien-dien-tu-dien-lanh-c48-vi.html"
                        title="Điện / Điện tử / Điện lạnh"
                        className="link"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-navigation">
                <div className="swiper-btn swiper-prev">
                  <em className="lnr lnr-chevron-left" />
                </div>
                <div className="swiper-btn swiper-next">
                  <em className="lnr lnr-chevron-right" />
                </div>
              </div>
            </div>
          </div>
      </Section>
    </>
  );
}
