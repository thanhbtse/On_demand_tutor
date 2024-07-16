import { Helmet } from "react-helmet";
import  CourseTableView  from "../../section/TurtorDashBoard/Course/views/courseTableView.jsx";

function TurtorCourse() {
  return (
    <div>
      <Helmet>
        <title>My Course - GiaSuOnline.vn</title>
      </Helmet>
      <CourseTableView />
    </div>
  );
}
export default TurtorCourse;