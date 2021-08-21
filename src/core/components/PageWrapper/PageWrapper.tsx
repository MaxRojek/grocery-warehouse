import React, { useContext, useEffect } from "react";
import { Card, Col, Drawer, Layout, Menu, notification, Row } from "antd";
import { Form, Input, Button, Checkbox } from 'antd';
import SideNavigation from "../SideNavigation/SideNavigation";
import { MyGlobalContext } from "../../../state/contexts/contexts";

const { Header, Footer, Sider, Content } = Layout;

interface PageWrapperProps {
  children?: React.ReactNode;
}
const PageWrapper = (props: PageWrapperProps) => {
  const { children } = props;
  const { isMobile } = useContext(MyGlobalContext);

  useEffect(() => {
    console.log(isMobile)
  }, [isMobile])

  return (
    <Layout >
      {isMobile === false && (<SideNavigation />)}
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ padding: '10px', overflow: 'initial' }} >
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design </Footer>
      </Layout>
      {/* <Drawer
        title="Basic Drawer"
        placement={'left'}
        closable={false}
        onClose={this.onClose}
        visible={visible}
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer> */}
    </Layout>
  );
}

export default PageWrapper;
