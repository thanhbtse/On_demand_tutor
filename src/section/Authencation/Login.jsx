import React from "react";
import { Form, Input, Button, Checkbox, Radio } from "antd";
import "tailwindcss/tailwind.css";

const LoginForm = () => {
  return (
    <Form className="space-y-6">
      <Form.Item
        name="username"
        rules={[
          { required: true, message: "Please input your username or email!" },
        ]}
      >
        <Input placeholder="Tên tài khoản hoặc địa chỉ email *" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Mật khẩu *" />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Ghi nhớ mật khẩu</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="bg-pink-500 text-white w-full"
        >
          Đăng nhập
        </Button>
      </Form.Item>
      <Form.Item>
        <a className="text-pink-500">Quên mật khẩu?</a>
      </Form.Item>
    </Form>
  );
};

const RegisterForm = () => {
  return (
    <Form className="space-y-6">
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input placeholder="Địa chỉ email *" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Mật khẩu *" />
      </Form.Item>
      <Form.Item name="role">
        <Radio.Group>
          <Radio value="customer">I am a customer</Radio>
          <Radio value="vendor">I am a vendor</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="bg-pink-500 text-white w-full"
        >
          Đăng ký
        </Button>
      </Form.Item>
      <p className="text-gray-500 text-sm">
        Thông tin cá nhân của bạn sẽ được sử dụng để tăng cường trải nghiệm sử
        dụng website, để quản lý truy cập vào tài khoản của bạn, và cho các mục
        đích cụ thể khác được mô tả trong{" "}
        <a className="text-pink-500" href="#">
          chính sách riêng tư
        </a>{" "}
        của chúng tôi.
      </p>
    </Form>
  );
};

const Login = () => {
  return (
    <div className="flex justify-center space-x-8 p-8">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-[#36174d] mb-4">Đăng nhập</h2>
        <LoginForm />
      </div>
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-[#36174d] mb-4">Đăng ký</h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Login;
