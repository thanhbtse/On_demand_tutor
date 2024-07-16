import { Input, Select, Form, Button} from 'antd';
import PropTypes from "prop-types";
import { useEffect } from 'react';
import useTutor from '../../../hooks/useTutor';

const { Option } = Select;

const FormCreateNewCourse = ({ form, handleCreate }) => {
    const { tutorList, fetchTutorList } = useTutor();

    useEffect(() => {
        fetchTutorList();
    }, []);

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={handleCreate}
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

FormCreateNewCourse.propTypes = {
    form: PropTypes.object,
    handleCreate: PropTypes.func.isRequired,
};

export default FormCreateNewCourse;
