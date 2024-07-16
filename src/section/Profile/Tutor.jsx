import React from "react";
import { Card, Input, Select, Button } from "antd";
import { StarFilled } from "@ant-design/icons";

const { Option } = Select;

const teachersData = [
  {
    name: "Nguyễn Thanh Hà",
    title: "Gia sư dạy kèm tiếng anh cho trẻ em",
    rating: 5.0,
    image:
      "https://giasuonline.vn/wp-content/uploads/2023/09/384821589_339766908712324_8739744638444568107_n-300x300.jpg",
  },
  {
    name: "Bessie Cooper",
    title: "Gia Sư Dạy Kèm Tiếng Anh Cho Người Lớn",
    rating: 4.9,
    image:
      "https://giasuonline.vn/wp-content/uploads/2023/09/cropped-01-nguyen-van-thanh-gia-su-online.jpg",
  },
];

function Tutor() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">
        Gia sư ({teachersData.length})
      </h3>
      <div className="flex justify-between mb-6">
        <Input.Search placeholder="Tìm kiếm gia sư..." style={{ width: 200 }} />
        <div className="flex space-x-4">
          <Select defaultValue="Tất cả" style={{ width: 150 }}>
            <Option value="Tất cả">Tất cả</Option>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {teachersData.map((teacher) => (
          <Card
            key={teacher.name}
            cover={<img alt={teacher.name} src={teacher.image} />}
            className="text-center"
          >
            <Card.Meta title={teacher.name} description={teacher.title} />
            <div className="mt-2">
              <StarFilled className="text-yellow-500" /> {teacher.rating}
            </div>

            <Button className="mt-4 w-full bg-orange-200 text-orange-600 border-none">
              Gửi tin nhắn
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Tutor;
