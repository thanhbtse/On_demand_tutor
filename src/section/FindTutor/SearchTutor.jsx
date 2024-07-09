import React from "react";
import { Breadcrumb, Button, Col, Row, Select, Card, Rate } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

function SearchTutor() {
  return (
    <div className="flex flex-col space-y-5 2xl:px-[350px] lg:px-[60px] xl:px-[60px] md:px-[60px] py-10">
      <Breadcrumb
        items={[
          {
            title: <a href="/">Trang chủ</a>,
          },
          {
            title: <a href="/tim-gia-su-online">Tìm Gia Sư Online</a>,
          },
        ]}
      />
      <div className="md:flex flex-col bg-[#004aad] text-white  items-center justify-center h-[250px]">
        <h1 className="text-[35px] font-bold ">
          Tìm Gia Sư Online & Lớp Dạy Kèm
        </h1>
        <p className="text-[18px]">
          Nhập từ khóa vào ô tìm kiếm ở trên, hoặc Lựa chọn các mục sau để tìm
          các lớp dạy kèm online bạn muốn đăng ký.
        </p>
      </div>{" "}
      <div className="py-20">
        <div
          class="filter-bar"
          className="bg-white justify-center items-center shadow-lg h-48 "
        >
          <Row gutter={[16, 16]} className="p-[38px] ">
            <Col span={6} className="text-[18px] flex flex-col">
              {" "}
              Môn Học
              <Select className="w-64" placeholder="Select All">
                <Select.Option value="1">Toán</Select.Option>
                <Select.Option value="2">Vật Lý</Select.Option>
              </Select>
            </Col>
            <Col span={6} className="text-[18px] ">
              {" "}
              Chương Trình
              <Select className="w-64" placeholder="Select All">
                <Select.Option value="1">Toán</Select.Option>
                <Select.Option value="2">Vật Lý</Select.Option>
              </Select>
            </Col>
            <Col span={6} className="text-[18px] ">
              {" "}
              Khu Vực
              <Select className="w-64" placeholder="Select All">
                <Select.Option value="1">Toán</Select.Option>
                <Select.Option value="2">Vật Lý</Select.Option>
              </Select>
            </Col>
            <Col span={6} className="text-[18px] ">
              {" "}
              Gia Sư Nam / Nữ
              <Select className="w-64" placeholder="Select All">
                <Select.Option value="1">Toán</Select.Option>
                <Select.Option value="2">Vật Lý</Select.Option>
              </Select>
            </Col>
          </Row>
          <div className="flex justify-center items-center	">
            <Button className="bg-[#f53d6e] text-white w-[200px] h-[48px] basis-[48%] mx-2">
              Tìm Kiếm
            </Button>
            <Button className="bg-[#f53d6e] text-white w-[200px] h-[48px] basis-[48%]">
              Chọn lại
            </Button>
          </div>
        </div>{" "}
      </div>
      <Link to="/view-detail-tutor">
        <Card
          hoverable
          className="max-w-[23rem]  shadow-md rounded-lg overflow-hidden"
          cover={
            <img
              alt="Profile"
              src="https://giasuonline.vn/wp-content/uploads/2023/09/384821589_339766908712324_8739744638444568107_n-300x300.jpg"
              className="w-full h-64 object-cover"
            />
          }
        >
          <Meta
            title={<p className="text-sm text-gray-400 ">Cho Trẻ Em</p>}
            description={
              <h2 className="text-lg font-medium text-black">
                <strong>Gia sư dạy kèm tiếng anh cho trẻ em </strong>
              </h2>
            }
          />
          <div className="mt-2 mb-4">
            <Rate disabled defaultValue={5} className="text-yellow-500" />
          </div>
          <div className="flex">
            <div className="text-lg text-gray-600 line-through">
              200,000.00 ₫
            </div>
            <div className="text-lg font-bold ">150,000.00 ₫</div>
          </div>
        </Card>
      </Link>
    </div>
  );
}

export default SearchTutor;
