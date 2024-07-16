import { Helmet } from "react-helmet";
import { ReportView } from "../../section/Admin/Report/views";
import { Table } from "antd";
import { useEffect } from "react";
import useUser from "../../hooks/useUser";

function UserTable() {
    const {userList, fetchUserList} = useUser()
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
      useEffect(() => {
      
        (async () => {
            await fetchUserList();
          })();
        
      }, []);

      
  return (
    <div>
      <Helmet>
        <title>Report - GiaSuOnline.vn</title>
      </Helmet>
      <div className="min-w-[250px]">
      <div className="bg-[#fff] p-5 rounded-t-xl">
        <p className="text-2xl text-black font-bold">Report List</p>
      </div>
      <div className="p-5" data-testid="classTable">

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
         
          onRow={(record) => ({
            
          })}
          rowKey={"_id"}
        />
      </div>
    </div>

      </div>
    </div>
    </div>
  );
}
export default UserTable;
