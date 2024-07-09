import React from "react";
import { Breadcrumb, Image, Layout } from "antd";
import {
  EnvironmentFilled,
  MailFilled,
  MobileFilled,
  StarFilled,
} from "@ant-design/icons";
import ProductList from "./productList";

const { Header, Content, Footer } = Layout;
function TurtorDetail() {
  return (
    <Layout>
      <Header className="bg-white border-b-2">
        <Breadcrumb className="py-5 mx-auto max-w-screen-xl">
          <Breadcrumb.Item>
            <a href="/" style={{ color: "#ff4778" }} className="text-base">
              Trang chủ
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a
              href="/tim-gia-su-online"
              style={{ color: "#ff4778" }}
              className="text-base"
            >
              Gia-su
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <p className="text-black font-bold text-base">Nguyễn Thị Diễm</p>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Header>
      <Content className="px-4 sm:px-6 md:px-8 lg:mx-[50px] xl:mx-[100px] 2xl:mx-[300px] bg-white">
        <div className="py-10">
          <div className="border-2 py-4 px-8">
            <div className="flex flex-row">
              <div>
                <Image
                  src="https://secure.gravatar.com/avatar/4c80a9256c059362de301ebd615c3308?s=96&d=mm&r=g"
                  style={{ width: "150px", height: "150px" }}
                />
              </div>
              <div className="ml-10 mt-2 flex flex-col space-y-3">
                <p className="text-2xl font-bold">Nguyễn Thị Diễm</p>
                <div className="flex flex-row space-x-2 text-base">
                  <EnvironmentFilled />
                  <p className="text-base">
                    46, đường số 18, khu phố 5, Linh Trung, Thủ Đức, Linh Trung,
                    Thủ Đức, Thành Phố Hồ Chí Minh, Việt Nam
                  </p>
                </div>
                <div className="flex flex-row space-x-4 text-base">
                  <div className="flex flex-row space-x-2">
                    <MobileFilled />
                    <p className="text-base">0987654321</p>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <MailFilled />
                    <p className="text-base">abc@gmail.com</p>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <StarFilled />
                    <p className="text-base">No ratings found yet!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <ProductList />
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default TurtorDetail;