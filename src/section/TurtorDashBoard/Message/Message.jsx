import React, { useState } from "react";
import { Card, Input, Button, List, Avatar, Modal, Select } from "antd";
import {
  SendOutlined,
  EllipsisOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const { Option } = Select;

const messagesData = [
  {
    name: "Ha Nguyen",
    time: "just now",
    message: "Yeah sure, tell me zafor",
    avatar:
      "https://giasuonline.vn/wp-content/uploads/2023/09/384821589_339766908712324_8739744638444568107_n-300x300.jpg",
    active: true,
  },
  {
    name: "Thanh Nguyen",
    time: "2 d",
    message: "Thank you so much, sir",
    avatar:
      "https://giasuonline.vn/wp-content/uploads/2023/09/cropped-01-nguyen-van-thanh-gia-su-online.jpg",
    active: false,
  },
];

const conversation = [
  {
    sender: "Jane Cooper",
    message:
      "Hello and thanks for signing up to the course. If you have any questions about the course or Adobe XD, feel free to get in touch and I'll be happy to help 🙂",
    time: "Time",
  },
  {
    sender: "You",
    message: "Hello, Good Evening.",
    time: "Time",
  },
  {
    sender: "You",
    message:
      "I only have a small doubt about your lecture. Can you give me some time for this?",
    time: "Time",
  },
  {
    sender: "Jane Cooper",
    message: "Yeah sure, tell me zafor",
    time: "Time",
  },
];

function Message() {
  const [selectedMessage, setSelectedMessage] = useState(messagesData[0]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    console.log("Teacher:", selectedTeacher);
    console.log("Message:", newMessage);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="flex space-x-2">
      <div className="w-1/3 p-4 rounded-lg bg-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Tin nhắn</h3>
          <Button icon={<PlusOutlined />} onClick={showModal} />
        </div>
        <Input
          placeholder="Tìm kiếm"
          prefix={<SearchOutlined />}
          className="mb-4"
        />
        <List
          itemLayout="horizontal"
          dataSource={messagesData}
          renderItem={(item) => (
            <List.Item
              className={
                item.active ? "bg-orange-100 cursor-pointer" : "cursor-pointer"
              }
              onClick={() => setSelectedMessage(item)}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={
                  <span className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="text-gray-500 text-sm">{item.time}</span>
                  </span>
                }
                description={item.message}
              />
            </List.Item>
          )}
        />
      </div>
      <div className="w-2/3 p-4 rounded-lg bg-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Avatar src={selectedMessage.avatar} size="large" />
            <div className="ml-4">
              <h4 className="text-lg font-semibold">{selectedMessage.name}</h4>
              <p className="text-green-500">Đang hoạt động</p>
            </div>
          </div>
          <Button icon={<EllipsisOutlined />} />
        </div>
        <div className="bg-gray-50 p-4 rounded-lg overflow-y-auto h-96">
          {conversation.map((msg, index) => (
            <div
              key={index}
              className={
                msg.sender === "You" ? "text-right mb-4" : "text-left mb-4"
              }
            >
              <p
                className={
                  msg.sender === "You"
                    ? "inline-block bg-orange-200 text-orange-600 p-2 rounded-lg"
                    : "inline-block bg-gray-200 p-2 rounded-lg"
                }
              >
                {msg.message}
              </p>
              <p className="text-gray-500 text-xs">{msg.time}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex">
          <Input placeholder="Nhập tin nhắn của bạn" className="flex-1 mr-2" />
          <Button
            type="primary"
            icon={<SendOutlined />}
            className="bg-orange-200 text-orange-600 border-none"
          >
            Gửi
          </Button>
        </div>
      </div>

      <Modal
        title="New Message"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            className="bg-orange-200 text-orange-600 border-none"
            onClick={handleOk}
          >
            Send Message
          </Button>,
        ]}
      >
        <div className="mb-4">
          <label className="block mb-2">Teacher:</label>
          <Select
            placeholder="Select..."
            className="w-full"
            value={selectedTeacher}
            onChange={(value) => setSelectedTeacher(value)}
          >
            <Option value="Jane Cooper">Jane Cooper</Option>
            <Option value="Jenny Wilson">Jenny Wilson</Option>
          </Select>
        </div>
        <div>
          <label className="block mb-2">Message:</label>
          <Input.TextArea
            placeholder="Write your message here..."
            rows={4}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </div>
      </Modal>
    </div>
  );
}

export default Message;
