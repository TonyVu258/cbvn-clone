import Link from "next/link";
import React from "react";
import Section from "./Section/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper";
import BannerItem from "./BannerItem";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const BANNER_DATA = {
    first: {
        href: 'https://careerbuilder.vn/vi/jobseekers/ajax/counterbannerclick?url=aHR0cHM6Ly9jYXJlZXJidWlsZGVyLnZuL3ZpL3RhbGVudGNvbW11bml0eS9jYXJlZXJidWlsZGVyLWNvbmctYm8tdG9wLTEwMC1uaGEtdHV5ZW4tZHVuZy15ZXUtdGhpY2gtbmFtLTIwMjIuMzVBNTIyQjguaHRtbA==&id=296',
        target: '_blank',
        imgSrc: 'https://images.careerbuilder.vn/background/eoc_2022_result_plb_1900x570_2023_03_29_1680091879.jpg',
    },
    second: {
        href: 'https://careerbuilder.vn/vi/jobseekers/ajax/counterbannerclick?url=aHR0cHM6Ly9jYXJlZXJzdGFydC52bi8=&id=280',
        target: '_blank',
        imgSrc: 'https://images.careerbuilder.vn/background/careerstart_plb_desktop_1900x570_2022_08_15_1660563408.jpg',
    },
    third: {
        href: 'https://careerbuilder.vn/vi/jobseekers/ajax/counterbannerclick?url=aHR0cHM6Ly9jYXJlZXJidWlsZGVyLnZuL3ZpL3RhbGVudGNvbW11bml0eS9uYW0tbW9pLWxhbS1tb2ktdGh1b25nLWhpZXUtY2Etbmhhbi4zNUE1MURCMS5odG1sP3V0bV9zb3VyY2U9Q0JiYW5uZXImYW1wO3V0bV9tZWRpdW09U2hhcmVQcm9maWxlJmFtcDt1dG1fY2FtcGFpZ249U2hhcmVQcm9maWxl&id=256',
        target: '_blank',
        imgSrc: 'https://images.careerbuilder.vn/background/cb-share-cv-profile-banner_plb_desktop_1900x570_2022_01_25_1643100421.jpg',
    },
}

