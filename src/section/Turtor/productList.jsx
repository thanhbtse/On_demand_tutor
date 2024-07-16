import React, { useEffect, useState } from "react";
import { Card, Input, Rate, Select } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useCourse from "../../hooks/useCourse";
const { Meta } = Card;
const { Search } = Input;
function ProductList({ id }) {
  const { fetchcourseListByTurtor, courseList } = useCourse();
  useEffect(() => {
    if (id) {
      (async () => {
        await fetchcourseListByTurtor(id);
      })();
    }
  }, [id]);
  console.log("id", id);
  console.log("courseList", courseList);
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div>
          <Search
            placeholder="Enter product name"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
            className="w-[300px]"
          />
        </div>
        <div>
          <Select
            showSearch
            style={{
              width: 200,
            }}
            size="large"
            placeholder="Default Sort"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              {
                value: "1",
                label: "Sort by: average rating",
              },
              {
                value: "2",
                label: "Sort by: lastest",
              },
              {
                value: "3",
                label: "Sort by: price: low to high",
              },
              {
                value: "4",
                label: "Srort by: price: high to low",
              },
            ]}
          />
        </div>
      </div>
      <div className="mt-6">
        <div>
          {courseList.map((course) => (
            <div key={course.id} className="mt-6">
              <Card
                className="max-w-[20rem] overflow-hidden relative group"
                cover={
                  <div className="relative">
                    <Link to={`/product-detail/${course._id}`}>
                      <img
                        alt="Profile"
                        src={course.image}
                        className="w-full h-64 object-cover"
                      />
                    </Link>
                    <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ShoppingCartOutlined className="text-black text-xl bg-gray-400 hover:bg-white bg-opacity-50 rounded-full p-1" />
                    </div>
                  </div>
                }
              >
                <Link to={`/product-detail/${course._id}`}>
                  <Meta
                    title={
                      <p className="text-sm text-gray-400">{course.title}</p>
                    }
                    description={
                      <h2 className="text-base font-bold text-black">
                        <p>{course.description}</p>
                      </h2>
                    }
                  />
                </Link>
                <div className="mt-2 mb-4">
                  <div className="text-base text-black">{course.price}</div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
ProductList.prototype = {
  id: PropTypes.string,
};
export default ProductList;
