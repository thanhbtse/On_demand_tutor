import React from "react";
import useAuth from "../../hooks/useAuth";
import { Form, Input, Button, Radio, notification } from "antd";
import { register } from "../../api/authen.js";
import { Link } from "react-router-dom";

function RegisterForm() {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const { name, email, password, role } = values;
    console.log("check data", values);
    try {
      const res = await register(name, email, password, role);
      console.log("check res", res);
      if (res && res.status === 201) {
        notification.success({
          message: "Registration Successful",
          description: res.data.message,
        });
        form.resetFields(); // Reset the form fields after successful registration
      }
    } catch (error) {
      console.log(":>> error", error.response.data.message);
      notification.error({
        message: "Registration Failed",
        description: error.response.data.message, // Ensure this path is correct based on your error object structure
      });
    }
  };
  return (
    <Form form={form} className="space-y-6 " onFinish={onFinish}>
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input placeholder="Tên *" />
      </Form.Item>
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
      <Form.Item
        name="role"
        rule={[
          {
            required: true,
            message: "Please select your role!",
          },
        ]}
      >
        <Radio.Group>
          <Radio value="student">I am a customer</Radio>
          <Radio value="tutor">I am a vendor</Radio>
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
      <p className="text-center mt-5">
        Or
        <Link to="/dang-nhap" className="text-pink-500 hover:underline px-2">
          Login now
        </Link>
      </p>
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
}
export default RegisterForm;
