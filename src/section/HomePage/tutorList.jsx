import { FilterOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card, Input, Rate, Select } from "antd";
import React, { useEffect, useState } from "react";
import "../../App.css";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import useTutor from "../../hooks/useTutor";
import shoplogo from "../../assets/images/default-store-banner.png";
function ListTutor() {
  const [showFilter, setShowFilter] = useState(false);
  const { fetchTutorLists, tutorLists, isloadingTutorList } = useUser();
  const { fetchTutorList, tutorList } = useTutor();
  useEffect(() => {
    fetchTutorList();
    fetchTutorList();
  }, []);
  console.log("tutorList", tutorList);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const imageURL =
    tutorList && tutorList.image
      ? `http://localhost:5000/${tutorList.image.replace(/\\/g, "/")}`
      : undefined;
  console.log(imageURL);
  const options = [
    { value: "jack", label: "Random" },
    { value: "lucy", label: "Most Popular" },
    { value: "Yiminghe", label: "Most Recent" },
  ];

  return (
    <div className="flex flex-col space-y-8 2xl:px-[350px] lg:px-[60px] xl:px-[60px] md:px-[60px] py-20">
      <div className="filter-bar bg-white p-5 justify-center items-center shadow-lg">
        <div className="float-left font-[14px] pt-2">
          Total tutors showing: {tutorList.length}
        </div>
        <div className="float-right flex flex-row space-x-4">
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
              className="my-select-container w-[130px] rounded-none"
              onChange={handleChange}
              options={options}
            />
          </p>
        </div>
      </div>
      {showFilter && (
        <div className={`showFilter ${showFilter ? "open" : "closed"}`}>
          <div className="bg-white h-32">
            <div className="space-y-4 p-4">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tutorList.map((tutor) => {
          return (
            <Link to={`/tutors/${tutor._id}`}>
              <Card
                hoverable
                className="shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                cover={
                  <div className="relative group">
                    <img
                      alt="Profile"
                      src={shoplogo}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link to="/gio-hang">
                        <ShoppingCartOutlined className="text-black text-xl bg-gray-400 hover:bg-white bg-opacity-50 rounded-full p-1" />
                      </Link>
                    </div>
                  </div>
                }
              >
                <Meta
                  title={<p className="text-sm text-gray-400">{tutor.info.name}</p>}
                  description={
                    <h2 className="font-medium text-black">
                      <p>{tutor.info.address}</p>
                    </h2>
                  }
                />
                <div className="mt-4 mb-2">
                  <Rate
                    disabled
                    defaultValue={tutor.rating}
                    className="text-yellow-500"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-lg text-gray-600 line-through">
                    {tutor.oldPrice}
                  </div>
                  <div className="text-lg font-bold text-[#ff4778]">
                    {tutor.price}
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ListTutor;
