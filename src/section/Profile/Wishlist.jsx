import React from "react";
import { Card, Button, List, Avatar, Rate } from "antd";

const data = [
  {
    title: "Gia sư dạy kèm tiếng anh cho trẻ em",
    rating: 4.6,
    reviews: 451444,
    category: "Cho trẻ em",
    originalPrice: "150,000.00 đ",
    image:
      "https://giasuonline.vn/wp-content/uploads/2023/09/384821589_339766908712324_8739744638444568107_n-300x300.jpg",
  },
  {
    title: "Gia Sư Online Dạy Kèm Môn Tin Học Cơ Bản Cho Người Đi Làm",
    rating: 4.8,
    reviews: 451444,
    category: "Cho người đi làm",
    originalPrice: "150,000.00 đ",
    image:
      "https://giasuonline.vn/wp-content/uploads/2023/09/cropped-01-nguyen-van-thanh-gia-su-online.jpg",
  },
  {
    title: "Gia Sư Online Dạy Kèm Trực Tuyến Môn Vật Lý Lớp 10",
    rating: 4.7,
    reviews: 451444,
    category: "Lớp 10",
    originalPrice: "150,000.00 đ",
    image:
      "https://giasuonline.vn/wp-content/uploads/2023/09/cropped-01-nguyen-van-thanh-gia-su-online.jpg",
  },
];

const Wishlist = () => (
  <div className="wishlist-container">
    <h2>Danh Sách (3)</h2>
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Button type="primary">Đăng kí</Button>,
            <Button
              shape="circle"
              icon={<span style={{ color: "red" }}>❤️</span>}
            />,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.image} shape="square" size={64} />}
            title={
              <div>
                <Rate disabled defaultValue={item.rating} />
                <span className="rating-text">
                  {item.rating} ({item.reviews} Đánh giá)
                </span>
                <br />
                <a href="">{item.title}</a>
                <br />
                <span className="course-by">Danh mục: {item.category}</span>
              </div>
            }
            description={
              <div
                className="price-container"
                style={{ color: item.originalPrice ? "red" : "inherit" }}
              >
                {item.originalPrice}
              </div>
            }
          />
        </List.Item>
      )}
    />
  </div>
);

export default Wishlist;
