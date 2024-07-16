import React from "react";
import ReportList from "../reportList.jsx";

function ReportView() {
  return (
    <div className="min-w-[250px]">
      <div className="bg-[#fff] p-5 rounded-t-xl">
        <p className="text-2xl text-black font-bold">Report List</p>
      </div>
      <div className="p-5" data-testid="classTable">
        <ReportList />
      </div>
    </div>
  );
}
export default ReportView;
