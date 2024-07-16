import { Input, Select, Form, Button, Space } from 'antd';
import PropTypes from "prop-types";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useEffect } from 'react';



const {Option} = Select
const FormUpdateUser = ({formEdit, editValue,handleUpdate}) => {
    useEffect(() => {
        if (formEdit && editValue) {
            formEdit.resetFields();
        }
    }, [formEdit, editValue]);
    return (
        <Form
                    form={formEdit}
                    layout="vertical"
                    initialValues={editValue ? editValue : null}
                    onFinish={handleUpdate}
                >
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true, message: "Please input the name!" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, message: "Please input the email!" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                    hidden
                        name="password"
                        label="Password"
                        rules={[{ required: true, message: "Please input the password!" }]}
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
                                return Promise.reject(new Error('Please input at least one skill!'));
                            }
                        },
                    },
                ]}
            >
                {(fields, { add, remove }) => (
                    <>
                        <label>Skills</label>
                        {fields.map(({ key, name, fieldKey, ...restField }) => (
                            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                <Form.Item
                                    {...restField}
                                    name={[name]}
                                    fieldKey={[fieldKey]}
                                    rules={[{ required: true, message: 'Please input a skill!' }]}
                                >
                                    <Input placeholder="Skill" />
                                </Form.Item>
                                <MinusCircleOutlined onClick={() => remove(name)} />
                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add Skill
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
                    <Form.Item
                        name="identityInfo"
                        label="Citizen Id"
                        rules={[{ required: true, message: "Please input the identity info!" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                       
                    >
                        <Button htmlType='submit' >Submit</Button>
                    </Form.Item>
                </Form>
            
    );
};

FormUpdateUser.propTypes = {
    formEdit: PropTypes.object.isRequired,
    editValue: PropTypes.array.isRequired,
    handleUpdate: PropTypes.func.isRequired,
};

export default FormUpdateUser;