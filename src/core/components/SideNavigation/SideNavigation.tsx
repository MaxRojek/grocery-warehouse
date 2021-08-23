import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../../state/redux/authModule/auth.actions';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const SideNavigation = () => {
  const [collapse, setCollapse] = useState(false);

  const onCollapse = () => {
    setCollapse(!collapse)
  };

  const dispatch = useDispatch();

  const loginFunc = () => {
    dispatch(loginAction())
  }

  return (

    <Sider style={{
      height: "100vh", position: 'sticky', overflow: "auto", top: 0,
      left: 0
    }} theme={'light'} collapsible collapsed={collapse} onCollapse={onCollapse}>

      <Menu mode="inline">

        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3"><button onClick={loginFunc}>login</button></Menu.Item>

        </SubMenu>

        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </Sider>

  );
}

export default SideNavigation;