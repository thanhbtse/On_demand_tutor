import React, { useEffect, useState } from "react";
import { Table, Button, Modal } from "antd";
import { Link } from "react-router-dom";

function ReportList() {
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  //   useEffect(() => {
  //     if (tableParams.pagination.current) {
  //       (async () => {
  //         await fetchUserList(tableParams.pagination.current);
  //       })();
  //     }
  //   }, [tableParams.pagination.current]);

  //   useEffect(() => {
  //     setTableParams({
  //       ...tableParams,
  //       pagination: {
  //         ...tableParams.pagination,
  //         total: userTotalElements,
  //       },
  //     });
  //   }, [userList]);

  const columns = [
    {
      title: "User ID",
      dataIndex: "_id",
      width: "15%",
    },
    {
      title: "User Name",
      dataIndex: "membername",
      width: "15%",
    },
    {
      title: "Target Type",
      dataIndex: "TargetType",
      width: "15%",
    },
    {
      title: "Target ID",
      dataIndex: "TargetID",
      width: "15%",
    },
    {
        title: "Reason",
        dataIndex: "reason",
        width: "15%",
    },
    {

    },
  ];
  const handleTableChange = (pagination) => {
    setTableParams({
      pagination,
    });
  };
  return (
    <div>
      {/* <div className="flex justify-end mb-5">
        <div className="add-button">
          <Button
            className="px-4 py-2 bg-[#172554] text-white rounded-md hover:bg-[#172554] focus:outline-none  focus:border-[#172554]"
            // onClick={showModal}
            form="createWatchForm"
          >
            Add Watch
          </Button>
        </div>
      </div> */}
      <div className="scrollbar pagination overflow-x-auto">
        <Table
          columns={columns}
          dataSource={[]}
          //   pagination={tableParams.pagination}
          //   loading={isloadingUserList}
          onChange={handleTableChange}
          onRow={(record) => ({
            onClick: (e) => handleRowClick(record),
          })}
          rowKey={"_id"}
        />
      </div>
    </div>
  );
}
export default ReportList;
