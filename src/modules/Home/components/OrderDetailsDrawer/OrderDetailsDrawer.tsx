import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker
} from "antd";


interface OrderDetailsDrawerProps {
  isOpen: boolean;
  setOpenDrawer: () => void;
};

export const OrderDetailsDrawer: React.FC<OrderDetailsDrawerProps> = (props) => {
  const { isOpen, setOpenDrawer } = props

  return <Drawer
    title="Create a new account"
    width={"100%"}
    onClose={setOpenDrawer}
    visible={isOpen}
    bodyStyle={{ paddingBottom: 80 }}
    footer={
      <div
        style={{
          textAlign: "right"
        }}
      >
        <Button onClick={setOpenDrawer} style={{ marginRight: 8 }}>
          Cancel
        </Button>
        <Button onClick={setOpenDrawer} type="primary">
          Submit
        </Button>
      </div>
    }
  >
    <Form layout="vertical" hideRequiredMark>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              { required: true, message: "Please enter user name" }
            ]}
          >
            <Input placeholder="Please enter user name" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="url"
            label="Url"
            rules={[{ required: true, message: "Please enter url" }]}
          >
            <Input
              style={{ width: "100%" }}
              addonBefore="http://"
              addonAfter=".com"
              placeholder="Please enter url"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="owner"
            label="Owner"
            rules={[
              { required: true, message: "Please select an owner" }
            ]}
          >
            <Select placeholder="Please select an owner">

            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="type"
            label="Type"
            rules={[
              { required: true, message: "Please choose the type" }
            ]}
          >
            <Select placeholder="Please choose the type">

            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="approver"
            label="Approver"
            rules={[
              { required: true, message: "Please choose the approver" }
            ]}
          >
            <Select placeholder="Please choose the approver">

            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="dateTime"
            label="DateTime"
            rules={[
              { required: true, message: "Please choose the dateTime" }
            ]}
          >
            <DatePicker.RangePicker
              style={{ width: "100%" }}

            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: "please enter url description"
              }
            ]}
          >
            <Input.TextArea
              rows={4}
              placeholder="please enter url description"
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  </Drawer>
}