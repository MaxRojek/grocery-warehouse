import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { useState } from "react";

export const NavBar = () => {

  const [showDrawer, setShowDrawer] = useState(false)

  return (
    <>
      <Button className="barsMenu" type="primary" onClick={() => setShowDrawer(!showDrawer)}>
        <MenuOutlined />
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="top"
        closable={false}
        onClose={() => setShowDrawer(!showDrawer)}
        visible={showDrawer}
      >
      </Drawer>
    </>
  );
}