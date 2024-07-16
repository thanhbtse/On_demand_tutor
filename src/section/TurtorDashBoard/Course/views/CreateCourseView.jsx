import React from "react";
import CreateCourse from "../createCourse.jsx";

function CreateCourseView() {
  return (
    <div className="min-w-[250px]">
      <div className="p-5" data-testid="classTable">
        <CreateCourse />
      </div>
    </div>
  );
}
export default CreateCourseView;
