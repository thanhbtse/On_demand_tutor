/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Layout, Menu, notification, Dropdown } from "antd";
import {
  UsergroupAddOutlined,
  HomeOutlined,
  BankOutlined,
  UserAddOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import meme from "../assets/images/images.jpg";
import hatlogo from "../assets/logo/187390886-black-graduate-hat-with-golden-element-on-white-background-flat-design-illustration-vector-graphics.jpg";

const { Content, Sider, Footer } = Layout;

function getItem(label, key, icon, children, path) {
  return {
    key,
    icon,
    children,
    label,
    path,
  };
}

const items = [
  getItem("Home", "1", <HomeOutlined />, null, "/admin/dashboard"),
  getItem("Turtor", "sub1", <UserAddOutlined />, [
    getItem("Turtor list", "2", null, null, "/admin/turtor/view"),
  ]),
  getItem("Course", "sub3", <BankOutlined />, [
    getItem("View Course", "4", null, null, "/admin/class/view"),
  ]),
  getItem("Report management", "5", <ShoppingOutlined />, [
    getItem("Report list", "5", null, null, "/admin/report/view"),
  ]),
  getItem("User management", "sub4", <UsergroupAddOutlined />, [
    getItem("User list", "6", null, null, "/admin/user/view"),
  ]),
];

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const storeDefaultSelectedKeys = (keys) => {
    sessionStorage.setItem("keys", keys);
  };

  const resetDefaultSelectedKeys = () => {
    const selectedKeys = sessionStorage.getItem("keys");
    return selectedKeys ? selectedKeys : ["2"];
  };

  const defaultSelectedKeys = resetDefaultSelectedKeys();

  const renderMenuItems = (items) => {
    return items.map((item) => {
      if (item.children && item.children.length > 0) {
        return (
          <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
            {renderMenuItems(item.children)}
          </Menu.SubMenu>
        );
      } else {
        return (
          <Menu.Item
            key={item.key}
            icon={item.icon}
            onClick={() => storeDefaultSelectedKeys([item.key])}
          >
            <Link to={item.path}>{item.label}</Link>
          </Menu.Item>
        );
      }
    });
  };

  DashboardLayout.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const handleLogout = () => {
    logout();
    notification.success({
      message: "Logout Successful",
      description: "You have successfully logged out.",
      duration: 2,
    });
  };

  const menu = (
    <Menu>
      <Menu.Item key="2">
        <Link to="/">Shop</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout className="min-h-screen">
      <Sider
        width={230}
        breakpoint="lg"
        collapsedWidth="55"
        defaultCollapsed
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className="scrollbar sider overflow-auto min-h-screen left-0 top-0 bottom-0 box-border z-50 flex-none w-56 overflow-y-auto"
        theme="light"
      >
        <div className="demo-logo-vertical" />
        <div className="flex justify-center my-4">
          <img
            className="w-5/12 object-cover select-none"
            src={hatlogo}
            alt=""
          />
        </div>
        <Menu
          theme="light"
          defaultSelectedKeys={defaultSelectedKeys}
          mode="inline"
          className="select-none"
        >
          {renderMenuItems(items)}
        </Menu>
      </Sider>
      <Layout className="right-bar overflow-y-auto transition-all duration-[280ms] ease-in">
        <div className="header-admin pr-4 flex justify-end gap-2 items-center fixed z-[1000] h-16 shadow-none bg-[#f8f8f8] bg-opacity-80 backdrop-blur-[6px]">
          <img
            src={meme}
            alt=""
            className="w-[42px] h-[42px] rounded-full border object-cover"
          />
          <div className="flex flex-col">
            <Dropdown overlay={menu} trigger={["click"]}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                Admin
              </a>
            </Dropdown>
          </div>
        </div>
        <Content className="mt-[80px] mx-4 ">
          <div className="rounded-xl overflow-x-auto min-w-[250px] bg-[#fff]">
            {children}
          </div>
        </Content>
        <Footer className="text-center">
          Gia sư online © {new Date().getFullYear()} Công ty TNHH nhóm 5 thành
          viên
        </Footer>
      </Layout>
    </Layout>
  );
};
export default DashboardLayout;
