import { Helmet } from "react-helmet";

import { TurtorDetailView } from "../section/Turtor/views";

function TutorSearchPage() {
  return (
    <div>
      <Helmet>
        <title>
          Gia sư online
        </title>
      </Helmet>
      <TurtorDetailView />
    </div>
  );
}

export default TutorSearchPage;



