import React, { useContext, useEffect } from "react";
import { Card, Col, Drawer, Layout, Menu, notification, Row } from "antd";
import SideNavigation from "../SideNavigation/SideNavigation";
import { MyGlobalContext } from "../../../state/contexts/contexts";
import { NavBar } from "../NavBar/NavBar";

const { Header, Footer, Content } = Layout;

interface PageWrapperProps {
  children?: React.ReactNode;
}
const PageWrapper = (props: PageWrapperProps) => {
  const { children } = props;
  const { isMobile } = useContext(MyGlobalContext);

  return (
    <Layout >
      {isMobile === false && (<SideNavigation />)}
      <Layout className="site-layout">
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: 0 }}>
          {isMobile === true && (
            <Menu style={{ width: '100%' }} theme="light" mode="horizontal" >
              <Menu.Item key="1"><NavBar /></Menu.Item>
            </Menu>
          )}
        </Header>
        <Content style={{ padding: '10px', overflow: 'initial', marginTop: '90px' }} >
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design </Footer>
      </Layout>
    </Layout>
  );
}

export default PageWrapper;
