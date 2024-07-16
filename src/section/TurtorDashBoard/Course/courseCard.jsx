import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  Input,
  Select,
  Card,
  Rate,
  Dropdown,
  Space,
  Spin,
} from "antd";
import { Link } from "react-router-dom";
import {
  EllipsisOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import useCourse from "../../../hooks/useCourse";
import useAuth from "../../../hooks/useAuth";
const { Meta } = Card;

function CourseList() {
  const { courseList, fetchCoursesByTutor } = useCourse();
  const { infoUser } = useAuth();
  const tutorId = infoUser._id;
  const defaultValue = 2;
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("1");

  const items = [
    {
      label: "Xem chi tiết",
      key: "0",
    },
    {
      label: "Chỉnh sửa",
      key: "1",
    },
    {
      label: "Xoá",
      key: "3",
    },
  ];

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      await fetchCoursesByTutor(tutorId);
      setLoading(false);
    }
    fetchData();
  }, [tutorId]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (value) => {
    setSortOption(value);
  };

  const getSortedCourses = (courses) => {
    if (sortOption === "1") {
      return courses.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      ); // Mới nhất
    } else {
      return courses.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      ); // Cũ nhất
    }
  };

  const filteredCourses = getSortedCourses(
    courseList.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="container mx-[50px]">
      {/* Search and filter bar */}
      <div className="search mb-6">
        <div className="flex flex-row justify-between items-end">
          <div className="flex flex-col space-y-2 w-full mr-4">
            <div>
              <h1 className="text-md text-gray-400">Tìm kiếm...</h1>
            </div>
            <Input
              prefix={<SearchOutlined />}
              placeholder="tìm kiếm khoá học của bạn..."
              className="w-[80%] h-10"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="flex flex-col space-y-2 w-[150%]">
            <div>
              <h1 className="text-md text-gray-400">Sắp xếp theo...</h1>
            </div>
            <Select
              showSearch
              className="w-[50%] h-10"
              value={sortOption}
              onChange={handleSortChange}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "Mới nhất",
                },
                {
                  value: "2",
                  label: "Cũ nhất",
                },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Course list */}
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <Spin size="large" />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-8 mt-10">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="relative border border-solid border-gray-200 rounded-lg transition-all duration-500 hover:scale-105 hover:shadow-lg bg-white"
            >
              <div className="block overflow-hidden">
                <img
                  src={
                    course.image ||
                    "https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                  }
                  alt="Card image"
                  className="rounded-t-lg w-full h-40 object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500">
                  {course.title}
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  {course.description}
                </p>
              </div>
              <div className="border-t-[1px]">
                <p></p>
              </div>
              <div className="p-4 flex flex-row justify-between">
                <div className="space-x-2">
                  <Rate
                    disabled
                    count={5}
                    defaultValue={course.rating || defaultValue}
                  />
                  <span>{course.rating || defaultValue}</span>
                </div>
                <div className="flex flex-row space-x-1">
                  <UserOutlined />
                  <p>{course.studentsCount || 0} học sinh</p>
                </div>
              </div>
              <div className="border-t-[1px]">
                <p></p>
              </div>
              <div className="p-4 flex flex-row justify-between items-center">
                <div>
                  <p className="text-[#FF6636]">{course.price} VND</p>
                </div>
                <div>
                  <Dropdown
                    menu={{
                      items,
                    }}
                    trigger={["click"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        <EllipsisOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CourseList;
