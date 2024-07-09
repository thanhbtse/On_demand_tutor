import React from "react";
import { Tabs, Rate, Image } from "antd";
const { TabPane } = Tabs;

const ViewDetailTutor = () => {
  return (
    <div className="flex flex-col space-y-10 2xl:px-[350px] lg:px-[60px] xl:px-[60px] md:px-[60px] py-20">
      <div className="container mx-auto p-4">
        <div className="flex">
          <div className="w-1/3">
            <Image
              src="https://giasuonline.vn/wp-content/uploads/2023/09/384821589_339766908712324_8739744638444568107_n-300x300.jpg"
              alt="Tutor"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-2/3 pl-4">
            <h1 className="text-2xl font-bold text-[#36174d]">
              Gia sư dạy kèm tiếng anh cho trẻ em
            </h1>
            <div className="mt-2">
              <span className="line-through text-gray-500">200,000.00 ₫</span>
              <span className="text-xl text-red-600 ml-2">150,000.00 ₫</span>
            </div>
            <div className="mt-4 text-[#36174d] flex">
              <span>Danh mục: </span>
              &nbsp;
              <span className="text-[#ff4778]">
                Cho Trẻ Em, Đà Nẵng, Tiếng Anh Cho Trẻ Em
              </span>
            </div>
            <div className="flex items-center mt-4">
              <img
                src="https://giasuonline.vn/wp-content/uploads/2023/09/384821589_339766908712324_8739744638444568107_n-300x300.jpg"
                alt="Tutor Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-2 text-[#36174d]">
                <span>Hà Nguyen</span>
                <Rate disabled defaultValue={4} />
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultActiveKey="1" className="mt-8">
          <TabPane tab="Mô tả" key="1">
            <div className="space-y-2">
              <p>🌟 Tìm Gia Sư Tiếng Anh Cho Trẻ - Hiện Đại & Tận Tâm! 🌟</p>
              <p>
                🌟 Bạn quan tâm đến sự phát triển tiếng Anh của con mình theo
                hướng song ngữ? 🌟 Bạn muốn con bạn được học qua các công nghệ
                mới nhất và phương pháp giảng dạy thú vị? 🌟
              </p>
              <p>
                🌟 Chúng tôi có giải pháp tiếp cận tiên tiến cho bạn và con bạn!
                🌟
              </p>
              <p>
                🌟 Với kinh nghiệm cá nhân đã từng học tại Úc và phát triển con
                trai theo hướng song ngữ, tôi cam kết giúp con bạn: 🌟 Nắm vững
                kiến thức tiếng Anh một cách vui nhộn 🌟 Phát triển kỹ năng đọc,
                viết, nghe, nói thông qua các ứng dụng và công nghệ mới 🌟 Thực
                hành giao tiếp tiếng Anh tự tin qua video call và trò chơi trực
                tuyến 🌟 Đảm bảo con bạn học một cách hiệu quả và đầy thú vị
              </p>
              <p>
                🌟 Tại sao nên lựa chọn tôi? 🌟 Sử dụng công nghệ và ứng dụng
                giáo dục tiên tiến 🌟 Lịch học linh hoạt, có thể học từ xa và
                tùy chỉnh theo lịch của bạn và con bạn 🌟 Đảm bảo con bạn học
                một cách tự nhiên và đầy thú vị
              </p>
              <p>🌟 Liên hệ ngay với tôi qua số điện thoại 0905999845 🌟</p>
              <p>
                🌟 Hãy để tôi giúp con bạn phát triển tiếng Anh qua phương pháp
                hiện đại và thú vị! 🌟
              </p>
            </div>
          </TabPane>
          <TabPane tab="Đánh giá (0)" key="2">
            <p>Chưa có đánh giá nào.</p>
          </TabPane>
          <TabPane tab="Vendor Info" key="3">
            <p>Thông tin nhà cung cấp.</p>
          </TabPane>
          <TabPane tab="More Products" key="4">
            <p>Sản phẩm khác.</p>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default ViewDetailTutor;
