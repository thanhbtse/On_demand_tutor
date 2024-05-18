import React, { Children } from "react";
import { Flex, Layout, Input, theme, Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import facebooklogo from "../assets/logo/icons8-facebook-48.png";
import youtulogo from "../assets/logo/icons8-youtube-64.png";
import hatlogo from "../assets/images/gia-su-online-logo-png-v2-60.png";
import { SearchOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const App = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  App.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#36174d",
          height: "80px",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "100px" }}
        >
          <div>
            <img
              width={60}
              height={60}
              src={hatlogo}
            />
          </div>
          <div className="flex flex-col mt-1 ml-2 responsive-hide">
            <span className="text-white leading-tight flex flex-col">
              <Link to="/" className="font-bold text-xl ">
                GIA SƯ ONLINE
              </Link>
              <div className="text-[10px]">Dạy Mọi Lúc - Học Mọi Nơi</div>
            </span>
          </div>
        </div>
        <Button className="mr-36 bg-[#ff4778] text-white font-bold text-[1rem] px-5 py-3 h-9 flex items-center justify-center rounded-sm	border-transparent">
          <Link to="#">Tìm Gia Sư</Link>
        </Button>
      </Header>
      <Header className="bg-[#eee]">
        <div className="flex justify-center items-center h-full space-x-2">
          <Input
            placeholder="Nhập từ khóa để tìm các lớp dạy kèm"
            onSearch={(value) => console.log(value)}
            className="w-[500px] h-10 rounded-none"
            enterButton
          />
          <div className="space-x-2">
            <Button
              className="h-9  rounded-none flex justify-center items-center "
              size="large"
            >
              <SearchOutlined />
            </Button>
          </div>
        </div>
      </Header>
      <Content
        style={{
          padding: "0 200px",
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer>
        <div className="ml-12 mr-10">
          <Row gutter={[48, 16]}>
            <Col m>
              <div className="flex flex-col space-y-6 font-mono">
                <span className="font-bold text-[18px]">GIASUONLINE.VN</span>
                <span className="font-normal text-[14px]">
                  Địa chỉ: Lưu Hữu Phước, Đông Hoà, Dĩ An, Bình Dương
                </span>
                <span className="font-normal text-[14px]">
                  Điện thoại: 0989897338
                </span>
                <span className="font-normal text-[14px]">
                  Email: contact@giasuonline.vn
                </span>
              </div>
            </Col>
            <Col className="ml-[200px]">
              <div className="flex flex-col space-y-6 font-mono ">
                <span className="font-bold text-[18px]">LIÊN KẾT</span>
                <div className="flex flex-row divide-x-2 divide-solid space-x-2 text-[#ff4778]">
                  <Link className="font-normal text-[14px]" to="/gioi-thieu">
                    Giới Thiệu
                  </Link>
                  <Link className="font-normal pl-2 text-[14px]" to="/lien-he">
                    Liên Hệ
                  </Link>
                </div>
                <div className="flex flex-row divide-x-2 divide-solid space-x-2 text-[#ff4778]">
                  <Link className="font-normal text-[14px]" to="/tai-lieu">
                    Tài Liệu
                  </Link>
                  <Link
                    className="font-normal pl-2 text-[14px]"
                    to="/kien-thuc"
                  >
                    Kiến Thức
                  </Link>
                  <Link
                    className="font-normal pl-2 text-[14px]"
                    to="/kinh-nghiem"
                  >
                    Kinh Nghiệm
                  </Link>
                </div>
                <Link className="text-[#ff4778] text-[14px]" to="/login">
                  Tài Khoản
                </Link>
              </div>
            </Col>
            <Col className="ml-[150px]">
              <div className="flex flex-col space-y-6">
                <span className="font-bold text-[18px]">CHÍNH SÁCH</span>
                <Link
                  className="text-[#ff4778] text-[14px]"
                  to="/chinh-sach-nguoi-dung"
                >
                  Chính Sách Người Dùng
                </Link>
                <Link
                  className="text-[#ff4778] text-[14px]"
                  to="/dieu-khoan-su-dung"
                >
                  Điều Khoản Sử Dụng
                </Link>
                <Link
                  className="text-[#ff4778] text-[14px]"
                  to="/chinh-sach-thanh-toan"
                >
                  Chính Sách Thanh Toán
                </Link>
              </div>
            </Col>
            <Col className="ml-[250px]">
              <div className="flex flex-col space-y-4">
                <span className="font-bold text-[18px]">KẾT NỐI</span>
                <Flex wrap gap="small">
                  <a
                    href="https://www.facebook.com/tanthanh.bui.94617/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      shape="circle"
                      style={{
                        backgroundImage: `url(${facebooklogo})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  </a>
                </Flex>
                <Flex wrap gap="small">
                  <a
                    href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      shape="circle"
                      style={{
                        backgroundImage: `url(${youtulogo})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  </a>
                </Flex>
              </div>
            </Col>
          </Row>
        </div>
      </Footer>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#36174d",
          color: "white",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          width: "100%",
        }}
      >
        Gia sư online ©{new Date().getFullYear()} Công ty TNHH Nhóm 4 thành viên
      </Footer>
    </Layout>
  );
};
export default App;
