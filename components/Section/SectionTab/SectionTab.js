import React, { useState } from "react";
import TabItem from "./TabItem";

const DATA_JOB = {
  hot_jobs: [
    {
      companyHref:
        "https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-lop-kumho-viet-nam.35A53A0E.html",
      companyTitle: "CÔNG TY TNHH LỐP KUMHO VIỆT NAM",
      imgSrc:
        "https://images.careerbuilder.vn/employers/20750/148x148/84341logo.png",
      jobTitle: "NHÂN VIÊN LỄ TÂN",
      jobHref:
        "https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-le-tan.35BCD933.html",
      jobSalary: "Cạnh tranh",
      jobLocation: "Bình Dương",
      isTop: true,
    },

    {
      companyHref:
        "https://careerbuilder.vn/vi/nha-tuyen-dung/aa-corporation.35A4EDE4.html",
      companyTitle: "AA CORPORATION",
      imgSrc:
        "https://images.careerbuilder.vn/employers/1252/148x148/151201aacorp.gif",
      jobTitle: "Kế toán tổng hợp - Công ty nước ngoài",
      jobHref:
        "https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-tong-hop-cong-ty-nuoc-ngoai.35BCD85B.html",
      jobSalary: "Cạnh tranh",
      jobLocation: "Hồ Chí Minh",
      isTop: true,
    },

    {
      companyHref:
        "https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-life-on.35A899F7.html",
      companyTitle: "CÔNG TY TNHH LIFE ON",
      imgSrc:
        "https://images.careerbuilder.vn/employer_folders/lot1/241911/67x67/154740lifeonco-ltd-logo-04.png",
      jobTitle: "HEAD OF DIGITAL MARKETING",
      jobHref:
        "https://careerbuilder.vn/vi/tim-viec-lam/head-of-digital-marketing.35BCD7F7.html",
      jobSalary: "Cạnh tranh",
      jobLocation:
        "SH-6C, Palm Residence, đường Song Hành, Phường An Phú, TP. Thủ Đức, TP. HCM, Việt Nam",
      isTop: true,
    },

    {
      companyHref:
        "https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-greenfeed-viet-nam.35A56979.html",
      companyTitle: "Công Ty Cổ Phần GreenFeed Việt Nam",
      imgSrc:
        "https://images.careerbuilder.vn/employers/32889/67x67/142444output-onlinepngtools.png",
      jobTitle: "Talent Acquisition Intern",
      jobHref:
        "https://careerbuilder.vn/vi/tim-viec-lam/talent-acquisition-intern.35BBDC49.html",
      jobSalary: "Cạnh tranh",
      jobLocation: "Hồ Chí Minh",
      isTop: true,
    },

    {
      companyHref:
        "https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-phat-trien-phu-my-hung.35A78FBA.html",
      companyTitle: "Công ty TNHH Phát triển Phú Mỹ Hưng",
      imgSrc:
        "https://images.careerbuilder.vn/employer_folders/lot4/173754/67x67/93003phumyhung-logo.jpg",
      jobTitle: "MEP QUANTITY SURVEYOR ENGINEER",
      jobHref:
        "https://careerbuilder.vn/vi/tim-viec-lam/mep-quantity-surveyor-engineer.35BCD61A.html",
      jobSalary: "Cạnh tranh",
      jobLocation: "Lawrance S.ting building, District 7, HCMC",
      isTop: true,
    },

    {
      companyHref:
        "https://careerbuilder.vn/vi/nha-tuyen-dung/hd-saison-finance-co-ltd.35A6DA73.html",
      companyTitle: "HD SAISON FINANCE CO., LTD",
      imgSrc:
        "https://images.careerbuilder.vn/employer_folders/lot7/127347/67x67/200341logohdsaison.jpg",
      jobTitle: "Chuyên viên Kiểm soát tài chính (Phân tích hoạt động)",
      jobHref:
        "https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-kiem-soat-tai-chinh-phan-tich-hoat-dong.35BCD688.html",
      jobSalary: "Cạnh tranh",
      jobLocation: "Hồ Chí Minh",
      isTop: true,
    },

    {
      companyHref:
        "https://careerbuilder.vn/vi/nha-tuyen-dung/summit-polymers-vietnam-co-ltd.35A88F56.html",
      companyTitle: "SUMMIT POLYMERS VIETNAM CO LTD.",
      imgSrc:
        "https://images.careerbuilder.vn/employer_folders/lot0/239190/67x67/94043logo.jpg",
      jobTitle: "HR Coordinator (Recruitment & Training)- Nhon Trach",
      jobHref:
        "https://careerbuilder.vn/vi/tim-viec-lam/hr-coordinator-recruitment-training-nhon-trach.35BCD007.html",
      jobSalary: "Cạnh tranh",
      jobLocation: "Đồng Nai",
      isTop: true,
    },

    {
      companyHref:
        "https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-charm-group.35A8A354.html",
      companyTitle: "CÔNG TY CỔ PHẦN CHARM GROUP",
      imgSrc:
        "https://images.careerbuilder.vn/employer_folders/lot8/244308/67x67/102620logocharm.png",
      jobTitle: "GIÁM ĐỐC ĐIỀU HÀNH",
      jobHref:
        "https://careerbuilder.vn/vi/tim-viec-lam/giam-doc-dieu-hanh.35BCD69D.html",
      jobSalary: "Cạnh tranh",
      jobLocation: "Hồ Chí Minh",
      isTop: true,
    },

    {
      companyHref:
        "https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-golden-path-academics-viet-nam-gpa.35A76857.html",
      companyTitle: "CÔNG TY CỔ PHẦN GOLDEN PATH ACADEMICS VIỆT NAM (GPA)",
      imgSrc:
        "https://images.careerbuilder.vn/employer_folders/lot1/163671/67x67/100719logogpa-01.png",
      jobTitle: "Chuyên Viên Performance Marketing",
      jobHref:
        "https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-performance-marketing.35BBFED3.html",
      jobSalary: "15 Tr - 17 Tr VND",
      jobLocation: "Hà Nội",
      isTop: true,
    },

    {
      companyHref:
        "https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-texmaster-viet-nam.35A83CCB.html",
      companyTitle: "CÔNG TY TNHH TEXMASTER VIỆT NAM",
      imgSrc:
        "https://images.careerbuilder.vn/employer_folders/lot9/218059/67x67/165047logo.jpg",
      jobTitle: "Nhân viên QA",
      jobHref:
        "https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-qa.35BCD21E.html",
      jobSalary: "Cạnh tranh",
      jobLocation: "Bình Dương",
      isTop: true,
    },

    {
      companyHref:
        "https://careerbuilder.vn/vi/nha-tuyen-dung/fe-credit.35A637C6.html",
      companyTitle: "FE CREDIT",
      imgSrc:
        "https://images.careerbuilder.vn/employers_pro/85702/1614741650_85702_logo.png",
      jobTitle: "Senior Credit Reporting Specialist",
      jobHref:
        "https://careerbuilder.vn/vi/tim-viec-lam/senior-credit-reporting-specialist.35BBA317.html",
      jobSalary: "Cạnh tranh",
      jobLocation: "Hồ Chí Minh",
      isTop: true,
    },

    {
      companyHref:
        "https://careerbuilder.vn/vi/nha-tuyen-dung/chicilon-media.35A8EA99.html",
      companyTitle: "CHICILON MEDIA",
      imgSrc:
        "https://images.careerbuilder.vn/employer_folders/lot3/262553/67x67/90025logohcm.png",
      jobTitle: "TRỢ LÝ PHÒNG THIẾT KẾ",
      jobHref:
        "https://careerbuilder.vn/vi/tim-viec-lam/tro-ly-phong-thiet-ke.35BC0267.html",
      jobSalary: "8,000,000 - 10,000,000 VND",
      jobLocation:
        "Tầng 30F, tòa Lotte Center, 54 Liễu Giai, P.Cống Vị, Q.Ba Đình, Hà Nội",
      isTop: true,
    },

    {
      companyHref:
        "https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-bao-hiem-nhan-tho-sun-life-viet-nam.35A972D8.html",
      companyTitle: "CÔNG TY BẢO HIỂM NHÂN THỌ SUN LIFE VIỆT NAM",
      imgSrc:
        "https://images.careerbuilder.vn/employer_folders/lot2/297432/67x67/180933taixuong.png",
      jobTitle: "CHUYÊN VIÊN QUẢN LÝ KHÁCH HÀNG CAO CẤP",
      jobHref:
        "https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-quan-ly-khach-hang-cao-cap.35BCD4BF.html",
      jobSalary: "16,000,000 - 26,000,000 VND",
      jobLocation:
        "244 Đường Pasteur, Phường Võ Thị Sáu, Quận 3, TP Hồ Chí Minh",
      isTop: true,
    },

    {
      companyHref:
        "https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-greenfeed-viet-nam.35A56979.html",
      companyTitle: "Công Ty Cổ Phần GreenFeed Việt Nam",
      imgSrc:
        "https://images.careerbuilder.vn/employers/32889/67x67/142444output-onlinepngtools.png",
      jobTitle: "Trợ Lý Sản Xuất",
      jobHref:
        "https://careerbuilder.vn/vi/tim-viec-lam/tro-ly-san-xuat.35BCD451.html",
      jobSalary: "Cạnh tranh",
      jobLocation: "Đồng Nai",
      isTop: true,
    },

    {
      companyHref:
        "https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-greenfeed-viet-nam.35A56979.html",
      companyTitle: "Công Ty Cổ Phần GreenFeed Việt Nam",
      imgSrc:
        "https://images.careerbuilder.vn/employers/32889/67x67/142444output-onlinepngtools.png",
      jobTitle: "Nhân Viên Bảo Trì Điện",
      jobHref:
        "https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-bao-tri-dien.35BCD2DC.html",
      jobSalary: "Cạnh tranh",
      jobLocation: "Đồng Nai",
      isTop: true,
    },

    {
      companyHref:
        "https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-greenfeed-viet-nam.35A56979.html",
      companyTitle: "Công Ty Cổ Phần GreenFeed Việt Nam",
      imgSrc:
        "https://images.careerbuilder.vn/employers/32889/67x67/142444output-onlinepngtools.png",
      jobTitle: "Giám Sát Bảo Trì Cơ Khí",
      jobHref:
        "https://careerbuilder.vn/vi/tim-viec-lam/giam-sat-bao-tri-co-khi.35BCD2D8.html",
      jobSalary: "Cạnh tranh",
      jobLocation: "Đồng Nai",
      isTop: true,
    },

    {
      companyHref:
        "https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-greenfeed-viet-nam.35A56979.html",
      companyTitle: "Công Ty Cổ Phần GreenFeed Việt Nam",
      imgSrc:
        "https://images.careerbuilder.vn/employers/32889/67x67/142444output-onlinepngtools.png",
      jobTitle: "Nhân Viên Nghiên Cứu Và Phát Triển Sản Phẩm",
      jobHref:
        "https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-nghien-cuu-va-phat-trien-san-pham.35BCD2D6.html",
      jobSalary: "Cạnh tranh",
      jobLocation: "Đồng Nai",
      isTop: true,
    },

    {
      companyHref:
        "https://careerbuilder.vn/vi/nha-tuyen-dung/tong-cong-ty-co-phan-cong-trinh-viettel.35A842F7.html",
      companyTitle: "TỔNG CÔNG TY CỔ PHẦN CÔNG TRÌNH VIETTEL",
      imgSrc:
        "https://images.careerbuilder.vn/employer_folders/lot9/219639/67x67/85835202104_logoquychuan.png",
      jobTitle: "Kỹ sư Dự toán",
      jobHref:
        "https://careerbuilder.vn/vi/tim-viec-lam/ky-su-du-toan.35BBDB74.html",
      jobSalary: "15 Tr - 20 Tr VND",
      jobLocation: "Hà Nội",
      isTop: true,
    },

    {
      companyHref:
        "https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dau-tu-chau-a-thai-binh-duong.35A6CC93.html",
      companyTitle: "CÔNG TY CỔ PHẦN ĐẦU TƯ CHÂU Á THÁI BÌNH DƯƠNG",
      imgSrc:
        "https://images.careerbuilder.vn/employer_folders/lot5/123795/67x67/1605081425288031_logo_apeci.png",
      jobTitle: "Trưởng phòng marketing sáng tạo [Upto 3,500$]",
      jobHref:
        "https://careerbuilder.vn/vi/tim-viec-lam/truong-phong-marketing-sang-tao-upto-3-500.35BBEF12.html",
      jobSalary: "3,000 - 3,500 USD",
      jobLocation: "Hà Nội",
      isTop: true,
    },

    {
      companyHref:
        "https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-tap-doan-htm.35A95CA1.html",
      companyTitle: "CÔNG TY CỔ PHẦN TẬP ĐOÀN HTM",
      imgSrc:
        "https://images.careerbuilder.vn/employer_folders/lot5/291745/67x67/152640htm-logo-kt240x160px-01-01.png",
      jobTitle: "TRỢ LÝ BAN GIÁM ĐỐC",
      jobHref:
        "https://careerbuilder.vn/vi/tim-viec-lam/tro-ly-ban-giam-doc.35BCD0E5.html",
      jobSalary: "Cạnh tranh",
      jobLocation: "76A Út Tịch, Phường 4, Quận Tân Bình",
      isTop: true,
    },
  ]
};

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function SectionTab() {
  const [tab, setTab] = useState("tab-1");

  return (
    <div className="tabs">
      <ul className="tabs-toggle">
        <li className={tab === "tab-1" && "active"}>
          <a
            tabIndex={0}
            role="button"
            className="pointer"
            alt="#tab-1"
            onClick={() => setTab("tab-1")}
          >
            Việc Làm Nổi Bật
          </a>
        </li>
        <li className={tab === "tab-2" && "active"}>
          <a
            tabIndex={0}
            role="button"
            className="pointer"
            alt="#tab-2"
            onClick={() => setTab("tab-2")}
          >
            Việc Làm VIP ($1000+)
          </a>
        </li>
        <li className={tab === "tab-3" && "active"}>
          <a
            tabIndex={0}
            role="button"
            className="pointer"
            alt="#tab-3"
            onClick={() => setTab("tab-3")}
          >
            Việc Làm Từ Top Headhunter
          </a>
        </li>
      </ul>
      {tab === "tab-1" && <TabItem tapID={tab} tabClass={"hot-jobs-slide"}>{DATA_JOB.hot_jobs}</TabItem>}
      {tab === "tab-2" && <TabItem tapID={tab} tabClass={"vip-jobs-slide"}>{shuffle(DATA_JOB.hot_jobs)}</TabItem>}
      {tab === "tab-3" && <TabItem tapID={tab} tabClass={"topheadhunt-jobs-slide"}>{shuffle(DATA_JOB.hot_jobs)}</TabItem>}
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
  );
}

export default SectionTab;
