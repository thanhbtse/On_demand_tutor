import { Input, Select, Form, Button } from 'antd';
import PropTypes from "prop-types";
import { useEffect } from 'react';
import useTutor from '../../../hooks/useTutor';

const { Option } = Select;

const FormUpdateNewCourse = ({ formEdit, editValue, handleUpdate }) => {
    const { tutorList, fetchTutorList } = useTutor();

    useEffect(() => {
        fetchTutorList();
    }, []);

    useEffect(() => {
        if (formEdit && editValue) {
            formEdit.resetFields();
        }
    }, [formEdit, editValue]);

    return (
        <Form
            form={formEdit}
            layout="vertical"
            onFinish={handleUpdate}
            initialValues={{
                title: editValue.title,
                description: editValue.description,
                tutor: editValue.tutor ? editValue.tutor._id : undefined, 
                price: editValue.price,
                image: editValue.image,
            }}
        >
            <Form.Item
                name="title"
                label="Title"
                rules={[{ required: true, message: "Please input the course title!" }]}
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
                rules={[{ required: true, message: "Please input the price!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="image"
                label="Image"
                rules={[{ required: true, message: "Please choose an image!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit'>Submit</Button>
            </Form.Item>
        </Form>
    );
};

FormUpdateNewCourse.propTypes = {
    formEdit: PropTypes.object.isRequired,
    editValue: PropTypes.object.isRequired,
    handleUpdate: PropTypes.func.isRequired,
};

export default FormUpdateNewCourse;
