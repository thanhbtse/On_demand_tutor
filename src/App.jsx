import { useEffect } from "react";
import Cookies from "js-cookie";
import { Router } from "./routes/sections";
import { FloatButton } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import useAuth from "./hooks/useAuth";

function App() {

  return (
    <>
     <Router />
      <FloatButton.BackTop icon={<UpOutlined />} shape='square' />
    </>
  )
}

export default App
