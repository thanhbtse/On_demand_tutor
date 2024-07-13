import React from "react";
import { Form, Input, Button, Upload, Avatar, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";

function Setting() {
  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <div className="flex flex-col items-center">
            <Avatar
              size={150}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7rHb3Lmhnhau0CLSdDWBu3f4RKAiXHEV7hQ&s"
              className="mb-4"
            />
            <Upload>
              <Button icon={<UploadOutlined />}>Tải ảnh lên</Button>
            </Upload>
            <p className="text-gray-500 mt-2 text-center">
              Kích thước hình ảnh phải dưới 1MB và tỷ lệ hình ảnh phải là 1:1
            </p>
          </div>
        </Col>
        <Col span={16}>
          <Form layout="vertical">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Họ tên">
                  <Input placeholder="Nhập họ tên" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label="Tên người dùng">
              <Input placeholder="Nhập tên người dùng của bạn" />
            </Form.Item>
            <Form.Item label="Email">
              <Input placeholder="Địa chỉ email" />
            </Form.Item>
            <Form.Item label="Tiêu đề">
              <Input.TextArea
                placeholder="Tiêu đề, nghề nghiệp hoặc tiểu sử ngắn"
                maxLength={50}
                showCount
              />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Lưu thay đổi
            </Button>
          </Form>
        </Col>
      </Row>
      <h3 className="text-lg font-semibold my-4">Đổi mật khẩu</h3>
      <Form layout="vertical">
        <Form.Item label="Mật khẩu hiện tại">
          <Input.Password placeholder="Mật khẩu" />
        </Form.Item>
        <Form.Item label="Mật khẩu mới">
          <Input.Password placeholder="Mật khẩu" />
        </Form.Item>
        <Form.Item label="Xác nhận mật khẩu">
          <Input.Password placeholder="Xác nhận mật khẩu mới" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Đổi mật khẩu
        </Button>
      </Form>
    </div>
  );
}

export default Setting;
