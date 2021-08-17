import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const SideNavigation = () => {
  const [collapse, setCollapse] = useState(false);

  const onCollapse = () => {
    setCollapse(!collapse)
  };

  return (

    <Sider theme={'light'} collapsible collapsed={collapse} onCollapse={onCollapse}>

      <Menu mode="inline">

        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>

        </SubMenu>

        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </Sider>

  );
}

export default SideNavigation;