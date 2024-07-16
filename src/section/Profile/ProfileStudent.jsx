import React from "react";
import { Tabs } from "antd";
import Tutor from "./Tutor";
import Message from "./Message";
import Wishlist from "./Wishlist";
import PurchaseHistory from "./PurchaseHistory";
import Setting from "./Setting";
import Dashboard from "./Dashboard";
import useAuth from "../../hooks/useAuth";
const { TabPane } = Tabs;

function ProfileStudent() {
  const { infoUser } = useAuth();
  const imageURL = infoUser.image
    ? `http://localhost:5000/${infoUser.image.replace(/\\/g, "/")}`
    : "https://m.media-amazon.com/images/I/51dSHZNjFoL._UF894,1000_QL80_.jpg";

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <img
            src={imageURL}
            alt="Profile"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold">{infoUser.name}</h2>
            <p className="text-gray-500">{infoUser.role}</p>
          </div>
        </div>
        <Tabs defaultActiveKey="1" tabBarStyle={{ marginBottom: 0 }}>
          <TabPane tab="Tổng Quan" key="1">
            <h3 className="text-lg font-semibold mb-4">Tổng Quan</h3>
            <Dashboard />
          </TabPane>
          <TabPane tab="Gia sư" key="2">
            <h3 className="text-lg font-semibold mb-4">Gia sư</h3>
            <Tutor />
          </TabPane>
          <TabPane tab="Tin nhắn" key="3">
            <h3 className="text-lg font-semibold mb-4">Tin nhắn</h3>
            <Message />
          </TabPane>
          <TabPane tab="Danh sách ưa thích" key="4">
            <h3 className="text-lg font-semibold mb-4">Danh sách ưa thích</h3>
            <Wishlist />
          </TabPane>
          <TabPane tab="Lịch sử " key="5">
            <h3 className="text-lg font-semibold mb-4">Lịch sử</h3>
            <PurchaseHistory />
          </TabPane>
          <TabPane tab="Cài đặt" key="6">
            <Setting infoUser={infoUser} id={infoUser._id} />{" "}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default ProfileStudent;
