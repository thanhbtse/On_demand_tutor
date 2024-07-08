import { Helmet } from "react-helmet";
import HomeView from "../section/HomePage/views/Home";

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Gia Sư Online - Dạy Kèm Trực Tuyến - GiaSuOnline.vn</title>
      </Helmet>
      <HomeView />
    </div>
  );
}

export default HomePage;