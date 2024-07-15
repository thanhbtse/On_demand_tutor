import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Radio, notification } from "antd";
import "tailwindcss/tailwind.css";
import { login, register } from "../../api/authen.js";
import useAuth from "../../hooks/useAuth.js";
import Cookies from "js-cookie";

const LoginForm = () => {
  const [values, setValues] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const handleSignin = async (formValues) => {
    if (isLoggingIn) {
      return;
    }
    try {
      setIsLoggingIn(true);
      const { email, password } = formValues;
      const res = await login(email, password);
      console.log(">>> res", res);
      if (res && res.status === 200 && res.data.token) {
        notification.success({
          message: "Login Successful",
          description: "You have successfully logged in.",
          duration: 1,
        });
        const jwtToken = res.data.token
        Cookies.set("token", jwtToken, { expires: 7 });
        if (rememberMe) {
          Cookies.set("email");
          Cookies.set("password");
        }
        const authStore = useAuth.getState();
        authStore.login();
      }
    } catch (err) {
      notification.error({
        message: "Login Failed",
        description: "Username or password is invalid. Please try again.",
        duration: 1,
      });
      console.error(">>> Error signing server", err);
      setIsLoggingIn(false);
    }
  };

  const onFinish = (values) => {
    setValues(values);
    if (values.email && values.password) {
      handleSignin(values);
    }
  };

  return (
    <Form className="space-y-6" onFinish={onFinish}>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: "Please input your username or email!" },
        ]}
        initialValue={email}
      >
        <Input placeholder="Tên tài khoản hoặc địa chỉ email *" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
        initialValue={password}
      >
        <Input.Password placeholder="Mật khẩu *" />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox onChange={(e) => setRememberMe(e.target.checked)}>
          Ghi nhớ mật khẩu
        </Checkbox>
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
