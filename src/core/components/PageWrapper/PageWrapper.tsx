import React from "react";
import { Layout, Menu, notification } from "antd";
import { Form, Input, Button, Checkbox } from 'antd';
import SubMenu from "antd/lib/menu/SubMenu";
import SideNavigation from "../SideNavigation/SideNavigation";

const { Header, Footer, Sider, Content } = Layout;

const PageWrapper = () => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideNavigation />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>

          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default PageWrapper;
