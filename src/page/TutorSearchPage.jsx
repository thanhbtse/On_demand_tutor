import { Helmet } from "react-helmet";
import HomeView from "../section/HomePage/views/Home";
import { TutorView } from "../section/FindTutor/views";

function TutorSearchPage() {
  return (
    <div>
      <Helmet>
        <title>
          Tìm Gia Sư Online & Lớp Dạy Kèm Trực Tuyến - GiaSuOnline.vn
        </title>
      </Helmet>
      <TutorView />
    </div>
  );
}

export default TutorSearchPage;
