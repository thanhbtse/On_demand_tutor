import React from "react";
import { Tabs, Rate, Image, Breadcrumb } from "antd";
import { useParams } from "react-router";
const { TabPane } = Tabs;
function SubjectDetail() {
  const { id } = useParams();
  return (
    <div className="flex flex-col space-y-10 2xl:px-[350px] lg:px-[60px] xl:px-[60px] md:px-[60px] py-20">
      <div className="container mx-auto p-4">
        <div className="flex">
          <div className="w-1/4 mr-5">
            <Image
              src="https://giasuonline.vn/wp-content/uploads/2023/09/01-default-icon-giasuonline.png"
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
                <a href="/mon-hoc">Môn học</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href={`/mon-hoc/${id}/ky-nang`}>Kỹ năng </a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="/">
                  {" "}
                  Lớp Dạy Kèm Online Trực Tuyến Kỹ Năng Thuyết Trình Tại Khu Vực
                  Đà Nẵng
                </a>
              </Breadcrumb.Item>
            </Breadcrumb>
            <h1 className="text-2xl font-bold text-[#36174d] leading-loose">
              Lớp Dạy Kèm Online Trực Tuyến Kỹ Năng Thuyết Trình Tại Khu Vực Đà
              Nẵng{" "}
            </h1>
            <div className="mt-2">
              <span className="text-xl text-[#36174d] ">200,000.00 ₫</span>
            </div>
            <p className="text-[#36174d] my-10">
              Lớp dạy kèm online trực tuyến kỹ năng mềm giúp cho kỹ năng thuyết
              trình và đứng trước đám đông.
            </p>
            <div className="mt-4 text-[#36174d] flex">
              <span>Danh mục: </span>
              &nbsp;
              <span className="text-[#ff4778]">
                Đà Nẵng, Kỹ Năng Mềm, Kỹ Năng Thuyết Trình, Làm MC, Quảng Nam{" "}
              </span>
            </div>
            <div className="flex items-center mt-4">
              <img
                src="data:image/jpeg;base64,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"
                alt="Tutor Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-2 text-[#36174d]">
                <span>Trần Văn Đồng</span>
                <Rate disabled defaultValue={4} />
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultActiveKey="1" className="mt-8">
          <TabPane tab="Mô tả" key="1">
            <div className="space-y-2">
              <p>
                Lớp dạy kèm online trực tuyến kỹ năng mềm giúp cho kỹ năng
                thuyết trình và đứng trước đám đông. Hãy đến với trung tâm gia
                sư ‘Trần Văn Đồng’ để con bạn được trang bị và củng cố kiến thức
                để đứng trước đám đông một cách đầy đủ và chắn chắn.
              </p>
            </div>
          </TabPane>
          <TabPane tab="Đánh giá (0)" key="2">
            <div className="leading-10">
              <h2 className="text-2xl font-medium">
                Hãy là người đầu tiên nhận xét “Lớp Dạy Kèm Online Trực Tuyến Kỹ
                Năng Thuyết Trình Tại Khu Vực Đà Nẵng”
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
                  <span>Store Name:</span> Trần Văn Đồng
                </li>
                <li className="text-xl">
                  <span className="font-medium">Vendor:</span>{" "}
                  <a href="#" className="text-pink-500">
                    Trần Văn Đồng
                  </a>
                </li>
                <li className="text-xl">
                  <span>Address:</span> Tổ 7 Bình Quang, Bình Quế , Thăng Bình ,
                  Quảng Nam
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
}

export default SubjectDetail;
