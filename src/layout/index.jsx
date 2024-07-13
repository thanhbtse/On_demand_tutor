import React, { Children } from "react";
import {
  Flex,
  Layout,
  Input,
  theme,
  Row,
  Col,
  Button,
  Divider,
  Avatar,
} from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import facebooklogo from "../assets/logo/icons8-facebook-48.png";
import hatlogo from "../assets/images/gia-su-online-logo-png-v2-60.png";
import animateLogo from "../assets/logo/icons8-youtube.gif";
import { SearchOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const facebookLink = "https://www.facebook.com/tanthanh.bui.94617/";
const youtubeLink = "https://www.youtube.com/watch?v=xvFZjo5PgG0";
const App = ({ children }) => {
  // const {
  //   token: {borderRadiusLG : 1, },
  // } = theme.useToken();

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
            <img width={60} height={60} src={hatlogo} />
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
        <div className="flex">
          <div>
            <Button className="mr-20 bg-[#ff4778] text-white font-bold text-[1rem] px-5  h-9 flex items-center justify-center rounded-sm	border-transparent my-4">
              <Link to="/tim-gia-su-online">Tìm Gia Sư</Link>
            </Button>
          </div>
          <Link to="/ho-so">
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7rHb3Lmhnhau0CLSdDWBu3f4RKAiXHEV7hQ&s"
              size="large"
            />
          </Link>
        </div>
      </Header>
      <Header className="bg-[#eee]">
        <div className="flex justify-center items-center h-full space-x-2">
          <Input
            placeholder="Nhập từ khóa để tìm các lớp dạy kèm"
            onSearch={(value) => console.log(value)}
            className="w-full md:w-[500px] h-10 rounded-none"
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
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <div style={{ flex: "1 0 auto" }}>
          <Content
            style={{
              padding: "0 0",
              borderRadius: "0px",
            }}
          >
            <div
              style={{
                minHeight: 380,
                borderRadius: 1,
              }}
            >
              {children}
            </div>
          </Content>
        </div>
        <Footer className="bottom-20 bg-[#eee]">
          <div className="ml-3 md:ml-24 mr-2 md:mr-auto">
            <Row gutter={[48, 16]}>
              <Col span={7}>
                <div className="flex flex-col space-y-2 md:space-y-6 lg:space-y-4 xl:space-y-6 2xl:space-y-8 font-mono">
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
              <Col span={6}>
                <div className="flex flex-col space-y-2 md:space-y-6 lg:space-y-4 xl:space-y-6 2xl:space-y-8 font-mono">
                  <span className="font-bold text-[18px]">LIÊN KẾT</span>
                  <div className="flex flex-row divide-x-2 h-5 divide-gray-300 space-x-2 text-[#ff4778]">
                    <Link className="font-normal text-[14px]" to="/gioi-thieu">
                      Giới Thiệu
                    </Link>
                    <Link
                      className="font-normal pl-2 text-[14px]"
                      to="/lien-he"
                    >
                      Liên Hệ
                    </Link>
                  </div>
                  <div className="flex flex-row divide-x-2 h-5 divide-solid divide-gray-300 space-x-2 text-[#ff4778]">
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
                  <Link className="text-[#ff4778] text-[14px]" to="/tai-khoan">
                    Tài Khoản
                  </Link>
                </div>
              </Col>
              <Col span={6}>
                <div className="flex flex-col space-y-2 md:space-y-6 font-mono">
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
              <Col span={4}>
                <div className="flex flex-col space-y-1 md:space-y-4 font-mono">
                  <span className="font-bold text-[18px] ">KẾT NỐI</span>
                  <Flex wrap gap="small">
                    <a
                      href={facebookLink}
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
                      href={youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        shape="circle"
                        style={{
                          backgroundImage: `url(${animateLogo})`,
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
          Gia sư online © {new Date().getFullYear()} Công ty TNHH nhóm 5 thành
          viên
        </Footer>
        
      </div>
    </Layout>
  );
};
export default App;
