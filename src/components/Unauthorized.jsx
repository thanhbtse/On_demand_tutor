// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Result } from "antd";

const Unauthorized = () => {
  
  return (
    <Result
      status="403"
      title="403"
      subTitle={t("Sorry, you are not authorized to access this page.")}
      extra={
        <Button type="primary" className="bg-[#1677ff]">
          Back home
        </Button>
      }
    />
  );
};

export default Unauthorized;
