import React from "react";
import { Card, Col, Row } from "antd";
import { Form, Input, Button, Checkbox } from 'antd';
import PageWrapper from "../../../core/components/PageWrapper/PageWrapper";
import { Tabs } from 'antd';

const { TabPane } = Tabs;


const HomePage = () => {

  return (
    <PageWrapper >


      <Row justify="center" wrap gutter={[16, 40]} >
        <Col style={{ display: 'flex', justifyContent: 'center' }} xs={24} xl={12}>
          <Tabs defaultActiveKey="1" >
            <TabPane tab="Tab 1" key="1">
              <Row justify="center" wrap gutter={[16, 40]} >
                <Col style={{ display: 'flex', justifyContent: 'center' }} xs={24} xl={12}>
                  <Card title="Card title" bordered={false} style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </Card>

                </Col>
              </Row>
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              <Card title="Card title" bordered={false} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Card title" bordered={false} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Card title" bordered={false} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Card title" bordered={false} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Card title" bordered={false} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </PageWrapper >
  );
}

export default HomePage;


