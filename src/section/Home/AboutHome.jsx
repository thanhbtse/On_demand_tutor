import { Col, Row } from "antd";
import React from "react";

function Description() {
  return (
    <div className="flex flex-col space-y-10 px-[400px] py-20">
      {/* This is the first section of the Description component */}

      <div className="md:flex bg-[#36174d] text-white text-[25px] font-bold items-center justify-center h-[250px]">
        <h1>Bạn Đang Cần Tìm Gia Sư Online?</h1>
      </div>
      <div className="text-[#36174d]">
        <Row gutter={[48, 8]}>
          <Col
            span={6}
            className="items-center justify-center text-center space-y-4"
          >
            <p className="font-bold text-xl">Tìm Kiếm</p>
            <p className="text-base">
              Sử dụng các bộ lọc để tìm các lớp học và gia sư phù hợp với nhu
              cầu của bạn.
            </p>
          </Col>
          <Col
            span={6}
            className="items-center justify-center text-center space-y-4"
          >
            <p className="font-bold text-xl">Lựa Chọn</p>
            <p className="text-base">
              Lựa chọn những gia sư phù hợp, liên hệ trực tiếp để trao đổi thêm
              trước khi quyết định.
            </p>
          </Col>
          <Col
            span={6}
            className="items-center justify-center text-center space-y-4"
          >
            <p className="font-bold text-xl">Bắt Đầu</p>
            <p className="text-base">
              Bắt đầu học ngay khi tìm được gia sư phù hợp, có thể học online
              hoặc offline tại nhà.
            </p>
          </Col>
          <Col
            span={6}
            className="items-center justify-center text-center space-y-4"
          >
            <p className="font-bold text-xl">Đánh Giá</p>
            <p className="text-base">
              Bạn có thể để lại đánh giá nhằm phản ánh đúng cũng như giúp cải
              thiện chất lượng giảng dạy.
            </p>
          </Col>
        </Row>
      </div>

      {/* This is the second section of the Description component */}

      <div>
        <div className="md:flex bg-[#36174d] text-white text-[25px] font-bold items-center justify-center h-[250px]">
          <h1>Bạn Đang Cần Đăng Ký Làm Gia Sư Online?</h1>
        </div>
      </div>
      <div className="text-[#36174d]">
        <Row gutter={[48, 8]}>
          <Col
            span={6}
            className="items-center justify-center text-center space-y-4"
          >
            <p className="font-bold text-xl">Đăng Ký Tài Khoản</p>
            <p className="text-base">
              Bất kỳ ai cũng có thể đăng ký để trở thành thành viên gia sư
              online.
            </p>
          </Col>
          <Col
            span={6}
            className="items-center justify-center text-center space-y-4"
          >
            <p className="font-bold text-xl">Tạo Hồ Sơ Gia Sư</p>
            <p className="text-base">
              Cập nhật các thông tin để xây dựng bộ hồ sơ gia sư ấn tượng
            </p>
          </Col>
          <Col
            span={6}
            className="items-center justify-center text-center space-y-4"
          >
            <p className="font-bold text-xl">Mở Lớp Dạy Kèm</p>
            <p className="text-base">
              Tạo các lớp học để các phụ huynh và học sinh có thể tìm thấy bạn.
            </p>
          </Col>
          <Col
            span={6}
            className="items-center justify-center text-center space-y-4"
          >
            <p className="font-bold text-xl">Bắt Đầu</p>
            <p className="text-base">
              Bắt đầu công việc gia sư ngay khi có học sinh.
            </p>
          </Col>
        </Row>
      </div>

      {/* This is the third section of the Description component */}

      <div className="md:flex bg-[#36174d] text-white text-[25px] font-bold items-center justify-center h-[250px]">
        <h1>Gia Sư Online và Những Lợi Ích</h1>
      </div>
      <div className="text-[#36174d]">
        <Row gutter={[48, 8]}>
          <Col
            span={6}
            className="items-center justify-center text-center space-y-4"
          >
            <p className="font-bold text-xl">Không Giới Hạn</p>
            <p className="text-base">
              Một cô giáo ở Hà Giang có thể dạy kèm cho một học sinh ở Cà Mau.
            </p>
            <p className="text-base">
              Một sinh viên năm nhất vẫn có thể xây dựng hồ sơ gia sư chất lượng
              như một giáo viên 30 năm kinh nghiệm.
            </p>
          </Col>
          <Col
            span={6}
            className="items-center justify-center text-center space-y-4"
          >
            <p className="font-bold text-xl">Linh Hoạt</p>
            <p className="text-base">
              Bạn có thể dạy kèm hoặc học cùng gia sư ở bất kỳ nới đâu, bất kỳ
              lúc nào.
            </p>
            <p className="text-base">
              Con bạn vẫn có thể học cùng các gia sư trong khi đang đi du lịch
              cùng gia đình.
            </p>
          </Col>
          <Col
            span={6}
            className="items-center justify-center text-center space-y-4"
          >
            <p className="font-bold text-xl">Nhanh Chóng</p>
            <p className="text-base">
              Phụ huynh học sinh có thể tìm thấy thông tin của các gia sư và
              liên hệ ngay lập tức để có thể bắt đầu lớp học.
            </p>
            <p className="text-base">
              Bạn thậm chí không cần gặp mặt trực tiếp vẫn có thể lựa chọn và
              bắt đầu cho con học cùng gia sư.
            </p>
          </Col>
          <Col
            span={6}
            className="items-center justify-center text-center space-y-4"
          >
            <p className="font-bold text-xl">Tiết Kiệm</p>
            <p className="text-base">
              Thầy cô giáo không mất công di chuyển tới nhà phụ huynh học sinh.
            </p>
            <p className="text-base">
              Phụ huynh không mất thời gian chờ thầy cô dạy xong để đi ra ngoài
              hay làm việc khác.
            </p>
          </Col>
        </Row>
      </div>

      {/* This is the fourth section of the Description component */}
      <div className="space-y-4 text-[#36174d]">
        <p className="text-xl font-bold">Gia Sư Online Là Gì?</p>
        <div className="text-base space-y-4">
          <p>
            Gia sư online là người hoặc nguồn tài liệu học trực tuyến được cung
            cấp qua internet để hỗ trợ học viên trong việc cải thiện kiến thức,
            kỹ năng hoặc sự hiểu biết về một lĩnh vực học tập cụ thể.
          </p>
          <p>
            Gia sư online có thể là các chuyên gia trong một hoặc nhiều lĩnh
            vực, hoặc là các nền tảng trực tuyến kết nối học viên với gia sư.
          </p>
          <p>
            Hình thức học trực tuyến này thường cho phép học viên và gia sư gặp
            nhau qua các phương tiện truyền thông, như video call, chat, hoặc
            học qua các ứng dụng và trang web chuyên về giáo dục trực tuyến.
          </p>
          <p>
            Gia sư online cung cấp sự tiện lợi và linh hoạt, cho phép học viên
            tham gia học tập từ bất kỳ đâu có kết nối internet, và đây là một
            hình thức phổ biến trong giáo dục hiện đại.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Description;
