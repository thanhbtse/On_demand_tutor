import React from "react";
import { Card, Input, Rate, Select } from "antd";

const { Meta } = Card;
const { Search } = Input;
function ProductList() {
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
          <Card
            hoverable
            className="max-w-[20rem] shadow-md overflow-hidden"
            cover={
              <img
                alt="Profile"
                src="https://giasuonline.vn/wp-content/uploads/2023/12/z4669388861927_c873c924ea0f4f5c939557664bb5dcb9-300x300.jpg"
                className="w-full h-64 object-cover"
              />
            }
          >
            <Meta
              title={<p className="text-sm text-gray-400 ">Tiếng Trung</p>}
              description={
                <h2 className="text-base font-medium text-black">
                  <strong>Lớp dạy kèm tiêng trung </strong>
                </h2>
              }
            />
            <div className="mt-2 mb-4">
              <Rate disabled defaultValue={5} className="text-yellow-500" />
            </div>
            <div className="flex">
              <div className="text-base">150,000.00 ₫</div>
            </div>
          </Card>
        </div>
    </div>
  );
}
export default ProductList;
