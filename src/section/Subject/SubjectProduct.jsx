import { Breadcrumb, Card, Rate } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const product = [
  {
    id: 1,
    title: "Đà Nẵng",
    description:
      "Lớp Dạy Kèm Online Trực Tuyến Kỹ Năng Thuyết Trình Tại Khu Vực Đà Nẵng",
    image:
      "https://giasuonline.vn/wp-content/uploads/2023/09/01-default-icon-giasuonline.png",
    price: "200,000.00 ₫",
    rating: 5,
  },
  {
    id: 2,
    title: "Đà Nẵng",
    description:
      "Lớp Dạy Kèm Online Trực Tuyến Kỹ Năng Thuyết Trình Tại Khu Vực Đà Nẵng",
    image:
      "https://giasuonline.vn/wp-content/uploads/2023/09/01-default-icon-giasuonline.png",
    price: "200,000.00 ₫",
    rating: 5,
  },
];
const { Meta } = Card;
function SubjectProduct() {
  return (
    <div className="flex flex-col space-y-5 2xl:px-[350px] lg:px-[60px] xl:px-[60px] md:px-[60px] py-10">
      <Breadcrumb
        items={[
          {
            title: <a href="/">Trang chủ</a>,
          },
          {
            title: <a href="/mon-hoc">Môn học</a>,
          },
          {
            title: <a href={`/mon-hoc/${product[0].id}`}>Kĩ năng</a>,
          },
        ]}
      />
      <div className="flex space-x-3">
        {product.map((tutor) => (
            <Link to={`/mon-hoc/${tutor.id}/ky-nang`} key={tutor.id}>
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
                  title={
                    <p className="text-sm text-gray-400 ">{tutor.title}</p>
                  }
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
                  <div className="text-lg font-bold ">{tutor.price}</div>
                </div>
              </Card>
            </Link>
        ))}
      </div>
    </div>
  );
}

export default SubjectProduct;
