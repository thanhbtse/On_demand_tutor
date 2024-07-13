import { FilterOutlined, RightOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Input, Rate, Row, Select, Skeleton } from "antd";
import React, { useState } from "react";
import "../../App.css";
import Meta from "antd/es/card/Meta";
import background from "../../assets/images/default-store-banner.png";
import meme from "../../assets/images/images.jpg";
import { Link } from "react-router-dom";

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
];
function ListTutor() {
  const [loading, setLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const options = [
    {
      value: "jack",
      label: "Random",
    },
    {
      value: "lucy",
      label: "Most Popular",
    },
    {
      value: "Yiminghe",
      label: "Most Recent",
    },
  ];

  return (
    <div className="flex flex-col space-y-8 2xl:px-[350px] lg:px-[60px] xl:px-[60px] md:px-[60px] py-20 ">
      <div
        class="filter-bar"
        className="bg-white p-5 justify-center items-center shadow-lg"
      >
        <div className="float-left font-[14px] pt-2">
          Total tutors showing: 61
        </div>
        <div className="float-right flex flex-row space-x-4 ">
          <Button
            className="rounded-none items-center space-x-1 bg-[#ff4778] text-white flex flex-row"
            onClick={() => setShowFilter(!showFilter)}
          >
            <FilterOutlined />
            <p>Filter</p>
          </Button>
          <p>
            Sort by:
            <Select
              defaultValue="lucy"
              className="my-select-container w-[130px] rounded-none "
              onChange={handleChange}
              options={options}
            />
          </p>
        </div>
      </div>
      {/* filter search*/}
      {showFilter && (
        <div className={`showFilter ${showFilter ? "open" : "closed"}`}>
          <div className="bg-white h-32">
            <div className="space-y-4 p-4 ">
              <Input className="h-14" placeholder="Search Vendors" />
              <div>
                <Button className="float-right rounded-md text-white bg-[#ff4778] pb-4">
                  Apply
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex space-x-3">
        {tutors.map((tutor) => (
          <Link to="/view-detail-tutor" key={tutor.id}>
            <Card
              hoverable
              className="max-w-[22rem] shadow-md rounded-lg overflow-hidden"
              cover={
                <div className="relative group">
                  <img
                    alt="Profile"
                    src={tutor.image}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link to="/gio-hang">
                      <ShoppingCartOutlined className="text-black text-xl bg-gray-400 hover:bg-white bg-opacity-50 rounded-full p-1" />
                    </Link>
                  </div>{" "}
                </div>
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

export default ListTutor;
