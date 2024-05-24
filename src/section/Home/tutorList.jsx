import { FilterOutlined } from "@ant-design/icons";
import { Button, Card, Select } from "antd";

function ListTutor() {
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
    <div className="flex flex-col space-y-10 2xl:px-[350px] lg:px-[60px] xl:px-[60px] md:px-[60px] py-20 ">
      <div
        class="filter-bar"
        className="bg-white p-5 justify-center items-center shadow-lg"
      >
        <div className="float-left font-[14px] pt-2"
        >Total stores showing: 61</div>
        <div className="float-right flex flex-row space-x-4 ">
          <Button className="rounded-none items-center space-x-1 bg-[#ff4778] text-white flex flex-row ">
            <FilterOutlined />
            <p>Filter</p>
          </Button>
          <p>
            Sort by:{" "}
            <Select
              defaultValue="lucy"
              className="w-[130px] rounded-none"
              onChange={handleChange}
              options={options}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default ListTutor;
