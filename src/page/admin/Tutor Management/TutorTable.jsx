import { Helmet } from "react-helmet";
import { Table, Button, Modal, Form, Popconfirm } from "antd";
import { useEffect, useState } from "react";

import useTutor from "../../../hooks/useTutor";
import FormCreateTutor from "./FormCreateTutor";
import FormUpdateTutor from "./FormUpdateTutor";

function TutorTable() {
  const {
    tutorList,
    fetchTutorList,
    createNewTutor,
    updateExistingTutor,
    deleteExistingTutor,
  } = useTutor();
  const [createModal, setCreateModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editValue, setEditValue] = useState();
  const [form] = Form.useForm();
  const [formEdit] = Form.useForm();
  const handleUpdate = async (record) => {
    const id = editValue._id;
    await updateExistingTutor(id, record);
    await fetchTutorList();
    setEditModal(false);
    formEdit.resetFields();
  };

  const handleDelete = async (values) => {
    await deleteExistingTutor(values._id);
    await fetchTutorList();
  };

  const handleCreate = async (record) => {
    console.log("Delete:", record);

    await createNewTutor(record);
    await fetchTutorList();
    setCreateModal(false);
    form.resetFields();
  };

  const columns = [
    {
      title: "Tutor ID",
      dataIndex: "_id",
      width: "15%",
    },
    {
      title: "Tutor Name",
      dataIndex: "info",
      render: (tutor) => tutor ? tutor.name : 'Unknown',
      width: "15%",
    },
    {
      title: "Tutor Address",
      dataIndex: "info",
      render: (tutor) => tutor ? tutor.address : 'Unknown',
      width: "15%",
    },
    {
      title: "Tutor Image",
      dataIndex: "info",
      render: (tutor) => tutor ? tutor.image : 'Unknown',
      width: "15%",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, record) => (
        <div>
          <Button
            type="primary"
          style={{backgroundColor:"orange"}}
            onClick={() => {
              setEditModal(true);
              setEditValue(record);
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this tutor?"
            onConfirm={() => handleDelete(record)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>
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
      await fetchTutorList();
    })();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Report - GiaSuOnline.vn</title>
      </Helmet>
      <div className="min-w-[250px]">
        <div className="bg-[#fff] p-5 rounded-t-xl">
          <p className="text-2xl text-black font-bold">Tutor List</p>
        </div>
        <div className="bg-[#fff] p-5 rounded-t-xl">
          <Button
          type="primary"
          style={{backgroundColor:"palevioletred"}}
            onClick={() => {
              setCreateModal(true);
            }}
          >
            Create New Tutor
          </Button>
        </div>
        <div className="p-5" data-testid="classTable">
          <div className="scrollbar pagination overflow-x-auto">
            <Table columns={columns} dataSource={tutorList} rowKey={"_id"} />
          </div>
        </div>
      </div>
      <Modal
      title="Create New Tutor"
        open={createModal}
        footer={null}
        onCancel={() => {
          setCreateModal(false);
        }}
      >
        <FormCreateTutor
          form={form}
          setCreateModal={setCreateModal}
          handleCreate={handleCreate}
        ></FormCreateTutor>
      </Modal>
      <Modal
      title="Update Tutor"
        open={editModal}
        footer={null}
        onCancel={() => {
          setEditModal(false);
          formEdit.resetFields();
        }}
      >
        <FormUpdateTutor
          formEdit={formEdit}
          editValue={editValue}
          handleUpdate={handleUpdate}
        ></FormUpdateTutor>
      </Modal>
    </div>
  );
}

export default TutorTable;
