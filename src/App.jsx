import { useState } from 'react'
import { Router } from "./routes/sections";
import { FloatButton } from 'antd';
import { UpOutlined } from '@ant-design/icons';

function App() {

  return (
    <>
     <Router />
      <FloatButton.BackTop icon={<UpOutlined />} shape='square' />
    </>
  )
}

export default App
