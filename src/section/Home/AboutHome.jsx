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

      {/* This is the fifth section of the Description component */}

      <div className="space-y-4 text-[#36174d]">
        <p className="text-xl font-bold">Tiện Lợi Và Linh Hoạt</p>
        <div className="text-base space-y-4">
          <p>
            Học viên có thể tham gia học từ bất kỳ đâu có kết nối internet và
            lựa chọn lịch học phù hợp.
          </p>
          <p>
            Tính tiện lợi và linh hoạt của gia sư online là một trong những ưu
            điểm quan trọng của hình thức dạy kèm này.
          </p>
          <p>
            Gia sư online cho phép học viên tham gia học từ bất kỳ đâu có kết
            nối internet và vào bất kỳ thời điểm nào phù hợp với lịch trình của
            họ.
          </p>
          <p>
            Điều này giúp loại bỏ những hạn chế về địa điểm và thời gian mà gia
            sư tại nhà có thể gây ra, như phải di chuyển đến một địa điểm cụ thể
            hoặc phải tuân theo lịch học cố định.
          </p>
          <p>
            Với gia sư online, gia sư hay học sinh không cần phải di chuyển đến
            một địa điểm cụ thể, điều này tiết kiệm thời gian và tiền bạc mà
            người học và gia sư có thể sử dụng cho mục tiêu học tập thay vì di
            chuyển.
          </p>
          <p>
            Cổng thông tin gia sư online giasuonline.vn cho phép học sinh và phụ
            huynh truy cập vào một mạng lưới rộng lớn các gia sư chuyên nghiệp
            từ khắp cả nước, và cả ở nước ngoài.
          </p>
          <p>
            Điều này cung cấp sự đa dạng và cho phép phụ huynh học sinh lựa chọn
            gia sư phù hợp với nhu cầu học tập cụ thể, bất kể môn học hay chủ
            đề.
          </p>
          <p>
            Trong trường hợp phụ huynh hay học sinh không hài lòng với gia sư,
            bạn có thể dễ dàng tìm và chuyển sang gia sư khác mà không phải đối
            mặt với các vấn đề phức tạp liên quan đến địa điểm hoặc hợp đồng
            giữa hai bên.
          </p>
          <p>
            Gia sư online phù hợp với những người có lịch trình biến đổi, như
            người đi làm, sinh viên đại học, hoặc người tham gia các hoạt động
            ngoại khóa.
          </p>
          <p>
            Học viên có thể dễ dàng điều chỉnh lịch học để phù hợp với công việc
            hàng ngày của họ.
          </p>
        </div>
      </div>

      {/* This is the sixth section of the Description component */}

      <div className="space-y-4 text-[#36174d]">
        <p className="text-xl font-bold">Đa Dạng Chương Trình</p>
        <div className="text-base space-y-4">
          <p>
            Tính đa dạng của gia sư online mang lại nhiều lựa chọn cho học viên,
            cho phép họ tìm kiếm và kết nối với gia sư phù hợp với nhu cầu học
            tập cụ thể và khám phá một loạt các chủ đề và kỹ năng khác nhau.
          </p>
          <p>
            Điều này tạo điều kiện thuận lợi cho việc cá nhân hóa học tập và đạt
            được mục tiêu học tập của học viên.
          </p>
          <p>
            Trên các nền tảng giasuonline.vn, học viên có thể tìm thấy gia sư
            chuyên về nhiều chủ đề và môn học khác nhau.
          </p>
          <p>
            Từ toán, văn học, khoa học, đến ngoại ngữ, kỹ năng máy tính, và
            nhiều lĩnh vực khác, các gia sư thành viên kiến thức và kỹ năng
            chuyên môn chuyên sâu luôn sẵn sàng đồng hành cùng quá trình học tập
            của các học viên.
          </p>
          <p>
            Bạn có thể tìm thấy gia sư có kinh nghiệm giảng dạy từ cấp tiểu học
            đến đại học, hoặc có thể là chuyên gia với kinh nghiệm trong ngành
            công nghiệp cụ thể.
          </p>
          <p>
            Không bị giới hạn bởi địa lý, do đó học viên có khả năng kết nối với
            gia sư từ khắp nơi trên thế giới.
          </p>
          <p>
            Điều này có nghĩa là bạn có thể học từ người có văn hóa và ngôn ngữ
            khác nhau, mở ra cơ hội học hỏi và hiểu biết sâu hơn về thế giới.
          </p>
          <p>
            Giasuonline.vn cung cấp các đánh giá và phản hồi từ học viên trước
            đó.
          </p>
          <p>
            Điều này giúp bạn xác định chất lượng của gia sư và lựa chọn người
            phù hợp nhất dựa trên những đánh giá và đánh giá từ người học khác.
          </p>
          <p>
            Với tính đa dạng của gia sư online, bạn có thể dễ dàng tìm gia sư có
            lịch học phù hợp với thời gian và lịch trình của bạn.
          </p>
          <p>
            Điều này giúp bạn tận dụng tối đa thời gian học tập mà không cần
            phải điều chỉnh lịch trình hàng ngày của mình.
          </p>
        </div>
      </div>

      {/* This is the seventh section of the Description component */}

      <div className="space-y-4 text-[#36174d]">
        <p className="text-xl font-bold">Tài Liệu Phong Phú</p>
        <div className="text-base space-y-4">
          <p>
            Gia sư online có thể dễ dàng chia sẻ tài liệu học trực tuyến với học
            viên qua internet.
          </p>
          <p>
            Điều này bao gồm các tài liệu như bài giảng, tài liệu tham khảo,
            sách điện tử, bài kiểm tra mẫu và các tài liệu học tập khác.
          </p>
          <p>
            Học viên có thể truy cập và tải về những tài liệu này từ bất kỳ đâu
            có kết nối internet.
          </p>
          <p>
            Trong quá trình học trực tuyến, gia sư có thể chia sẻ màn hình của
            họ để trình bày các tài liệu trực quan như bài giảng trực tiếp, bảng
            trắng số, hoặc các ứng dụng và trang web có liên quan đến môn học.
          </p>
          <p>
            Học viên có thể xem và tương tác với tài liệu này trực tiếp trong
            phiên học.
          </p>
          <p>
            Học viên có thể sử dụng các công cụ trực tuyến để tương tác với tài
            liệu học. Ví dụ, họ có thể đánh dấu, ghi chú, hoặc thậm chí làm bài
            tập trực tiếp trên các tài liệu số để tăng cường hiểu biết và thực
            hành.
          </p>
          <p>
            Gia sư online thường có khả năng tạo tài liệu tùy chỉnh dựa trên nhu
            cầu của học viên.
          </p>
          <p>
            Điều này giúp tạo ra các tài liệu học tập phù hợp với khả năng và
            mục tiêu học tập cụ thể của từng học viên.
          </p>
        </div>
      </div>

      {/* This is the eighth section of the Description component */}

      <div className="space-y-4 text-[#36174d]">
        <p className="text-xl font-bold">Tiết Kiệm</p>
        <div className="text-base space-y-4">
          <p>
            Với gia sư online, học viên không cần phải di chuyển đến một địa
            điểm cụ thể để gặp gia sư.
          </p>
          <p>
            Điều này loại bỏ thời gian và công sức mà họ thường phải dành để di
            chuyển, bất kể là đến một trung tâm học tập hay địa điểm gia sư tại
            nhà.
          </p>
          <p>
            Một số học viên sống ở khu vực có tình trạng giao thông phức tạp
            hoặc tắc đường, và việc di chuyển có thể tốn thời gian lớn.
          </p>
          <p>
            Gia sư online giúp họ tiết kiệm thời gian này và có thể tập trung
            vào việc học tập.
          </p>
          <p>
            Việc không cần phải di chuyển đến nơi gặp gia sư cũng tiết kiệm tiền
            bạc.
          </p>
          <p>
            Học viên không phải trả chi phí xăng dầu, phí gửi xe, hoặc tiền công
            cộng tàu xe, điều này có thể tích lũy thành một khoản tiền lớn trong
            thời gian dài.
          </p>
          <p>
            Một số khóa học trực tuyến có sẵn tài liệu giáo trình và tài liệu
            tham khảo miễn phí hoặc được tích hợp trong khoản học phí.
          </p>
          <p>
            Điều này giúp học viên tiết kiệm tiền so với việc mua các tài liệu
            giáo trình đặc biệt.
          </p>
          <p>
            Trong trường hợp gia sư tại nhà, có thể xảy ra việc phải chờ đợi khi
            gia sư đến địa điểm học tập.
          </p>
          <p>
            Gia sư online giúp loại bỏ thời gian chờ đợi này, giúp học viên bắt
            đầu phiên học ngay khi đã sắp xếp trước.
          </p>
          <p>
            Học viên có thể lên lịch học trực tuyến vào bất kỳ thời điểm nào phù
            hợp với lịch trình của họ, không cần phải cắt giữa các hoạt động
            khác nhau để đi học.
          </p>
        </div>
      </div>

      {/* This is the ninth section of the Description component */}

      <div className="space-y-16">
        <div className="md:flex bg-[#36174d] text-white text-[25px] font-bold items-center justify-center h-[250px]">
          <h1>Giới Thiệu Về Chúng Tôi – GiaSuOnline.Vn</h1>
        </div>
        <div className="text-[#36174d] space-y-6 text-base">
          <p>
            GiaSuOnline.vn – Cổng thông tin online kết nối gia sư và phụ huynh
            học sinh, nơi chúng tôi nỗ lực để đơn giản hóa quá trình tìm kiếm
            gia sư online của phụ huynh học sinh và dịch vụ gia sư online dạy
            kèm trực tuyến của các gia sư.
          </p>
          <p>
            Với mục tiêu mang lại giá trị thực sự cho cả gia sư và học viên,
            chúng tôi tự hào giới thiệu một nền tảng độc đáo với những chức năng
            và lợi ích đặc biệt dành cho phụ huynh học sinh và các gia sư.
          </p>
        </div>
      </div>

      {/* This is the tenth section of the Description component */}
      <div className="space-y-4 text-[#36174d]">
        <p className="text-xl font-bold">Chức Năng Chính của GiaSuOnline.vn</p>
        <p className="text-xl font-bold">Tạo Hồ Sơ Gia Sư</p>
        <div className="text-[#36174d] space-y-6 text-base">
          <p>
            Các gia sư có thể tạo hồ sơ cá nhân chi tiết trên trang web của
            chúng tôi, mô tả kiến thức, kinh nghiệm và môn học mà họ dạy.
          </p>
          <p>
            Dữ liệu hồ sơ gia sư online chất lượng sẽ giúp các gia sư tạo ấn
            tượng mạnh mẽ và thu hút nhiều học viên hơn.
          </p>
        </div>
      </div>

      {/* This is the 11 section of the Description component*/}
      <div className="space-y-4 text-[#36174d]">
        <p className="text-xl font-bold">Tạo Lớp Dạy Kèm Online</p>
        <div className="text-[#36174d] space-y-6 text-base">
          <p>
            Gia sư có thể tạo các lớp học dạy kèm trực tuyến dưới dạng các sản
            phẩm.
          </p>
          <p>
            Họ có quyền quyết định môn học, thời gian, giá cả và số lượng học
            viên cho mỗi lớp.
          </p>
          <p>
            Dữ liệu các lớp dày kèm online mang lại sự linh hoạt cho gia sư
            trong việc quản lý lịch trình dạy học của họ.
          </p>
        </div>
      </div>

      {/* This is the 12 section of the Description component**/}
      <div className="space-y-4 text-[#36174d]">
        <p className="text-xl font-bold">Tìm Kiếm Gia Sư và Lớp Học</p>
        <div className="text-[#36174d] space-y-6 text-base">
          <p>
            Phụ huynh và học sinh có thể tìm kiếm và duyệt qua danh sách các gia
            sư và lớp học trực tuyến dựa trên môn học, khu vực, giá cả, và nhiều
            tiêu chí khác.
          </p>
          <p>
            Chức năng chọn lọc và tìm kiếm giúp phụ huynh học sinh tìm được lựa
            chọn phù hợp nhất với nhu cầu của mình.
          </p>
        </div>
      </div>

      {/* */}
      <div className="space-y-4 text-[#36174d]">
        <p className="text-xl font-bold">Tương Tác Trực Tiếp</p>
        <div className="text-[#36174d] space-y-6 text-base">
          <p>
            Chúng tôi cung cấp các phương tiện để phụ huynh và học sinh có thể
            liên hệ và tương tác trực tiếp với gia sư.
          </p>
          <p>
            Họ có thể trò chuyện, thảo luận chi tiết về nội dung học tập và sắp
            xếp lịch học.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Description;
