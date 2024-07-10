import React from "react";
import { Tabs, Rate, Image, Breadcrumb } from "antd";
const { TabPane } = Tabs;

const ProductDetail = () => {
  return (
    <div className="flex flex-col space-y-10 2xl:px-[350px] lg:px-[60px] xl:px-[60px] md:px-[60px] py-20">
      <div className="container mx-auto p-4">
        <div className="flex">
          <div className="w-1/4 mr-5">
            <Image
              src="https://giasuonline.vn/wp-content/uploads/2023/12/z4669388861927_c873c924ea0f4f5c939557664bb5dcb9.jpg"
              alt="Tutor"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-3/5 pl-4">
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/">Trang chủ</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="/">Môn học</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="/">Tiếng Trung </a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="/">Lớp dạy kèm Online trực tuyến tiếng trung </a>
              </Breadcrumb.Item>
            </Breadcrumb>
            <h1 className="text-2xl font-bold text-[#36174d]">
              Lớp dạy kèm Online trực tuyến tiếng trung
            </h1>
            <div className="mt-2">
              <span className="text-xl text-black ">150,000.00 ₫</span>
            </div>
            <div className="mt-2 ml-1">
              <p className="text-[#36174d] ">
                Lớp dạy kèm tiếng trung online trực tuyến dành cho các học sinh
                từ lớp 1 đến người đã đi làm.
              </p>
            </div>

            <div className="mt-4 text-[#36174d] flex ml-1">
              <span>Danh mục: </span>
              &nbsp;
              <span className="text-[#ff4778]">Tiếng Trung</span>
            </div>
            <div className="flex items-center mt-4 ml-1">
              <img
                src="https://giasuonline.vn/wp-content/uploads/2023/12/z4669388861927_c873c924ea0f4f5c939557664bb5dcb9.jpg"
                alt="Tutor Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-2 text-[#36174d]">
                <span>Nguyễn Thị Diễm</span>
                <Rate disabled defaultValue={4} />
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultActiveKey="1" className="mt-8">
          <TabPane tab="Mô tả" key="1">
            <div className="space-y-2">
              <p>
                Lớp dạy kèm tiếng trung online trực tuyến dành cho các học sinh
                từ lớp 1 đến người đã đi làm. Hãy đến với trung tâm gia sư bạn
                sẽ có những buổi học năng động, vui vẻ và thoải mái. Đáp ứng mọi
                kiến thức cần có cho học viên, hãy yên tâm khi đồng hành cùng
                trung tâm bạn nhé!
              </p>
            </div>
          </TabPane>
          <TabPane tab="Đánh giá (0)" key="2">
            <div className="leading-10">
              <h2 className="text-2xl font-medium">
                Hãy là người đầu tiên nhận xét “Lớp dạy kèm Online trực tuyến
                tiếng trung”
              </h2>
              <p className="text-lg">
                Email của bạn sẽ không được hiển thị công khai. Các trường bắt
                buộc được đánh dấu *
              </p>
              <div>
                <label className="text-lg font-medium">
                  Đánh giá của bạn *
                </label>
                <Rate />
              </div>
              <div>
                <label className="text-lg font-medium">
                  Nhận xét của bạn *
                </label>
                <textarea className="w-full h-20 p-2 border border-gray-300 rounded-md" />
              </div>
              <div className="flex mt-2">
                <div className="mr-2">
                  <label>Tên *</label>
                  <input className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label>Email *</label>
                  <input className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
              </div>
              <div className="mt-2">
                <input type="checkbox" />
                <label className="ml-2">
                  Lưu tên của tôi, email, và trang web trong trình duyệt này cho
                  lần bình luận kế tiếp của tôi.
                </label>
              </div>
              <button className="mt-2 px-5 py-2 bg-pink-600 text-white rounded-md">
                Gửi đi
              </button>
            </div>
          </TabPane>
          <TabPane tab="Vendor Info" key="3">
            <div>
              <h2 className="text-2xl font-medium leading-loose ">
                Vendor Information
              </h2>
              <ul className="list-disc ml-4 mt-2">
                <li className="text-xl ">
                  <span>Store Name:</span> Nguyễn Thị Diễm
                </li>
                <li className="text-xl">
                  <span className="font-medium">Vendor:</span>{" "}
                  <a href="#" className="text-pink-500">
                    Nguyễn Thị Diễm
                  </a>
                </li>
                <li className="text-xl">
                  <span>Address:</span> 46, đường số 18, khu phố 5, Linh Trung,
                  Thủ Đức, Thành Phố Hồ Chí Minh
                </li>
                <li className="text-xl">No ratings found yet!</li>
              </ul>
            </div>
          </TabPane>
          <TabPane tab="More Products" key="4">
            <p>Sản phẩm khác.</p>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetail;
