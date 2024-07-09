import { FilterOutlined, RightOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Input, Row, Select, Skeleton } from "antd";
import React, { useState } from "react";
import "../../App.css";
import Meta from "antd/es/card/Meta";
import background from "../../assets/images/default-store-banner.png";
import meme from "../../assets/images/images.jpg";
import { Link } from "react-router-dom";

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
      {/* card list */}
      <div class="card-list">
        <Row gutter={[48, 16]}>
          <Col span={8}>
            <Card
              className="w-80 shadow-md rounded-none "
              cover={<img alt="example" src={background} />}
              actions={[
                <Link to={`/gia-su/`}>
                  <Button
                    className=" bg-[#ff4778] text-white mr-56"
                    shape="circle"
                    size="large"
                  >
                    <RightOutlined className="flex align-middle" />
                  </Button>
                </Link>,
              ]}
            >
              <Skeleton loading={loading} avatar active>
                <Meta
                  avatar={
                    <Avatar src={meme} size="large" className="border-4" />
                  }
                  title="Card title"
                  description="This is the description"
                />
              </Skeleton>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ListTutor;
