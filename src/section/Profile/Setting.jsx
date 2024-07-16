import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Upload,
  Avatar,
  Row,
  Col,
  Radio,
  notification,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import useUser from "../../hooks/useUser";
import PropTypes from "prop-types";

function Setting({ infoUser, id }) {
  const { fetchUpdateUser, fectchChangePassword } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const imageURL =
    infoUser && infoUser.image
      ? `http://localhost:5000/${infoUser.image.replace(/\\/g, "/")}`
      : undefined;

  const onEdit = () => {
    setIsEditing(true);
  };
  const handleCancel = () => {
    setIsEditing(false);
  };

  const onSubmit = async (formData) => {
    try {
      const formDataToSend = new FormData();
      if (fileList.length > 0) {
        formDataToSend.append("image", fileList[0].originFileObj);
      }
      // Append other form data
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      await fetchUpdateUser(id, formDataToSend);
      notification.success({
        message: "Update Successful",
        description: "Profile updated successfully",
        duration: 2,
      });
      setIsEditing(false); // Reset editing state
      form.resetFields(); // Reset form fields
    } catch (error) {
      notification.error({
        message: "Update Failed",
        description: "Failed to update profile",
        duration: 2,
      });
    }
  };

  const onChangepassword = async (values) => {
    const { password, newPassword } = values;
    const res = await fectchChangePassword(id, {
      oldPassword: password,
      newPassword,
    });
    if (res && res.status === 200) {
      form.resetFields();
    }
  };
  return (
    <div className="py-20 px-44">
      <Row gutter={16} c>
        <Col span={8} className="mt-10">
          <div className="flex flex-col items-center">
            <Avatar size={150} src={imageURL} className="mb-4" />
            <Upload
              disabled={!isEditing} // Disable upload when not in editing mode
              beforeUpload={() => false}
              fileList={fileList}
              onChange={({ fileList: newFileList }) => setFileList(newFileList)}
            >
              <Button icon={<UploadOutlined />} disabled={!isEditing}>
                Tải ảnh lên
              </Button>
            </Upload>
            <p className="text-gray-500 mt-2 text-center">
              Kích thước hình ảnh phải dưới 5MB và tỷ lệ hình ảnh phải là 1:1
            </p>
          </div>
        </Col>

        <Col span={16} className="space-y-10">
          <div>
            <h3 className="text-lg font-semibold mb-4">Cài đặt tài khoản</h3>
            <Form
              form={form}
              layout="vertical"
              initialValues={infoUser}
              onFinish={onSubmit}
            >
              <Form.Item
                label="Tên người dùng"
                name="name"
                style={{ width: 400 }}
              >
                <Input
                  placeholder="Nhập tên người dùng của bạn"
                  readOnly={!isEditing}
                />
              </Form.Item>
              <Form.Item label="Email" name="email" style={{ width: 400 }}>
                <Input placeholder="Địa chỉ email" readOnly={!isEditing} />
              </Form.Item>
              <Form.Item name="role">
                <Radio.Group disabled={!isEditing}>
                  <Radio value="student">I am a customer</Radio>
                  <Radio value="tutor">I am a vendor</Radio>
                </Radio.Group>
              </Form.Item>
              {!isEditing ? (
                <Button
                  className="bg-[#ff4778] text-white"
                  onClick={onEdit}
                  style={{ marginLeft: 8 }}
                >
                  Cập nhật thông tin
                </Button>
              ) : (
                <div className="space-x-6">
                  <Button
                    className="bg-[#ff4778] text-white"
                    htmlType="submit"
                    disabled={!isEditing}
                  >
                    Lưu thay đổi
                  </Button>
                  <Button
                    className="bg-[#ff4778] text-white"
                    onClick={handleCancel}
                  >
                    Huỷ
                  </Button>
                </div>
              )}
            </Form>
          </div>
          <div>
            <h3 className="text-lg font-semibold my-4">Đổi mật khẩu</h3>
            <Form layout="vertical" onFinish={onChangepassword}>
              <Form.Item
                label="Mật khẩu hiện tại"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your current password!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Mật khẩu"
                  style={{ width: "400px" }}
                />
              </Form.Item>
              <Form.Item
                label="Mật khẩu mới"
                name="newPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your new password!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Mật khẩu"
                  style={{ width: "400px" }}
                />
              </Form.Item>
              <Button className="bg-[#ff4778] text-white" htmlType="submit">
                Đổi mật khẩu
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      {/* <h3 className="text-lg font-semibold my-4">Đổi mật khẩu</h3>
      <Form layout="vertical" onFinish={onChangepassword}>
        <Form.Item
          label="Mật khẩu hiện tại"
          name="password"
          rules={[
            { required: true, message: "Please input your current password!" },
          ]}
        >
          <Input.Password placeholder="Mật khẩu" style={{ width: "400px" }} />
        </Form.Item>
        <Form.Item
          label="Mật khẩu mới"
          name="newPassword"
          rules={[
            { required: true, message: "Please input your new password!" },
          ]}
        >
          <Input.Password placeholder="Mật khẩu" style={{ width: "400px" }} />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Đổi mật khẩu
        </Button>
      </Form> */}
    </div>
  );
}

Setting.propTypes = {
  id: PropTypes.string,
};

export default Setting;
