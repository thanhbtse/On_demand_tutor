import { Input, Select, Form, Button, Space } from "antd";
import PropTypes from "prop-types";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

const FormCreateUser = ({ form, handleCreate }) => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      layout="vertical"
      onFinish={handleCreate}
      style={{ maxWidth: "600px", margin: "0 auto" }}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[
          { required: true, message: "Please input the name!" },
          { min: 3, message: "Name must be at least 3 characters" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: "Please input the email!" },
          { type: "email", message: "Please input a valid email!" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          { required: true, message: "Please input the password!" },
          { min: 6, message: "Password must be at least 6 characters" },
          { pattern: /^(?=.*[A-Z]).+$/, message: "Password must contain at least one uppercase letter" },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="role"
        label="Role"
        rules={[{ required: true, message: "Please select the role!" }]}
      >
        <Select>
          <Option value="admin">Admin</Option>
          <Option value="guest">Guest</Option>
          <Option value="tutor">Tutor</Option>
          <Option value="student">Student</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="degree"
        label="Degree"
        rules={[{ required: true, message: "Please input the degree!" }]}
      >
        <Input />
      </Form.Item>
      <Form.List
        name="skills"
        rules={[
          {
            validator: async (_, skills) => {
              if (!skills || skills.length === 0) {
                return Promise.reject(
                  new Error("Please input at least one skill!")
                );
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }) => (
          <>
            <label>Skills</label>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Space
                key={key}
                style={{ display: "flex", marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name]}
                  fieldKey={[fieldKey]}
                  rules={[{ required: true, message: "Please input a skill!" }]}
                >
                  <Input placeholder="Skill" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Skill
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item
        name="identityInfo"
        label="Citizen Id"
        rules={[
          { required: true, message: "Please input the identity info!" },
          { min: 6, message: "Citizen Id must be at least 6 characters" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          style={{ backgroundColor: "palevioletred" }}
          htmlType="submit"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

FormCreateUser.propTypes = {
  form: PropTypes.object,
  setCreateModal: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired,
};

export default FormCreateUser;
