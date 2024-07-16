import React, { useState } from "react";
import { Card, List, Collapse, Button } from "antd";
import {
  DownOutlined,
  UpOutlined,
  CreditCardOutlined,
  DollarOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

const { Panel } = Collapse;

const data = [
  {
    date: "01/09/2021 11:30 tối",
    total: "150,000.00 đ",
    paymentMethod: "Credit Card",
    details: [
      {
        title: "Gia sư dạy kèm tiếng anh cho trẻ em",
        rating: "4.7 (451,444 lượt xem)",
        price: "$13.99",
        author: "Ha Nguyen",
      },
      {
        title: "Gia sư dạy kèm tiếng anh cho người lớn",
        rating: "4.7 (451,444 lượt xem)",
        price: "$49.00",
        author: "Ha Nguyen",
      },
    ],
  },
  // Các mục khác tương tự...
];

const PurchaseHistory = () => {
  const [activeKey, setActiveKey] = useState(null);

  const togglePanel = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <div className="purchase-history">
      <Collapse
        activeKey={activeKey}
        expandIconPosition="right"
        className="site-collapse-custom-collapse"
      >
        {data.map((item, index) => (
          <Panel
            header={
              <div className="flex justify-between items-center">
                <div>
                  <CalendarOutlined /> {item.date}
                  <br />
                  <span>
                     <DollarOutlined /> {item.total}{" "}
                    <CreditCardOutlined /> {item.paymentMethod}
                  </span>
                </div>
                <Button
                  icon={activeKey === index ? <UpOutlined /> : <DownOutlined />}
                  onClick={() => togglePanel(index)}
                />
              </div>
            }
            key={index}
          >
            <List
              itemLayout="horizontal"
              dataSource={item.details}
              renderItem={(course) => (
                <List.Item>
                  <List.Item.Meta
                    title={course.title}
                    description={
                      <>
                        <div>{course.rating}</div>
                        <div>Gia sư: {course.author}</div>
                      </>
                    }
                  />
                  <div>{course.price}</div>
                </List.Item>
              )}
            />
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default PurchaseHistory;
