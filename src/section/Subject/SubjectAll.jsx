import { Breadcrumb, Card, Col, Row } from "antd";
import React from "react";
import { Link, useParams } from "react-router-dom";
const { Meta } = Card;

function SubjectAll() {
  const subjects = [
    { id: "1", title: "KĨ NĂNG", products: "1 Products" },
    { id: "2", title: "MÔN ĐỊA LÝ", products: "4 Products" },
    { id: "3", title: "MÔN HÓA HỌC", products: "3 Products" },
    { id: "4", title: "MÔN LỊCH SỬ", products: "3 Products" },
  ];
  return (
    <div className="flex flex-col space-y-5 2xl:px-[350px] lg:px-[60px] xl:px-[60px] md:px-[60px] py-10">
      <Breadcrumb
        items={[
          {
            title: <a href="/">Trang chủ</a>,
          },
          {
            title: <a href="/mon-hoc"> Môn học</a>,
          },
        ]}
      />
      <div className="md:flex flex-col bg-[#004aad] text-white items-center justify-center h-[250px]">
        <h1 className="text-[35px] font-bold ">
          Tìm Gia Sư Online Theo Môn Học{" "}
        </h1>
        <p className="text-[18px]">
          Nhập từ khóa vào ô tìm kiếm ở trên để tìm, hoặc lựa chọn theo các môn
          học dưới đây.
        </p>
      </div>
      <Row gutter={[16, 16]}>
        {subjects.map((subject, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Link to={`/mon-hoc/${subject.id}`}>
              <Card
                hoverable
                className="max-w-[20rem] shadow-md rounded-lg overflow-hidden mt-20"
                cover={
                  <img
                    alt="Subject"
                    src="https://giasuonline.vn/wp-content/uploads/2023/09/01-default-icon-giasuonline.png"
                    className="w-full h-[20rem] object-cover"
                  />
                }
              >
                <Meta
                  className="text-center"
                  title={
                    <h2 className="text-xl text-[#36174d] font-semibold">
                      {subject.title}
                    </h2>
                  }
                  description={
                    <p className="text-sm font-medium text-gray-600">
                      {subject.products}
                    </p>
                  }
                />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default SubjectAll;
