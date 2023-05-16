import Head from "next/head";
import "../styles/globals.css";
import "../styles/common.css"
import "../styles/main.css";

export const metadata = {
  title: "Tuyển dụng & Tìm kiếm việc làm nhanh | CareerBuilder.vn",
  description: `CareerBuilder Mạng Việc Làm & Tuyển Dụng hàng đầu thế giới với hơn 450.000 cơ hội "Việc Tốt - Lương Cao", được tin dùng bởi hơn 20.000 doanh nghiệp hàng đầu tại Việt Nam!`,
  keywords: `Việc làm, kiếm việc, tìm việc làm, tuyển dụng, ứng viên,  mạng tuyển dụng, việc làm online, HR, nghành nghề hot, công ty hàng đầu Việt Nam, việc làm bán thời gian`
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <Head>
        <meta name="theme-color" content="#1e5c8b" />
        <link
          href="https://careerbuilder.vn/"
          hreflang="vi-vn"
          rel="alternate"
        />
        <link
          rel="apple-touch-icon"
          href="https://careerbuilder.vn/favicon_careerbuilder_v2.ico?t=1"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/cb_57x57.png?t=1"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/cb_76x76.png?t=1"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/cb_120x120.png?t=1"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/cb_152x152.png?t=1"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/cb_167x167.png?t=1"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/cb_180x180.png?t=1"
        />
        <link href="https://careerbuilder.vn/manifest.json" rel="manifest" />
        <link
          rel="shortcut icon"
          href="https://careerbuilder.vn/favicon_careerbuilder_v2.ico?t=1"
        />
        <link href="https://careerbuilder.vn" rel="canonical" />
      </Head>
      <body className="index-page">{children}</body>
    </html>
  );
}
