import React, { useState } from "react";
import { Card, Col, Row } from "antd";
import { Form, Input, Button, Checkbox } from 'antd';
import { Tabs } from 'antd';
import { OrderCard } from "../../../core/components/OrderCard/OrderCard";
import { OrdersList } from "../components/OrdersList/OrdersList";
import { OrderDetailsDrawer } from "../components/OrderDetailsDrawer/OrderDetailsDrawer";
import { CustomDrawer } from "../../../core/components/CustomDrawer/CustomDrawer";

const { TabPane } = Tabs;


const HomePage = () => {

  const [detailsDrawerActive, setDetailsDrawerActive] = useState(false);
  const [editDrawerActive, setEditDrawerActive] = useState(false);

  const activeDetailsDrawer = () => {
    setDetailsDrawerActive(!detailsDrawerActive);
  }

  const activeEditDrawer = () => {
    setEditDrawerActive(!editDrawerActive);
  }

  return (
    <>
      <Tabs defaultActiveKey="1" >
        <TabPane tab="Tab 1" key="1">
          <OrdersList showEdit={activeEditDrawer} showDetails={activeDetailsDrawer} />
        </TabPane>
        <TabPane tab="Zreralizowane" key="2">
          <OrdersList showEdit={activeEditDrawer} showDetails={activeDetailsDrawer} />
        </TabPane>
      </Tabs>
      <OrderDetailsDrawer isOpen={editDrawerActive} setOpenDrawer={activeEditDrawer} />
      <CustomDrawer isOpen={detailsDrawerActive} setOpenDrawer={activeDetailsDrawer} drawerTitle={'detale'} drawerContent={<p>detale</p>} />
    </>
  );
}

export default HomePage;


