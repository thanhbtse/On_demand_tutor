import React, { useEffect } from "react";
import { Card, Button, Tabs, Rate } from "antd";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
const { Meta } = Card;
import useUser from "../../hooks/useUser";
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

function Dashboard( {id }) {
  const { userDetails, fetchUserById } = useUser();

  useEffect(() => {
    if(id){
      (async () => {
        await fetchUserById(id);  
      })();
    }
  }, []);

  return (
    <div>
      {" "}
      <h3 className="text-lg font-semibold mb-4">
        Hãy bắt đầu tìm gia sư cho {userDetails.name}
      </h3>
      {/* turtor card*/}
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

Dashboard.propTypes = {
  id: PropTypes.string,
};

export default Dashboard;
