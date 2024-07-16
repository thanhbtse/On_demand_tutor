import { Helmet } from "react-helmet";
import { Table, Button, Modal, Form, Popconfirm } from "antd";
import { useEffect, useState } from "react";
import useUser from "../../../hooks/useUser";
import FormCreateUser from "./FormCreateUser";
import FormUpdateUser from "./FormUpdateUser";

function UserTable() {
  const {
    userList,
    fetchUserList,
    createNewUser,
    updateExistingUser,
    deleteExistingUser,
  } = useUser();
  const [createModal, setCreateModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editValue, setEditValue] = useState();
  const [form] = Form.useForm();
  const [formEdit] = Form.useForm();
  const handleUpdate = async (record) => {
    const id = editValue._id;
    await updateExistingUser(id, record);
    await fetchUserList();
    setEditModal(false);
    formEdit.resetFields();
  };

  const handleDelete = async (values) => {
    await deleteExistingUser(values._id);
    await fetchUserList();
  };

  const handleCreate = async (record) => {
    console.log("Delete:", record);

    await createNewUser(record);
    await fetchUserList();
    setCreateModal(false);
    form.resetFields();
  };

  const columns = [
    {
      title: "User ID",
      dataIndex: "_id",
      width: "15%",
    },
    {
      title: "User Name",
      dataIndex: "name",
      width: "15%",
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "15%",
    },
    {
      title: "Image",
      dataIndex: "image",
      width: "15%",
    },
    {
      title: "Role",
      dataIndex: "role",
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
            title="Are you sure you want to delete this user?"
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
      await fetchUserList();
    })();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Report - GiaSuOnline.vn</title>
      </Helmet>
      <div className="min-w-[250px]">
        <div className="bg-[#fff] p-5 rounded-t-xl">
          <p className="text-2xl text-black font-bold">User List</p>
        </div>
        <div className="bg-[#fff] p-5 rounded-t-xl">
          <Button
            onClick={() => {
              setCreateModal(true);
            }}
          >
            Create New User
          </Button>
        </div>
        <div className="p-5" data-testid="classTable">
          <div className="scrollbar pagination overflow-x-auto">
            <Table columns={columns} dataSource={userList} rowKey={"_id"} />
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
        <FormCreateUser
          form={form}
          setCreateModal={setCreateModal}
          handleCreate={handleCreate}
        ></FormCreateUser>
      </Modal>
      <Modal
        open={editModal}
        footer={null}
        onCancel={() => {
          setEditModal(false);
          formEdit.resetFields();
        }}
      >
        <FormUpdateUser
          formEdit={formEdit}
          editValue={editValue}
          handleUpdate={handleUpdate}
        ></FormUpdateUser>
      </Modal>
    </div>
  );
}

export default UserTable;
