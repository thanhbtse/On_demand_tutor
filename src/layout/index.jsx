import React, { Children } from "react";
import { Breadcrumb, Layout, Menu, theme, Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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
        <div style={{ display: "flex", alignItems: "center", marginLeft:"100px" }}>
          <div>
            <img
              width={60}
              height={60}
              src="../src/assets/images/gia-su-online-logo-png-v2-60.png"
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
        <Button className="mr-36 bg-[#ff4778] text-white font-bold text-[1rem] px-5 py-3 h-9 flex items-center justify-center rounded-none	border-transparent">
          <Link to="#">Tìm Gia Sư</Link>
        </Button>
      </Header>
      <Header className="bg-[#eee]"></Header>
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
                  <span className="font-normal text-[14px]">Giới Thiệu</span>
                  <span className=" font-normal pl-2 text-[14px]">Liên Hệ</span>
                </div>
                <div className="flex flex-row divide-x-2 divide-solid space-x-2 text-[#ff4778]">
                  <span className="font-normal text-[14px]">Tài Liệu</span>
                  <span className=" font-normal pl-2 text-[14px]">
                    Kiến Thức
                  </span>
                  <span className=" font-normal pl-2 text-[14px]">
                    Kinh Nghiệm
                  </span>
                </div>
                <span className=" text-[#ff4778] text-[14px]">
                  <Link to="/login">Tài Khoản</Link>
                </span>
              </div>
            </Col>
            <Col className="ml-[150px]">
            <div className="flex flex-col space-y-6">
              <span className="font-bold text-[18px]">CHÍNH SÁCH</span>
              <span className="text-[#ff4778] text-[14px]">Chính Sách Người Dùng</span>
              <span className="text-[#ff4778] text-[14px]">Điều Khoản Sử Dụng</span>
              <span className="text-[#ff4778] text-[14px]">Chính Sách Thanh Toán</span>
            </div>
            </Col>
            <Col className="ml-[250px]"> 
              <div className="flex flex-col">
                <span className="font-bold text-[18px]">KẾT NỐI</span>
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
