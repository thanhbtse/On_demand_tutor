import { Helmet } from "react-helmet";
import CourseTableView from "../../section/TurtorDashBoard/Course/views/courseTableView.jsx";
import CreateCourseView from "../../section/TurtorDashBoard/Course/views/CreateCourseView.jsx";

function CreateNewCourse() {
  return (
    <div>
      <Helmet>
        <title>Create-New-Course - GiaSuOnline.vn</title>
      </Helmet>
      <CreateCourseView />
    </div>
  );
}
export default CreateNewCourse;
