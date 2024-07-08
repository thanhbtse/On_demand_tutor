import React from "react";
import { Helmet } from "react-helmet";
import { AuthenView } from "../section/Authencation/views";

function AccountPage() {
  return (
    <div>
      <Helmet>
        <title>Tài khoản [Đăng kí | Đăng nhập]- GiaSuOnline.vn</title>
      </Helmet>
      <AuthenView />
    </div>
  );
}

export default AccountPage;