function Banner() {
  return (
    <main>
      <div className="cb-main-search">
        <Section css={"cb-banner-home"}>
          <div className="banner-pc">
            <div className="swiper-container">
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination, Autoplay, EffectFade]}
                loop={true}
                effect={"fade"}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                className="swiper-wrapper"
                id="pc-swiper-wrapper"
              >
                <SwiperSlide>
                  <BannerItem>{BANNER_DATA.first}</BannerItem>
                </SwiperSlide>
                <SwiperSlide>
                  <BannerItem>{BANNER_DATA.second}</BannerItem>
                </SwiperSlide>
                <SwiperSlide>
                  <BannerItem>{BANNER_DATA.third}</BannerItem>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="main-page">
              <div className="swiper-pagination" />
            </div>
          </div>
        </Section>
        <Section css={"cb-box-find"}>
          <div className="container">
            <div className="main-box">
              <div className="box-body">
                <div className="title">
                  <h1>
                    Đón lấy thành công với{" "}
                    <span> 19,615 cơ hội nghề nghiệp </span>
                  </h1>
                </div>
                <form>
                  <div className="main-form">
                    <div className="row">
                      <div className="form-group col-12 form-keyword">
                        <label>
                          <span className="mdi mdi-magnify" />
                        </label>
                        <input
                          type="search"
                          className="prompt keyword"
                          autoFocus={true}
                          name="keyword"
                          id="keyword"
                          placeholder="Chức danh, Kỹ năng, Tên công ty"
                        />
                        <div className="cleartext">
                          <em className="mdi mdi-close-circle" />
                        </div>
                      </div>
                    </div>
                    {/* <div className="advanced-search">
                      <div className="row">
                        <div className="form-group col-sm-6">
                          <label>
                            <span className="mdi mdi-map-marker" />
                          </label>
                          <select
                            id="location"
                            name="location"
                            className="chosen-select chosen-select-max-three"
                            data-placeholder="Tất cả địa điểm"
                            multiple=""
                          >
                            <option value="">Chọn địa điểm</option>
                            <option value="ha-noi_4">Hà Nội</option>
                            <option value="ho-chi-minh_8">Hồ Chí Minh</option>
                            <option value="an-giang_76">An Giang</option>
                            <option value="ba-ria-vung-tau_64">
                              Bà Rịa - Vũng Tàu
                            </option>
                            <option value="bac-lieu_781">Bạc Liêu</option>
                            <option value="bac-can_281">Bắc Cạn</option>
                            <option value="bac-giang_240">Bắc Giang</option>
                            <option value="bac-ninh_241">Bắc Ninh</option>
                            <option value="ben-tre_75">Bến Tre</option>
                            <option value="binh-duong_650">Bình Dương</option>
                            <option value="binh-dinh_56">Bình Định</option>
                            <option value="binh-phuoc_651">Bình Phước</option>
                            <option value="binh-thuan_62">Bình Thuận</option>
                            <option value="ca-mau_78">Cà Mau</option>
                            <option value="cao-bang_26">Cao Bằng</option>
                            <option value="can-tho_71">Cần Thơ</option>
                            <option value="dak-lak_50">Dak Lak</option>
                            <option value="dak-nong_1042">Dak Nông</option>
                            <option value="da-nang_511">Đà Nẵng</option>
                            <option value="dien-bien_900">Điện Biên</option>
                            <option value="dong-bang-song-cuu-long_1064">
                              Đồng Bằng Sông Cửu Long
                            </option>
                            <option value="dong-nai_61">Đồng Nai</option>
                            <option value="dong-thap_67">Đồng Tháp</option>
                            <option value="gia-lai_59">Gia Lai</option>
                            <option value="ha-giang_19">Hà Giang</option>
                            <option value="ha-nam_351">Hà Nam</option>
                            <option value="ha-tinh_39">Hà Tĩnh</option>
                            <option value="hai-duong_320">Hải Dương</option>
                            <option value="hai-phong_31">Hải Phòng</option>
                            <option value="hau-giang_780">Hậu Giang</option>
                            <option value="hoa-binh_18">Hòa Bình</option>
                            <option value="hung-yen_321">Hưng Yên</option>
                            <option value="khac_901">Khác</option>
                            <option value="khanh-hoa_58">Khánh Hòa</option>
                            <option value="kien-giang_77">Kiên Giang</option>
                            <option value="kon-tum_60">Kon Tum</option>
                            <option value="kv-bac-trung-bo_1071">
                              KV Bắc Trung Bộ
                            </option>
                            <option value="kv-dong-nam-bo_1069">
                              KV Đông Nam Bộ
                            </option>
                            <option value="kv-nam-trung-bo_1070">
                              KV Nam Trung Bộ
                            </option>
                            <option value="kv-tay-nguyen_1072">
                              KV Tây Nguyên
                            </option>
                            <option value="lai-chau_23">Lai Châu</option>
                            <option value="lang-son_25">Lạng Sơn</option>
                            <option value="lao-cai_20">Lào Cai</option>
                            <option value="lam-dong_63">Lâm Đồng</option>
                            <option value="long-an_72">Long An</option>
                            <option value="nam-dinh_350">Nam Định</option>
                            <option value="nghe-an_38">Nghệ An</option>
                            <option value="ninh-binh_30">Ninh Bình</option>
                            <option value="ninh-thuan_68">Ninh Thuận</option>
                            <option value="phu-tho_210">Phú Thọ</option>
                            <option value="phu-yen_57">Phú Yên</option>
                            <option value="quang-binh_52">Quảng Bình</option>
                            <option value="quang-nam_510">Quảng Nam</option>
                            <option value="quang-ngai_55">Quảng Ngãi</option>
                            <option value="quang-ninh_33">Quảng Ninh</option>
                            <option value="quang-tri_53">Quảng Trị</option>
                            <option value="soc-trang_79">Sóc Trăng</option>
                            <option value="son-la_22">Sơn La</option>
                            <option value="tay-ninh_66">Tây Ninh</option>
                            <option value="thai-binh_36">Thái Bình</option>
                            <option value="thai-nguyen_280">Thái Nguyên</option>
                            <option value="thanh-hoa_37">Thanh Hóa</option>
                            <option value="thua-thien-hue_54">
                              Thừa Thiên- Huế
                            </option>
                            <option value="tien-giang_73">Tiền Giang</option>
                            <option value="toan-quoc_1065">Toàn quốc</option>
                            <option value="tra-vinh_74">Trà Vinh</option>
                            <option value="tuyen-quang_27">Tuyên Quang</option>
                            <option value="vinh-long_70">Vĩnh Long</option>
                            <option value="vinh-phuc_211">Vĩnh Phúc</option>
                            <option value="yen-bai_29">Yên Bái</option>
                            <option value="banteay-meanchey_1098">
                              Banteay Meanchey
                            </option>
                            <option value="battambang_1096">Battambang</option>
                            <option value="kampong-chhnang_1092">
                              Kampong Chhnang
                            </option>
                            <option value="kampong-speu_1090">
                              Kampong Speu
                            </option>
                            <option value="kampot_1085">Kampot</option>
                            <option value="kandal_1088">Kandal</option>
                            <option value="kep_1084">Kep</option>
                            <option value="koh-kong_1091">Koh Kong</option>
                            <option value="kratie_1093">Kratie</option>
                            <option value="otdar-meanchey_1104">
                              Otdar Meanchey
                            </option>
                            <option value="pailin_1103">Pailin</option>
                            <option value="phnompenh_1041">Phnompenh</option>
                            <option value="preah-vihear_1099">
                              Preah Vihear
                            </option>
                            <option value="prey-veng_1089">Prey Veng</option>
                            <option value="siem-reap_1097">Siem Reap</option>
                            <option value="stung-treng_1100">
                              Stung Treng
                            </option>
                            <option value="svay-rieng_1087">Svay Rieng</option>
                            <option value="tbong-khmum_1082">
                              Tbong Khmum
                            </option>
                            <option value="chicago_1034">Chicago</option>
                            <option value="florida_1077">Florida</option>
                            <option value="miami_1033">Miami</option>
                            <option value="san-diego_1039">San Diego</option>
                            <option value="hong-kong_1079">Hồng Kông</option>
                            <option value="khac_1318">Khác</option>
                            <option value="attapeu_1106">Attapeu</option>
                            <option value="bokeo_1107">Bokeo</option>
                            <option value="champasak_1109">Champasak</option>
                            <option value="houaphanh_1110">Houaphanh</option>
                            <option value="khammouane_1111">Khammouane</option>
                            <option value="luang-prabang_1113">
                              Luang Prabang
                            </option>
                            <option value="phongsaly_1115">Phongsaly</option>
                            <option value="vientiane_1059">Vientiane</option>
                            <option value="xiangkhouang_1120">
                              Xiangkhouang
                            </option>
                            <option value="kuala-lumpur_1019">
                              Kuala Lumpur
                            </option>
                            <option value="malaysia_1078">Malaysia</option>
                            <option value="yangon_1320">Yangon</option>
                            <option value="hokkaido_1043">Hokkaido</option>
                            <option value="tokyo_1001">Tokyo</option>
                            <option value="yokohama_1002">Yokohama</option>
                            <option value="qatar_1055">Qatar</option>
                            <option value="quoc-te_1073">Quốc tế</option>
                            <option value="singapore_1040">Singapore</option>
                            <option value="kharkiv_1053">Kharkiv</option>
                          </select>
                        </div>
                        <div className="form-group col-sm-6">
                          <label>
                            <span className="mdi mdi-menu" />
                          </label>
                          <select
                            id="industry"
                            name="industry"
                            className="chosen-select chosen-select-max-three"
                            data-placeholder="Tất cả ngành nghề"
                            multiple=""
                          >
                            <option value="">Chọn ngành nghề</option>
                            <option value="an-ninh-bao-ve_51">
                              An Ninh / Bảo Vệ
                            </option>
                            <option value="an-toan-lao-dong_58">
                              An toàn lao động
                            </option>
                            <option value="ban-hang-kinh-doanh_31">
                              Bán hàng / Kinh doanh
                            </option>
                            <option value="ban-le-ban-si_30">
                              Bán lẻ / Bán sỉ
                            </option>
                            <option value="bao-hiem_23">Bảo hiểm</option>
                            <option value="bat-dong-san_28">
                              Bất động sản
                            </option>
                            <option value="bien-phien-dich_38">
                              Biên phiên dịch
                            </option>
                            <option value="buu-chinh-vien-thong_32">
                              Bưu chính viễn thông
                            </option>
                            <option value="chan-nuoi-thu-y_52">
                              Chăn nuôi / Thú y
                            </option>
                            <option value="chung-khoan_46">Chứng khoán</option>
                            <option value="cntt-phan-cung-mang_63">
                              CNTT - Phần cứng / Mạng
                            </option>
                            <option value="cntt-phan-mem_1">
                              CNTT - Phần mềm
                            </option>
                            <option value="cong-nghe-sinh-hoc_69">
                              Công nghệ sinh học
                            </option>
                            <option value="cong-nghe-thuc-pham-dinh-duong_70">
                              Công nghệ thực phẩm / Dinh dưỡng
                            </option>
                            <option value="co-khi-o-to-tu-dong-hoa_14">
                              Cơ khí / Ô tô / Tự động hóa
                            </option>
                            <option value="dau-khi_26">Dầu khí</option>
                            <option value="det-may-da-giay-thoi-trang_39">
                              Dệt may / Da giày / Thời trang
                            </option>
                            <option value="dich-vu-khach-hang_12">
                              Dịch vụ khách hàng
                            </option>
                            <option value="du-lich_34">Du lịch</option>
                            <option value="duoc-pham_7">Dược phẩm</option>
                            <option value="dien-dien-tu-dien-lanh_48">
                              Điện / Điện tử / Điện lạnh
                            </option>
                            <option value="do-go_35">Đồ gỗ</option>
                            <option value="giai-tri_15">Giải trí</option>
                            <option value="giao-duc-dao-tao_13">
                              Giáo dục / Đào tạo
                            </option>
                            <option value="hang-gia-dung-cham-soc-ca-nhan_10">
                              Hàng gia dụng / Chăm sóc cá nhân
                            </option>
                            <option value="hang-hai_61">Hàng hải</option>
                            <option value="hang-khong_60">Hàng không</option>
                            <option value="hanh-chinh-thu-ky_3">
                              Hành chính / Thư ký
                            </option>
                            <option value="hoa-hoc_41">Hóa học</option>
                            <option value="in-an-xuat-ban_64">
                              In ấn / Xuất bản
                            </option>
                            <option value="ke-toan-kiem-toan_2">
                              Kế toán / Kiểm toán
                            </option>
                            <option value="khoang-san_65">Khoáng sản</option>
                            <option value="kien-truc_6">Kiến trúc</option>
                            <option value="lao-dong-pho-thong_44">
                              Lao động phổ thông
                            </option>
                            <option value="lam-nghiep_50">Lâm Nghiệp</option>
                            <option value="luat-phap-ly_24">
                              Luật / Pháp lý
                            </option>
                            <option value="moi-truong_16">Môi trường</option>
                            <option value="moi-tot-nghiep-thuc-tap_45">
                              Mới tốt nghiệp / Thực tập
                            </option>
                            <option value="my-thuat-nghe-thuat-thiet-ke_11">
                              Mỹ thuật / Nghệ thuật / Thiết kế
                            </option>
                            <option value="ngan-hang_19">Ngân hàng</option>
                            <option value="nha-hang-khach-san_29">
                              Nhà hàng / Khách sạn
                            </option>
                            <option value="nhan-su_22">Nhân sự</option>
                            <option value="noi-ngoai-that_47">
                              Nội ngoại thất
                            </option>
                            <option value="nong-nghiep_5">Nông nghiệp</option>
                            <option value="phi-chinh-phu-phi-loi-nhuan_20">
                              Phi chính phủ / Phi lợi nhuận
                            </option>
                            <option value="quan-ly-chat-luong-qa-qc_42">
                              Quản lý chất lượng (QA/QC)
                            </option>
                            <option value="quan-ly-dieu-hanh_17">
                              Quản lý điều hành
                            </option>
                            <option value="quang-cao-doi-ngoai-truyen-thong_67">
                              Quảng cáo / Đối ngoại / Truyền Thông
                            </option>
                            <option value="san-xuat-van-hanh-san-xuat_25">
                              Sản xuất / Vận hành sản xuất
                            </option>
                            <option value="tai-chinh-dau-tu_59">
                              Tài chính / Đầu tư
                            </option>
                            <option value="thong-ke_36">Thống kê</option>
                            <option value="thu-mua-vat-tu_43">
                              Thu mua / Vật tư
                            </option>
                            <option value="thuy-loi_53">Thủy lợi</option>
                            <option value="thuy-san-hai-san_49">
                              Thủy sản / Hải sản
                            </option>
                            <option value="thu-vien_57">Thư viện</option>
                            <option value="thuc-pham-do-uong_21">
                              Thực phẩm &amp; Đồ uống
                            </option>
                            <option value="tiep-thi-marketing_4">
                              Tiếp thị / Marketing
                            </option>
                            <option value="tiep-thi-truc-tuyen_37">
                              Tiếp thị trực tuyến
                            </option>
                            <option value="to-chuc-su-kien_68">
                              Tổ chức sự kiện
                            </option>
                            <option value="trac-dia-dia-chat_54">
                              Trắc địa / Địa Chất
                            </option>
                            <option value="truyen-hinh-bao-chi-bien-tap_66">
                              Truyền hình / Báo chí / Biên tập
                            </option>
                            <option value="tu-van_9">Tư vấn</option>
                            <option value="van-chuyen-giao-nhan-kho-van_33">
                              Vận chuyển / Giao nhận / Kho vận
                            </option>
                            <option value="xay-dung_8">Xây dựng</option>
                            <option value="xuat-nhap-khau_18">
                              Xuất nhập khẩu
                            </option>
                            <option value="y-te-cham-soc-suc-khoe_56">
                              Y tế / Chăm sóc sức khỏe
                            </option>
                            <option value="bao-tri-sua-chua_71">
                              Bảo trì / Sửa chữa
                            </option>
                            <option value="nganh-khac_27">Ngành khác</option>
                          </select>
                        </div>
                        <div className="form-group col-sm-6">
                          <label>
                            <span className="mdi mdi-currency-usd" />
                          </label>
                          <select
                            name="salary"
                            id="salary"
                            className="chosen-select chosen-select-max-one"
                            data-placeholder="Chọn Mức Lương"
                            multiple=""
                          >
                            <option value="">Chọn mức lương</option>
                            <option value={3}>Từ 3.000.000 đ</option>
                            <option value={5}>Từ 5.000.000 đ</option>
                            <option value={7}>Từ 7.000.000 đ</option>
                            <option value={10}>Từ 10.000.000 đ</option>
                            <option value={15}>Từ 15.000.000 đ</option>
                            <option value={20}>Từ 20.000.000 đ</option>
                            <option value={30}>Từ 30.000.000 đ</option>
                            <option value={40}>Từ 40.000.000 đ</option>
                            <option value={50}>Từ 50.000.000 đ</option>
                            <option value={60}>Từ 60.000.000 đ</option>
                            <option value={70}>Từ 70.000.000 đ</option>
                          </select>
                        </div>
                        <div className="form-group col-sm-6">
                          <label>
                            <span className="mdi mdi-briefcase" />
                          </label>
                          <select
                            id="level"
                            name="level"
                            className="chosen-select chosen-select-max-one"
                            data-placeholder="Cấp bậc"
                            multiple=""
                          >
                            <option value="">Chọn cấp bậc</option>
                            <option value="sinh-vien-thuc-tap-sinh_1">
                              Sinh viên/ Thực tập sinh
                            </option>
                            <option value="moi-tot-nghiep_2">
                              Mới tốt nghiệp
                            </option>
                            <option value="nhan-vien_3">Nhân viên</option>
                            <option value="truong-nhom-giam-sat_4">
                              Trưởng nhóm / Giám sát
                            </option>
                            <option value="quan-ly_5">Quản lý</option>
                            <option value="quan-ly-cap-cao_11">
                              Quản lý cấp cao
                            </option>
                            <option value="dieu-hanh-cap-cao_12">
                              Điều hành cấp cao
                            </option>
                          </select>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="reset-form">
                    <a tabIndex={0} role="button">
                      <i className="fa fa-rotate-right" /> Reset
                    </a>
                  </div>
                  {/* <div className="toggle-search">
                    <div className="advanced-search-btn">
                      <a tabIndex={0} role="button">
                        <span className="mdi mdi-magnify-plus-outline" />
                        Tìm kiếm nâng cao
                      </a>
                    </div>
                    <div className="expend-less-btn">
                      {" "}
                      <a tabIndex={0} role="button">
                        <span className="mdi mdi-chevron-up" />
                        Thu gọn
                      </a>
                    </div>
                  </div> */}
                  <div className="find-jobs">
                    <button
                      className="btn-gradient"
                    >
                      TÌM VIỆC NGAY
                    </button>
                  </div>
                </form>
              </div>
              <div className="box-footer">
                <div className="content">
                  <p>Đăng hồ sơ nghề nghiệp để dễ dàng ứng tuyển nhanh</p>
                </div>
                <div className="upload-resume">
                  {" "}
                  <button
                    className="btn-gradient"
                  >
                    ĐĂNG NGAY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}

export default Banner;
