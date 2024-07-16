import React from "react";
import { Table, Button, InputNumber, Typography, Alert } from "antd";

const { Title, Text } = Typography;

const dataSource = [
  {
    key: "1",
    image:
      "https://giasuonline.vn/wp-content/uploads/2023/09/384821589_339766908712324_8739744638444568107_n-300x300.jpg",
    name: "Gia sư dạy kèm tiếng anh cho trẻ em",
    vendor: "Ha Nguyen",
    price: 150000,
    quantity: 1,
  },
];

const columns = [
  {
    title: <span className="text-xl">Lớp học</span>,
    dataIndex: "image",
    key: "image",
    render: (text, record) => (
      <div className="flex items-center">
        <img
          src={record.image}
          alt={record.name}
          className="w-12 h-12 mr-4 border-2 border-pink-300"
        />
        <div>
          <Text className="text-pink-600 text-xl">{record.name}</Text>
          <br />
          <Text type="secondary" className="font-medium">Vendor: {record.vendor}</Text>
        </div>
      </div>
    ),
  },
  {
    title: <span className="text-xl">Giá</span>,
    dataIndex: "price",
    key: "price",
    render: (text) => `${text.toLocaleString()} ₫`,
  },
  {
    title: <span className="text-xl">Số lượng</span>,
    dataIndex: "quantity",
    key: "quantity",
    render: (text) => <InputNumber min={1} defaultValue={text} />,
  },
  {
    title: <span className="text-xl">Tạm tính</span>,
    dataIndex: "price",
    key: "subtotal",
    render: (text, record) => `${(text * record.quantity).toLocaleString()} ₫`,
  },
];

function CartAll() {
  return (
    <div className="flex flex-col space-y-10 2xl:px-[350px] lg:px-[60px] xl:px-[60px] md:px-[60px] py-20">
      <Title level={2} className="text-purple-800">
        Giỏ hàng
      </Title>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
      <div className="flex justify-end mt-4">
        <Button type="primary" className="bg-pink-500 border-pink-500 text-sm">
          Cập nhật giỏ hàng
        </Button>
      </div>
      <div className="flex justify-end mt-10">
        <div className="w-96 p-4 bg-white shadow rounded-lg">
          <Title level={3} className="text-purple-800 ">
            Cộng giỏ hàng
          </Title>
          <div className="flex justify-between mt-4">
            <Text className="text-lg">Tạm tính</Text>
            <Text>{dataSource[0].price.toLocaleString()} ₫</Text>
          </div>
          <div className="flex justify-between mt-2">
            <Text className="font-bold text-lg">Tổng</Text>
            <Text className="font-bold">
              {dataSource[0].price.toLocaleString()} ₫
            </Text>
          </div>
          <Button
            type="primary"
            className="mt-4 w-full bg-pink-500 border-pink-500"
          >
            Tiến hành thanh toán
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartAll;
