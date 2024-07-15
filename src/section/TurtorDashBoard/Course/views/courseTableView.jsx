import React from "react";
import CourseList from "../courseCard.jsx";

function CourseTableView() {
  return (
    <div className="min-w-[250px]">
     
      <div className="p-5" data-testid="classTable">
        <CourseList />
      </div>
    </div>
  );
}
export default CourseTableView;
