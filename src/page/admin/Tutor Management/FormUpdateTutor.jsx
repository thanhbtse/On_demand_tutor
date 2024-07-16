import { Input, Form, Button } from 'antd';
import PropTypes from "prop-types";
import { useEffect } from 'react';
import useTutor from '../../../hooks/useTutor';


const FormUpdateTutor = ({ formEdit, editValue, handleUpdate }) => {
    const {  fetchTutorList } = useTutor();

    useEffect(() => {
        fetchTutorList();
    }, []);

    useEffect(() => {
        if (formEdit && editValue) {
            formEdit.resetFields();
        }
    }, [formEdit, editValue]);

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
            form={formEdit}
            layout="vertical"
            onFinish={handleUpdate}
            initialValues={editValue}
        >
           <Form.Item
        name={['info', 'name']}
        label="Name"
        rules={[
          { required: true, message: "Please input the name!" },
          { min: 3, message: "Name must be at least 3 characters" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['info', 'image']}
        label="Image"
        rules={[
          { required: true, message: "Please input the image URL!" },
          { type: 'url', message: "Image must be a valid URL" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['info', 'address']}
        label="Address"
        rules={[
          { required: true, message: "Please input the address!" },
          {
            pattern: /^[#.0-9a-zA-Z\s,-]+$/,
            message: "Please input a valid address",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[
          { required: true, message: "Please input the Description!" },
          { min: 3, message: "Description must be at least 3 characters" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="price"
        label="Price"
        rules={[
          { required: true, message: "Please input the price!" },
          { type: 'number', message: "Price must be a number" },
        ]}
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

FormUpdateTutor.propTypes = {
    formEdit: PropTypes.object.isRequired,
    editValue: PropTypes.object.isRequired,
    handleUpdate: PropTypes.func.isRequired,
};

export default FormUpdateTutor;
