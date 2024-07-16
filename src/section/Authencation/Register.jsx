import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import {
  Form,
  Input,
  Button,
  Radio,
  notification,
  Upload,
  message,
} from "antd";
import { register } from "../../api/authen.js";
import { Link } from "react-router-dom";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

function RegisterForm() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
      return Upload.LIST_IGNORE;
    }
    const isLt5M = file.size / 1024 / 1024 < 5; 
    if (!isLt5M) {
      message.error("Image must smaller than 5MB!");
      return Upload.LIST_IGNORE;
    }
    return true;
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (newFileList.length > 0) {
      form.setFieldsValue({ image: newFileList[0].originFileObj });
    } else {
      form.setFieldsValue({ image: null });
    }
  };

  const onFinish = async (values) => {
    if (fileList.length === 0) {
      notification.error({
        message: "Registration Failed",
        description: "Please upload an image before registering.",
      });
      return; // Prevent form submission if no image is uploaded
    }
    setLoading(true);
    console.log("check values", values);
    try {
      const res = await register(values.name, values.email, values.password, values.role, values.image);
      if (res && res.status === 201) {
        notification.success({
          message: "Registration Successful",
          description: res.data.message,
        });
        form.resetFields();
        setFileList([]);
      }
    } catch (error) {
      notification.error({
        message: "Registration Failed",
        description: error.response.data.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

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
        name="image"
        rules={[{ required: true, message: "Please upload your avatar!" }]}
      >
        <div className="space-y-4">
          <p className="font-bold">Chọn ảnh đại diện</p>
          <Upload
            name="image"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
            fileList={fileList}
          >
            {fileList.length >= 1 ? (
              <img
                src={URL.createObjectURL(fileList[0].originFileObj)}
                alt="avatar"
                style={{ width: "100%" }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
        </div>
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
