import React from "react";
import { Helmet } from "react-helmet";
import { ProfileView } from "../section/Profile/views";

function ProfilePage() {
  return (
    <div>
      <Helmet>
        <title>Hồ sơ - GiaSuOnline.vn</title>
      </Helmet>
      <ProfileView />
    </div>
  );
}

export default ProfilePage;
