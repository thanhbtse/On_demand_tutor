import React from "react";
import { SubjectView } from "../section/Subject/views";
import { Helmet } from "react-helmet";

function SubjectPage() {
  return (
    <div>
      <Helmet>
        <title>Tìm Gia Sư Online Theo Môn Học - GiaSuOnline.vn</title>
      </Helmet>
      <SubjectView />
    </div>
  );
}

export default SubjectPage;
