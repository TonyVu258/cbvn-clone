import Banner from "../../components/Banner";
import Header from "../../components/Header";
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
                          <div className="col-lg-6 ">
                            <div className="job-item">
                              <div className="figure">
                                <div className="image">
                                  <a
                                    target="_blank"
                                    href="https://careerbuilder.vn/vi/nha-tuyen-dung/summit-polymers-vietnam-co-ltd.35A88F56.html"
                                    title="Summit Polymers Vietnam Co Ltd. "
                                  >
                                    <img
                                      src="../kiemviecv32/images/graphics/blank.gif"
                                      className="swiper-lazy"
                                      data-src="https://images.careerbuilder.vn/employer_folders/lot0/239190/67x67/94043logo.jpg"
                                      alt="Summit Polymers Vietnam Co Ltd. "
                                    />
                                  </a>
                                </div>
                                <div className="figcaption">
                                  <div className="title">
                                    <a
                                      target="_blank"
                                      href="https://careerbuilder.vn/vi/tim-viec-lam/hr-coordinator-recruitment-training-nhon-trach.35BCD007.html"
                                      title="HR Coordinator (Recruitment & Training)- Nhon Trach"
                                    >
                                      HR Coordinator (Recruitment &amp;
                                      Training)- Nhon Trach
                                    </a>
                                  </div>
                                  <div className="caption">
                                    <a
                                      className="company-name"
                                      title="Summit Polymers Vietnam Co Ltd. "
                                      href="https://careerbuilder.vn/vi/nha-tuyen-dung/summit-polymers-vietnam-co-ltd.35A88F56.html"
                                      target="_blank"
                                    >
                                      Summit Polymers Vietnam Co Ltd.{" "}
                                    </a>
                                    <p className="salary">
                                      <em className="fa fa-usd" />
                                      Lương: Cạnh Tranh
                                    </p>
                                    <div className="location">
                                      <em className="mdi mdi-map-marker" />
                                      <p> Đồng Nai</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="top-icon">
                                  {" "}
                                  <span className="top">Top</span>{" "}
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          <div className="col-lg-6 ">
                            <div className="job-item">
                              <div className="figure">
                                <div className="image">
                                  <a
                                    target="_blank"
                                    href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-charm-group.35A8A354.html"
                                    title="CÔNG TY CỔ PHẦN CHARM GROUP"
                                  >
                                    <img
                                      src="../kiemviecv32/images/graphics/blank.gif"
                                      className="swiper-lazy"
                                      data-src="https://images.careerbuilder.vn/employer_folders/lot8/244308/67x67/102620logocharm.png"
                                      alt="CÔNG TY CỔ PHẦN CHARM GROUP"
                                    />
                                  </a>
                                </div>
                                <div className="figcaption">
                                  <div className="title">
                                    <a
                                      target="_blank"
                                      href="https://careerbuilder.vn/vi/tim-viec-lam/giam-doc-dieu-hanh.35BCD69D.html"
                                      title="GIÁM ĐỐC ĐIỀU HÀNH"
                                    >
                                      GIÁM ĐỐC ĐIỀU HÀNH
                                    </a>
                                  </div>
                                  <div className="caption">
                                    <a
                                      className="company-name"
                                      title="CÔNG TY CỔ PHẦN CHARM GROUP"
                                      href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-charm-group.35A8A354.html"
                                      target="_blank"
                                    >
                                      CÔNG TY CỔ PHẦN CHARM GROUP
                                    </a>
                                    <p className="salary">
                                      <em className="fa fa-usd" />
                                      Lương: Cạnh Tranh
                                    </p>
                                    <div className="location">
                                      <em className="mdi mdi-map-marker" />
                                      <p> Hồ Chí Minh</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="top-icon">
                                  {" "}
                                  <span className="top">Top</span>{" "}
                                  <span className="new">(Mới)</span>{" "}
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          <div className="col-lg-6 ">
                            <div className="job-item">
                              <div className="figure">
                                <div className="image">
                                  <a
                                    target="_blank"
                                    href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-golden-path-academics-viet-nam-gpa.35A76857.html"
                                    title="Công ty Cổ phần Golden Path Academics Việt Nam (GPA)"
                                  >
                                    <img
                                      src="../kiemviecv32/images/graphics/blank.gif"
                                      className="swiper-lazy"
                                      data-src="https://images.careerbuilder.vn/employer_folders/lot1/163671/67x67/100719logogpa-01.png"
                                      alt="Công ty Cổ phần Golden Path Academics Việt Nam (GPA)"
                                    />
                                  </a>
                                </div>
                                <div className="figcaption">
                                  <div className="title">
                                    <a
                                      target="_blank"
                                      href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-performance-marketing.35BBFED3.html"
                                      title="Chuyên Viên Performance Marketing"
                                    >
                                      Chuyên Viên Performance Marketing
                                    </a>
                                  </div>
                                  <div className="caption">
                                    <a
                                      className="company-name"
                                      title="Công ty Cổ phần Golden Path Academics Việt Nam (GPA)"
                                      href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-golden-path-academics-viet-nam-gpa.35A76857.html"
                                      target="_blank"
                                    >
                                      Công ty Cổ phần Golden Path Academics Việt
                                      Nam (GPA)
                                    </a>
                                    <p className="salary">
                                      <em className="fa fa-usd" />
                                      Lương: 15 Tr - 17 Tr VND
                                    </p>
                                    <div className="location">
                                      <em className="mdi mdi-map-marker" />
                                      <p> Hà Nội</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="top-icon">
                                  {" "}
                                  <span className="top">Top</span>{" "}
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          <div className="col-lg-6 ">
                            <div className="job-item">
                              <div className="figure">
                                <div className="image">
                                  <a
                                    target="_blank"
                                    href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-texmaster-viet-nam.35A83CCB.html"
                                    title="Công Ty TNHH Texmaster Việt Nam"
                                  >
                                    <img
                                      src="../kiemviecv32/images/graphics/blank.gif"
                                      className="swiper-lazy"
                                      data-src="https://images.careerbuilder.vn/employer_folders/lot9/218059/67x67/165047logo.jpg"
                                      alt="Công Ty TNHH Texmaster Việt Nam"
                                    />
                                  </a>
                                </div>
                                <div className="figcaption">
                                  <div className="title">
                                    <a
                                      target="_blank"
                                      href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-qa.35BCD21E.html"
                                      title="Nhân viên QA"
                                    >
                                      Nhân viên QA
                                    </a>
                                  </div>
                                  <div className="caption">
                                    <a
                                      className="company-name"
                                      title="Công Ty TNHH Texmaster Việt Nam"
                                      href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-texmaster-viet-nam.35A83CCB.html"
                                      target="_blank"
                                    >
                                      Công Ty TNHH Texmaster Việt Nam
                                    </a>
                                    <p className="salary">
                                      <em className="fa fa-usd" />
                                      Lương: Cạnh Tranh
                                    </p>
                                    <div className="location">
                                      <em className="mdi mdi-map-marker" />
                                      <p> Bình Dương</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="top-icon">
                                  {" "}
                                  <span className="top">Top</span>{" "}
                                  <span className="new">(Mới)</span>{" "}
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          <div className="col-lg-6 ">
                            <div className="job-item">
                              <div className="figure">
                                <div className="image">
                                  <a
                                    target="_blank"
                                    href="https://careerbuilder.vn/vi/nha-tuyen-dung/fe-credit.35A637C6.html"
                                    title="FE CREDIT"
                                  >
                                    <img
                                      src="../kiemviecv32/images/graphics/blank.gif"
                                      className="swiper-lazy"
                                      data-src="https://images.careerbuilder.vn/employer_folders/lot2/85702/67x67/115503logo_fullcolor.png"
                                      alt="FE CREDIT"
                                    />
                                  </a>
                                </div>
                                <div className="figcaption">
                                  <div className="title">
                                    <a
                                      target="_blank"
                                      href="https://careerbuilder.vn/vi/tim-viec-lam/senior-credit-reporting-specialist.35BBA317.html"
                                      title="Senior Credit Reporting Specialist"
                                    >
                                      Senior Credit Reporting Specialist
                                    </a>
                                  </div>
                                  <div className="caption">
                                    <a
                                      className="company-name"
                                      title="FE CREDIT"
                                      href="https://careerbuilder.vn/vi/nha-tuyen-dung/fe-credit.35A637C6.html"
                                      target="_blank"
                                    >
                                      FE CREDIT
                                    </a>
                                    <p className="salary">
                                      <em className="fa fa-usd" />
                                      Lương: Cạnh Tranh
                                    </p>
                                    <div className="location">
                                      <em className="mdi mdi-map-marker" />
                                      <p> Hồ Chí Minh</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="top-icon">
                                  {" "}
                                  <span className="top">Top</span>{" "}
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          <div className="col-lg-6 ">
                            <div className="job-item">
                              <div className="figure">
                                <div className="image">
                                  <a
                                    target="_blank"
                                    href="https://careerbuilder.vn/vi/nha-tuyen-dung/chicilon-media.35A8EA99.html"
                                    title="CHICILON MEDIA"
                                  >
                                    <img
                                      src="../kiemviecv32/images/graphics/blank.gif"
                                      className="swiper-lazy"
                                      data-src="https://images.careerbuilder.vn/employer_folders/lot3/262553/67x67/90025logohcm.png"
                                      alt="CHICILON MEDIA"
                                    />
                                  </a>
                                </div>
                                <div className="figcaption">
                                  <div className="title">
                                    <a
                                      target="_blank"
                                      href="https://careerbuilder.vn/vi/tim-viec-lam/tro-ly-phong-thiet-ke.35BC0267.html"
                                      title="TRỢ LÝ PHÒNG THIẾT KẾ"
                                    >
                                      TRỢ LÝ PHÒNG THIẾT KẾ
                                    </a>
                                  </div>
                                  <div className="caption">
                                    <a
                                      className="company-name"
                                      title="CHICILON MEDIA"
                                      href="https://careerbuilder.vn/vi/nha-tuyen-dung/chicilon-media.35A8EA99.html"
                                      target="_blank"
                                    >
                                      CHICILON MEDIA
                                    </a>
                                    <p className="salary">
                                      <em className="fa fa-usd" />
                                      Lương: 8 Tr - 10 Tr VND
                                    </p>
                                    <div className="location">
                                      <em className="mdi mdi-map-marker" />
                                      <p> Hà Nội</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="top-icon">
                                  {" "}
                                  <span className="top">Top</span>{" "}
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          <div className="col-lg-6 ">
                            <div className="job-item">
                              <div className="figure">
                                <div className="image">
                                  <a
                                    target="_blank"
                                    href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-bao-hiem-nhan-tho-sun-life-viet-nam.35A972D8.html"
                                    title="Công Ty Bảo Hiểm Nhân Thọ Sun Life Việt Nam"
                                  >
                                    <img
                                      src="../kiemviecv32/images/graphics/blank.gif"
                                      className="swiper-lazy"
                                      data-src="https://images.careerbuilder.vn/employer_folders/lot2/297432/67x67/180933taixuong.png"
                                      alt="Công Ty Bảo Hiểm Nhân Thọ Sun Life Việt Nam"
                                    />
                                  </a>
                                </div>
                                <div className="figcaption">
                                  <div className="title">
                                    <a
                                      target="_blank"
                                      href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-quan-ly-khach-hang-cao-cap.35BCD4BF.html"
                                      title="Chuyên Viên Quản Lý Khách Hàng Cao Cấp"
                                    >
                                      Chuyên Viên Quản Lý Khách Hàng Cao Cấp
                                    </a>
                                  </div>
                                  <div className="caption">
                                    <a
                                      className="company-name"
                                      title="Công Ty Bảo Hiểm Nhân Thọ Sun Life Việt Nam"
                                      href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-bao-hiem-nhan-tho-sun-life-viet-nam.35A972D8.html"
                                      target="_blank"
                                    >
                                      Công Ty Bảo Hiểm Nhân Thọ Sun Life Việt
                                      Nam
                                    </a>
                                    <p className="salary">
                                      <em className="fa fa-usd" />
                                      Lương: 16 Tr - 26 Tr VND
                                    </p>
                                    <div className="location">
                                      <em className="mdi mdi-map-marker" />
                                      <p> Hồ Chí Minh</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="top-icon">
                                  {" "}
                                  <span className="top">Top</span>{" "}
                                  <span className="new">(Mới)</span>{" "}
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          <div className="col-lg-6 ">
                            <div className="job-item">
                              <div className="figure">
                                <div className="image">
                                  <a
                                    target="_blank"
                                    href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-greenfeed-viet-nam.35A56979.html"
                                    title="Công Ty Cổ Phần GreenFeed Việt Nam"
                                  >
                                    <img
                                      src="../kiemviecv32/images/graphics/blank.gif"
                                      className="swiper-lazy"
                                      data-src="https://images.careerbuilder.vn/employers/32889/67x67/142444output-onlinepngtools.png"
                                      alt="Công Ty Cổ Phần GreenFeed Việt Nam"
                                    />
                                  </a>
                                </div>
                                <div className="figcaption">
                                  <div className="title">
                                    <a
                                      target="_blank"
                                      href="https://careerbuilder.vn/vi/tim-viec-lam/tro-ly-san-xuat.35BCD451.html"
                                      title="Trợ Lý Sản Xuất"
                                    >
                                      Trợ Lý Sản Xuất
                                    </a>
                                  </div>
                                  <div className="caption">
                                    <a
                                      className="company-name"
                                      title="Công Ty Cổ Phần GreenFeed Việt Nam"
                                      href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-greenfeed-viet-nam.35A56979.html"
                                      target="_blank"
                                    >
                                      Công Ty Cổ Phần GreenFeed Việt Nam
                                    </a>
                                    <p className="salary">
                                      <em className="fa fa-usd" />
                                      Lương: Cạnh Tranh
                                    </p>
                                    <div className="location">
                                      <em className="mdi mdi-map-marker" />
                                      <p> Đồng Nai</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="top-icon">
                                  {" "}
                                  <span className="top">Top</span>{" "}
                                  <span className="new">(Mới)</span>{" "}
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          <div className="col-lg-6 ">
                            <div className="job-item">
                              <div className="figure">
                                <div className="image">
                                  <a
                                    target="_blank"
                                    href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-greenfeed-viet-nam.35A56979.html"
                                    title="Công Ty Cổ Phần GreenFeed Việt Nam"
                                  >
                                    <img
                                      src="../kiemviecv32/images/graphics/blank.gif"
                                      className="swiper-lazy"
                                      data-src="https://images.careerbuilder.vn/employers/32889/67x67/142444output-onlinepngtools.png"
                                      alt="Công Ty Cổ Phần GreenFeed Việt Nam"
                                    />
                                  </a>
                                </div>
                                <div className="figcaption">
                                  <div className="title">
                                    <a
                                      target="_blank"
                                      href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-bao-tri-dien.35BCD2DC.html"
                                      title="Nhân Viên Bảo Trì Điện"
                                    >
                                      Nhân Viên Bảo Trì Điện
                                    </a>
                                  </div>
                                  <div className="caption">
                                    <a
                                      className="company-name"
                                      title="Công Ty Cổ Phần GreenFeed Việt Nam"
                                      href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-greenfeed-viet-nam.35A56979.html"
                                      target="_blank"
                                    >
                                      Công Ty Cổ Phần GreenFeed Việt Nam
                                    </a>
                                    <p className="salary">
                                      <em className="fa fa-usd" />
                                      Lương: Cạnh Tranh
                                    </p>
                                    <div className="location">
                                      <em className="mdi mdi-map-marker" />
                                      <p> Đồng Nai</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="top-icon">
                                  {" "}
                                  <span className="top">Top</span>{" "}
                                  <span className="new">(Mới)</span>{" "}
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          <div className="col-lg-6 ">
                            <div className="job-item">
                              <div className="figure">
                                <div className="image">
                                  <a
                                    target="_blank"
                                    href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-greenfeed-viet-nam.35A56979.html"
                                    title="Công Ty Cổ Phần GreenFeed Việt Nam"
                                  >
                                    <img
                                      src="../kiemviecv32/images/graphics/blank.gif"
                                      className="swiper-lazy"
                                      data-src="https://images.careerbuilder.vn/employers/32889/67x67/142444output-onlinepngtools.png"
                                      alt="Công Ty Cổ Phần GreenFeed Việt Nam"
                                    />
                                  </a>
                                </div>
                                <div className="figcaption">
                                  <div className="title">
                                    <a
                                      target="_blank"
                                      href="https://careerbuilder.vn/vi/tim-viec-lam/giam-sat-bao-tri-co-khi.35BCD2D8.html"
                                      title="Giám Sát Bảo Trì Cơ Khí"
                                    >
                                      Giám Sát Bảo Trì Cơ Khí
                                    </a>
                                  </div>
                                  <div className="caption">
                                    <a
                                      className="company-name"
                                      title="Công Ty Cổ Phần GreenFeed Việt Nam"
                                      href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-greenfeed-viet-nam.35A56979.html"
                                      target="_blank"
                                    >
                                      Công Ty Cổ Phần GreenFeed Việt Nam
                                    </a>
                                    <p className="salary">
                                      <em className="fa fa-usd" />
                                      Lương: Cạnh Tranh
                                    </p>
                                    <div className="location">
                                      <em className="mdi mdi-map-marker" />
                                      <p> Đồng Nai</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="top-icon">
                                  {" "}
                                  <span className="top">Top</span>{" "}
                                  <span className="new">(Mới)</span>{" "}
                                </div>
                              </div>
                            </div>
                          </div>{" "}
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
