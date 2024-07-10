import React, { useState, useEffect } from "react";
import {
  Breadcrumb,
  Button,
  Col,
  Row,
  Select,
  Card,
  Rate,
} from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const tutors = [
  {
    id: 1,
    title: "Cho Trẻ Em",
    description: "Gia sư dạy kèm tiếng anh cho trẻ em",
    image:
      "https://giasuonline.vn/wp-content/uploads/2023/09/384821589_339766908712324_8739744638444568107_n-300x300.jpg",
    price: "150,000.00 ₫",
    oldPrice: "200,000.00 ₫",
    rating: 5,
  },
  {
    id: 2,
    title: "Cho Người Đi Làm",
    description: "Gia sư dạy kèm tiếng anh cho người đi làm",
    image:
      "https://giasuonline.vn/wp-content/uploads/2023/09/cropped-01-nguyen-van-thanh-gia-su-online.jpg",
    price: "250,000.00 ₫",
    oldPrice: "300,000.00 ₫",
    rating: 5,
  },
];

function SearchTutor() {
  const [selectedCategory, setSelectedCategory] = useState("Select All");
  const [filterCategory, setFilterCategory] = useState("All");

  useEffect(() => {
    handleSearch();
  }, []);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handleSearch = () => {
    if (selectedCategory === "Select All" || selectedCategory === null) {
      setFilterCategory("All");
    } else if (selectedCategory) {
      setFilterCategory(selectedCategory);
    }
  };

  const filteredTutors =
    filterCategory === "All"
      ? tutors
      : filterCategory
      ? tutors.filter((tutor) => tutor.title === filterCategory)
      : [];

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
      <div className="md:flex flex-col bg-[#004aad] text-white items-center justify-center h-[250px]">
        <h1 className="text-[35px] font-bold ">
          Tìm Gia Sư Online & Lớp Dạy Kèm
        </h1>
        <p className="text-[18px]">
          Nhập từ khóa vào ô tìm kiếm ở trên, hoặc Lựa chọn các mục sau để tìm
          các lớp dạy kèm online bạn muốn đăng ký.
        </p>
      </div>
      <div className="py-20">
        <div className="filter-bar bg-white justify-center items-center shadow-lg h-48">
          <Row gutter={[16, 16]} className="p-[38px]">
            <Col span={6} className="text-[18px] flex flex-col">
              Môn Học
              <Select className="w-64" defaultValue="Select All">
                <Select.Option value="Select All">Select All</Select.Option>
                <Select.Option value="Toán">Toán</Select.Option>
                <Select.Option value="Tiếng Anh cho trẻ em">
                  Tiếng Anh cho trẻ em
                </Select.Option>
              </Select>
            </Col>
            <Col span={6} className="text-[18px]">
              Chương Trình
              <Select
                className="w-64"
                onChange={handleCategoryChange}
                defaultValue="Select All"
              >
                <Select.Option value="Select All">Select All</Select.Option>
                <Select.Option value="Cho Trẻ Em">Cho trẻ em</Select.Option>
                <Select.Option value="Cho Người Đi Làm">
                  Cho Người Đi Làm
                </Select.Option>
              </Select>
            </Col>
            <Col span={6} className="text-[18px] ">
              Khu Vực
              <Select className="w-64" defaultValue="Select All">
                <Select.Option value="Select All">Select All</Select.Option>
                <Select.Option value="Toán">Toán</Select.Option>
                <Select.Option value="Vật Lý">Vật Lý</Select.Option>
              </Select>
            </Col>
            <Col span={6} className="text-[18px]">
              Gia Sư Nam / Nữ
              <Select className="w-64" defaultValue="Select All">
                <Select.Option value="Select All">Select All</Select.Option>
                <Select.Option value="Toán">Toán</Select.Option>
                <Select.Option value="Vật Lý">Vật Lý</Select.Option>
              </Select>
            </Col>
          </Row>
          <div className="flex justify-center items-center">
            <Button
              className="bg-[#f53d6e] text-white w-[200px] h-[48px] basis-[48%] mx-2"
              onClick={handleSearch}
            >
              Tìm Kiếm
            </Button>
            <Button
              className="bg-[#f53d6e] text-white w-[200px] h-[48px] basis-[48%]"
              onClick={() => setFilterCategory("All")}
            >
              Chọn lại
            </Button>
          </div>
        </div>
      </div>
      <div className="flex space-x-3">
        {filteredTutors.map((tutor) => (
          <Link to="/view-detail-tutor" key={tutor.id}>
            <Card
              hoverable
              className="max-w-[22rem] shadow-md rounded-lg overflow-hidden"
              cover={
                <img
                  alt="Profile"
                  src={tutor.image}
                  className="w-full h-64 object-cover"
                />
              }
            >
              <Meta
                title={<p className="text-sm text-gray-400 ">{tutor.title}</p>}
                description={
                  <h2 className="text-lg font-medium text-black">
                    <strong>{tutor.description}</strong>
                  </h2>
                }
              />
              <div className="mt-2 mb-4">
                <Rate
                  disabled
                  defaultValue={tutor.rating}
                  className="text-yellow-500"
                />
              </div>
              <div className="flex">
                <div className="text-lg text-gray-600 line-through">
                  {tutor.oldPrice}
                </div>
                <div className="text-lg font-bold ">{tutor.price}</div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchTutor;
