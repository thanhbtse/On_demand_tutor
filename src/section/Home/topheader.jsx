import React from "react";
import { Button, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import image from "../../assets/images/homepage-banner-giasuonlinevn-1280-1024x672.jpg";
import "../../App.css";
import { Link } from "react-router-dom";
function topHeader() {
  const { Header, Footer } = Layout;
  return (
    <div>
      <Layout>
        <Header
          className="header"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5px",
              color: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              Gia Sư Online – Dạy Kèm Trực Tuyến
            </p>
            <p style={{ fontSize: "1rem", fontWeight: "inherit" }}>
              Gia sư online – Cổng thông tin gia sư online và dạy kèm trực tuyến
              cho mọi nhu cầu học tập và giảng dạy.
            </p>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: "inherit",
              }}
            >
              Dạy mọi lúc, học mọi nơi với gia sư online. Bạn có thể bắt đầu
              ngay!
            </p>
            <div className="flex flex-row ml-14 space-x-24">
              <Button className="bg-pink-600 text-white py-2 px-4 border-none rounded cursor-pointer flex items-center justify-center font-bold w-40 h-10 md:w-32 lg:w-48">
                <Link
                  to="/tim-gia-su-online"
                  className="text-white no-underline"
                >
                  Tìm Gia Sư Theo Lớp
                </Link>
              </Button>
              <Button className="bg-pink-600 text-white py-2 px-4 border-none rounded cursor-pointer flex items-center justify-center font-bold w-40 h-10 md:w-32 lg:w-48">
                <Link to="/tai-khoan" className="text-white no-underline">
                  Đăng ký làm gia sư
                </Link>
              </Button>
            </div>
          </div>
        </Header>
      </Layout>
    </div>
  );
}

export default topHeader;
