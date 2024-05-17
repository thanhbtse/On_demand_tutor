import { Helmet } from "react-helmet";
import HomeView from "../../src/section/Home/views/Home";

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Gia Sư Online</title>
      </Helmet>
      <HomeView />
    </div>
  );
}

export default HomePage;