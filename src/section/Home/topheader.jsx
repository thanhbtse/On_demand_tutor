import React from "react";
import { Button, Col, Layout, Row } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import image from "../../assets/images/homepage-banner-giasuonlinevn-1280-1024x672.jpg";
import "../../App.css";
import { Link } from "react-router-dom";
import Description from "./AboutHome";
import ListTutor from "./tutorList";

function topHeader() {
  const { Header, Footer, Content } = Layout;
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
            <Row
              gutter={[8, 8]}
              className="flex flex-col justify-center items-center"
            >
              <Col>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "2rem",
                    "@media(max-width: 768px)": {
                      fontSize: "1.5rem",
                    },
                    "@media(max-width: 576px)": {
                      fontSize: "1.2rem",
                    },
                  }}
                >
                  Gia Sư Online – Dạy Kèm Trực Tuyến
                </p>
              </Col>
              <Col>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "inherit",
                    "@media(max-width: 768px)": {
                      fontSize: "0.8rem",
                    },
                    "@media(max-width: 576px)": {
                      fontSize: "0.6rem",
                    },
                  }}
                >
                  Gia sư online – Cổng thông tin gia sư online và dạy kèm trực
                  tuyến cho mọi nhu cầu học tập và giảng dạy.
                </p>
              </Col>
              <Col>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "inherit",
                    "@media(max-width: 1629px)": {
                      fontSize: "2rem",
                    },
                    "@media(max-width: 576px)": {
                      fontSize: "0.6rem",
                    },
                  }}
                >
                  Dạy mọi lúc, học mọi nơi với gia sư online. Bạn có thể bắt đầu
                  ngay!
                </p>
              </Col>
            </Row>
            <Row
              gutter={[48, 8]}
              className="space-x-4 md:space-x-8 lg:space-x-12 xl:space-x-16 2xl:space-x-20 mt-5"
            >
              <Button className="bg-pink-600 text-white py-2 px-4 border-none rounded cursor-pointer flex items-center justify-center font-bold w-40 h-10 md:w-32 lg:w-48 text-xs sm:text-sm">
                <Link
                  to="/tim-gia-su-online"
                  className="text-white no-underline"
                >
                  Tìm Gia Sư Theo Lớp
                </Link>
              </Button>
              <Button className="bg-pink-600 text-white py-2 px-4 border-none rounded cursor-pointer flex items-center justify-center font-bold w-40 h-10 md:w-32 lg:w-48 text-xs sm:text-sm">
                <Link to="/tai-khoan" className="text-white no-underline">
                  Đăng ký làm gia sư
                </Link>
              </Button>
            </Row>
          </div>
        </Header>
        <Content
        >
          <ListTutor />
          <Description />
        </Content>
        <Footer className="Footer">
          <Row className="flex flex-col text-white space-y-10">
            <p className="font-bold text-2xl items-center">
              Hãy Bắt Đầu Với Gia Sư Online Ngay Hôm Nay!
            </p>
            <Row
              gutter={[48, 8]}
              className="space-x-4 md:space-x-8 lg:space-x-12 xl:space-x-16 2xl:space-x-20 mt-5 items-center justify-center"
            >
              <Button className="bg-pink-600 text-white py-2 px-4 border-none rounded cursor-pointer flex items-center justify-center font-bold w-40 h-10 md:w-32 lg:w-48 text-xs sm:text-sm">
                <Link
                  to="/tim-gia-su-online"
                  className="text-white no-underline"
                >
                  Tìm Gia Sư Theo Lớp
                </Link>
              </Button>
              <Button className="bg-pink-600 text-white py-2 px-4 border-none rounded cursor-pointer flex items-center justify-center font-bold w-40 h-10 md:w-32 lg:w-48 text-xs sm:text-sm">
                <Link to="/tai-khoan" className="text-white no-underline">
                  Đăng ký làm gia sư
                </Link>
              </Button>
            </Row>
          </Row>
        </Footer>
      </Layout>
    </div>
  );
}

export default topHeader;
