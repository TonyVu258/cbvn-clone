import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header>
      <div className="container-fluid">
        <div className="main-wrap">
          <div className="left-wrap">
            <div className="button-hambuger">
              <span className="mdi mdi-menu" />
            </div>
            <div className="logo">
              <Link
                href="https://careerbuilder.vn/vi/"
                title="Tuyển dụng & Tìm kiếm việc làm nhanh"
              >
                <img
                  src="https://static.careerbuilder.vn/themes/careerbuilder/img/logo.png"
                  alt="Tuyển dụng & Tìm kiếm việc làm nhanh"
                />
              </Link>
            </div>
            <div className="main-menu">
              <ul className="menu">
                <li className="dropdown">
                  <a tabIndex={0} role="button" title="Tìm Việc Làm">
                    Tìm Việc Làm
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <Link
                          href="https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-vi.html"
                          title="Việc làm mới nhất"
                        >
                          Việc làm mới nhất
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://careerbuilder.vn/tim-viec-lam.html"
                          title="Ngành nghề / Địa điểm"
                        >
                          Ngành nghề / Địa điểm
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://careerbuilder.vn/viec-lam/ban-hang-kinh-doanh-c31-vi.html"
                          title="Bán hàng / Kinh doanh"
                        >
                          Bán hàng / Kinh doanh
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://careerbuilder.vn/viec-lam/hanh-chinh-thu-ky-c3-vi.html"
                          title="Hành chính / Thư ký"
                        >
                          Hành chính / Thư ký
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://careerbuilder.vn/viec-lam/ke-toan-kiem-toan-c2-vi.html"
                          title="Kế toán / Kiểm toán"
                        >
                          Kế toán / Kiểm toán
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://careerbuilder.vn/viec-lam/nhan-su-c22-vi.html"
                          title="Nhân sự"
                        >
                          Nhân sự
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://careerbuilder.vn/viec-lam/tiep-thi-marketing-c4-vi.html"
                          title="Tiếp thị / Marketing"
                        >
                          Tiếp thị / Marketing
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  {" "}
                  <Link
                    href="https://careerbuilder.vn/cv-hay/"
                    target="_blank"
                    title="CV Hay"
                  >
                    CV Hay
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="https://vietnamsalary.careerbuilder.vn/"
                    target="_blank"
                    title="VietnamSalary"
                  >
                    VietnamSalary
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="https://careerbuilder.vn/careermap"
                    target="_blank"
                    title="CareerMap"
                  >
                    CareerMap
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="https://careerbuilder.vn/vi/talentcommunity"
                    title="Cẩm Nang"
                  >
                    Cẩm Nang
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="https://careerstart.vn/" title="CareerStart">
                    CareerStart
                  </Link>
                </li>
                <li className="dropdown">
                  <a tabIndex={0} role="button" title="Tiện Ích">
                    Tiện Ích{" "}
                    <span className="new">
                      <font color="ff0000">(Mới)</font>
                    </span>
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        {" "}
                        <Link
                          href="https://careerbuilder.vn/tinh-luong-gross-net"
                          title="Tính Lương"
                        >
                          Tính Lương
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          href="https://careerbuilder.vn/vi/test-disc.html"
                          title="Test DISC"
                        >
                          Test DISC
                          <span className="new" style={{ top: 5 }}>
                            <font color="ff0000">(Mới)</font>
                          </span>
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          href="https://vietnamsalary.careerbuilder.vn/tinh-lai-kep.html"
                          title="Công cụ tính Lãi Kép"
                        >
                          Công cụ tính Lãi Kép
                          <span className="new" style={{ top: 5 }}>
                            <font color="ff0000">(Mới)</font>
                          </span>
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          href="https://vietnamsalary.careerbuilder.vn/lap-ke-hoach-tiet-kiem.html"
                          title="Công cụ tính Tiết Kiệm"
                        >
                          Công cụ tính Tiết Kiệm
                          <span className="new" style={{ top: 5 }}>
                            <font color="ff0000">(Mới)</font>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-wrap">
            <div className="main-noti dropdown">
              <Link
                href="https://careerbuilder.vn/thong-bao-viec-lam"
                title="Thông Báo Việc Làm"
              >
                <span className="mdi mdi-bell" />
              </Link>
              <div className="dropdown-menu">
                <div className="noti">
                  <p>Chào mừng bạn đến CareerBuilder.vn</p>
                  <p>
                    Tạo thông báo việc làm để xem việc làm phù hợp với bạn, nhà
                    tuyển dụng đã xem hồ sơ của bạn và cập nhật nhiều hơn nữa
                    ...
                    <br />
                    <br />
                  </p>
                  <Link
                    className="email"
                    href="https://careerbuilder.vn/thong-bao-viec-lam"
                    title="Tạo Ngay"
                  >
                    Tạo Ngay
                  </Link>
                </div>
              </div>
            </div>
            <div className="main-login dropdown">
              <div className="title-login">
                <a tabIndex={0} role="button" title="Đăng nhập">
                  <span className="mdi mdi-account-circle" />
                  Đăng nhập
                </a>
              </div>
              <div className="dropdown-menu">
                <div className="login-wrapper">
                  <form
                    name="header_login"
                    id="header_login"
                    method="post"
                    action="https://careerbuilder.vn/vi/jobseekers/login"
                    autoComplete="off"
                  >
                    <div className="row">
                      <div className="form-group col-12">
                        <input
                          type="text"
                          name="username"
                          placeholder="Email hoặc Tên đăng nhập"
                          autoComplete="off"
                        />
                      </div>
                      <div className="form-group col-8 toggle-password">
                        <input
                          type="password"
                          name="password"
                          placeholder="Mật khẩu"
                          autoComplete="off"
                        />
                        <div className="showhide-password eyess" />
                      </div>
                      <div className="form-group col-4">
                        <input
                          type="hidden"
                          name="csrf_token_login"
                          defaultValue="de6011a0e3dfef2d126b6d16a75c08423a1802c724cb726d04176c028b4e8e87"
                        />
                        <button type="submit">Đăng nhập</button>
                      </div>
                    </div>
                    <Link
                      className="link-register"
                      href="https://careerbuilder.vn/vi/jobseekers/register"
                      title="Đăng ký"
                    >
                      Đăng ký
                    </Link>
                    <Link
                      className="forget-password"
                      href="https://careerbuilder.vn/vi/jobseekers/forgotpassword"
                      title="Quên mật khẩu?"
                    >
                      Quên mật khẩu?
                    </Link>
                  </form>
                </div>
              </div>
            </div>
            <div className="main-register">
              <Link
                href="https://careerbuilder.vn/vi/jobseekers/register"
                title="Đăng ký"
              >
                Đăng ký
              </Link>
            </div>
            <div className="main-language dropdown">
              <div className="dropdown-toggle">
                <p>
                  VI
                  <em className="mdi mdi-chevron-down" />
                </p>
              </div>
              <div className="dropdown-menu">
                <div className="item active">
                  <a
                    tabIndex={0}
                    role="button"
                    className="dropdown-item"
                    title="Change language"
                  >
                    VI
                  </a>
                </div>
                <div className="item">
                  <Link
                    className="dropdown-item"
                    href="https://careerbuilder.vn/en"
                    title="Change language"
                  >
                    EN
                  </Link>
                </div>
              </div>
            </div>
            <div className="main-employer dropdown">
              <Link
                href="https://careerbuilder.vn/vi/employers"
                title="Đăng tuyển, Tìm ứng viên"
              >
                <div className="dropdown-toggle">
                  <h4>
                    Dành cho nhà tuyển dụng
                    <em className="mdi mdi-chevron-down" />
                  </h4>
                  <p>Đăng tuyển, Tìm ứng viên</p>
                </div>
              </Link>
              <div className="dropdown-menu">
                <ul>
                  <li>
                    <Link
                      href="https://careerbuilder.vn/vi/employers/login"
                      title="Đăng nhập"
                    >
                      Đăng nhập
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://careerbuilder.vn/vi/employers/postjobs"
                      title="Đăng Tuyển Dụng"
                    >
                      Đăng Tuyển Dụng
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://careerbuilder.vn/vi/resume-search.html"
                      title="Tìm Ứng Viên"
                    >
                      Tìm Ứng Viên
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://careerbuilder.vn/vi/employers/products-and-services"
                      title="Sản phẩm và Dịch vụ"
                    >
                      Sản phẩm và Dịch vụ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header