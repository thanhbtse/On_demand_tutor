import { Input, Form, Button } from 'antd';
import PropTypes from "prop-types";
import { useEffect } from 'react';

const FormCreateTutor = ({ form, handleCreate }) => {
    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={handleCreate}
        >
            <Form.Item
                name={['info', 'name']}
                label="Name"
                rules={[{ required: true, message: "Please input the name!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['info', 'image']}
                label="Image"
                rules={[{ required: true, message: "Please input the image URL!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['info', 'address']}
                label="Address"
                rules={[{ required: true, message: "Please input the address!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="userId"
                label="User Id"
                rules={[{ required: true, message: "Please input the user ID!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="description"
                label="Description"
                rules={[{ required: true, message: "Please input the Description!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="price"
                label="Price"
                rules={[{ required: true, message: "Please input the price!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="moreProducts"
                label="More Products"
                rules={[{ required: true, message: "Please input more products!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit'>Submit</Button>
            </Form.Item>
        </Form>
    );
};

FormCreateTutor.propTypes = {
    form: PropTypes.object,
    handleCreate: PropTypes.func.isRequired,
};

export default FormCreateTutor;
