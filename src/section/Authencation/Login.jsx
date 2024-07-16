import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, Radio, notification } from "antd";
import "tailwindcss/tailwind.css";
import { register } from "../../api/authen.js";
import useAuth from "../../hooks/useAuth.js";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { login } from "../../api/authen.js";
const LoginForm = () => {
  const { infoUser } = useAuth();
  const [values, setValues] = useState({});
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form] = Form.useForm();
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSignin = async (formValues) => {
    if (isLoggingIn) {
      return;
    }
    try {
      setIsLoggingIn(true);
      const { email, password } = formValues;

      const response = await login(email, password);

      console.log("check res", response);

      if (response && response.status === 200) {
        notification.success({
          message: "Login Successful",
          description: "You have successfully logged in.",
          duration: 2,
        });
        form.resetFields();
        const jwtToken = response.data.token;
        Cookies.set("token", jwtToken, { expires: 1 });
        if (rememberMe) {
          Cookies.set("email");
          Cookies.set("password");
        }
        const authStore = useAuth.getState();
        authStore.login();
        navigate("/");
      }
    } catch (error) {
      console.log(":>> error", error);
      setIsLoggingIn(false);
      notification.error({
        message: "Login Failed",
        description: error.response.data.message,
        duration: 2,
      });
    }
  };

  const onFinish = (values) => {
    setValues(values);
    if (values.email && values.password) {
      handleSignin(values);
    }
  };

  return (
    <Form form={form} className="space-y-6" onFinish={onFinish}>
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
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Mật Khẩu *"
          suffix={
            <>
              {showPassword ? (
                <EyeInvisibleOutlined onClick={togglePassword} />
              ) : (
                <EyeOutlined onClick={togglePassword} />
              )}
            </>
          }
        />
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
        <p className="text-center mt-5">
          Or
          <Link to="/dang-ky" className="text-pink-500 hover:underline px-2">
            Register now
          </Link>
        </p>
      </Form.Item>
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
    </div>
  );
};

export default Login;
