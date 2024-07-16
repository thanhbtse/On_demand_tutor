import { Input, Select, Form, Button } from 'antd';
import PropTypes from "prop-types";
import { useEffect } from 'react';
import useTutor from '../../../hooks/useTutor';

const { Option } = Select;

const FormCreateCourse = ({ form, handleCreate }) => {
    const { tutorList, fetchTutorList } = useTutor();

    useEffect(() => {
        fetchTutorList();
    }, []);

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
        >
            <Form.Item
                name="title"
                label="Title"
                rules={[
                    { required: true, message: "Please input the course title!" },
                    { min: 3, message: "Title must be at least 3 characters" }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="description"
                label="Description"
                rules={[
                    { required: true, message: "Please input the description!" },
                    { min: 3, message: "Description must be at least 3 characters" }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="tutor"
                label="Tutor"
                rules={[{ required: true, message: "Please select a tutor!" }]}
            >
                <Select placeholder="Choose a tutor">
                    {tutorList.map(tutor => (
                        <Option key={tutor._id} value={tutor._id}>{tutor.info.name}</Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                name="price"
                label="Price"
                rules={[
                    { required: true, message: "Please input the price!" },
                    { pattern: /^[0-9]+(\.[0-9]{1,2})?$/, message: "Price must be a valid number" }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="image"
                label="Image"
                rules={[
                    { required: true, message: "Please input the image URL!" },
                    { type: 'url', message: "Image must be a valid URL" }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item>
                <Button style={{backgroundColor:"palevioletred"}} type='primary' htmlType='submit'>Submit</Button>
            </Form.Item>
        </Form>
    );
};

FormCreateCourse.propTypes = {
    form: PropTypes.object,
    handleCreate: PropTypes.func.isRequired,
};

export default FormCreateCourse;
