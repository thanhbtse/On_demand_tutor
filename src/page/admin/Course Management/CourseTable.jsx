import { Helmet } from "react-helmet";
import { Table, Button, Modal, Form, Popconfirm } from "antd";
import { useEffect, useState } from "react";

import useCourse from "../../../hooks/useCourse";
import FormCreateCourse from "./FormCreateCourse";
import FormUpdateCourse from "./FormUpdateCourse";

function CourseTable() {
  const {
    courseList,
    fetchCourseList,
    createNewCourse,
    updateExistingCourse,
    deleteExistingCourse,
  } = useCourse();
  const [createModal, setCreateModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editValue, setEditValue] = useState();
  const [form] = Form.useForm();
  const [formEdit] = Form.useForm();
  const handleUpdate = async (record) => {
    const id = editValue._id;
    await updateExistingCourse(id, record);
    await fetchCourseList();
    setEditModal(false);
    formEdit.resetFields();
  };

  const handleDelete = async (values) => {
    await deleteExistingCourse(values._id);
    await fetchCourseList();
  };

  const handleCreate = async (record) => {
    console.log("Delete:", record);

    await createNewCourse(record);
    await fetchCourseList();
    setCreateModal(false);
    form.resetFields();
  };

  const columns = [
    {
      title: "Course ID",
      dataIndex: "_id",
      width: "15%",
    },
    {
      title: "Course Name",
      dataIndex: "title",
      width: "15%",
    },
    {
      title: "Description",
      dataIndex: "description",
      width: "15%",
    },
    {
      title: "Tutor Name",
      dataIndex: "tutor",
      render: (tutor) => tutor ? tutor.info.name : 'Unknown',
      width: "15%",
    },
    {
      title: "Image",
      dataIndex: "image",
      width: "15%",
    },
    {
      title: "Price",
      dataIndex: "price",
      width: "15%",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, record) => (
        <div>
          <Button
            type="link"
            onClick={() => {
              setEditModal(true);
              setEditValue(record);
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this course?"
            onConfirm={() => handleDelete(record)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
      width: "25%",
    },
  ];

  useEffect(() => {
    (async () => {
      await fetchCourseList();
    })();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Report - GiaSuOnline.vn</title>
      </Helmet>
      <div className="min-w-[250px]">
        <div className="bg-[#fff] p-5 rounded-t-xl">
          <p className="text-2xl text-black font-bold">Course List</p>
        </div>
        <div className="bg-[#fff] p-5 rounded-t-xl">
          <Button
            onClick={() => {
              setCreateModal(true);
            }}
          >
            Create New Course
          </Button>
        </div>
        <div className="p-5" data-testid="classTable">
          <div className="scrollbar pagination overflow-x-auto">
            <Table columns={columns} dataSource={courseList} rowKey={"_id"} />
          </div>
        </div>
      </div>
      <Modal
        open={createModal}
        footer={null}
        onCancel={() => {
          setCreateModal(false);
        }}
      >
        <FormCreateCourse
          form={form}
          setCreateModal={setCreateModal}
          handleCreate={handleCreate}
        ></FormCreateCourse>
      </Modal>
      <Modal
        open={editModal}
        footer={null}
        onCancel={() => {
          setEditModal(false);
          formEdit.resetFields();
        }}
      >
        <FormUpdateCourse
          formEdit={formEdit}
          editValue={editValue}
          handleUpdate={handleUpdate}
        ></FormUpdateCourse>
      </Modal>
    </div>
  );
}

export default CourseTable;
