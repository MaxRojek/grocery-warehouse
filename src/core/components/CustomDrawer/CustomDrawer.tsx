import { JSXElement } from "@babel/types";
import { Button, Drawer } from "antd"

interface CustomDrawerProps {
  isOpen: boolean;
  setOpenDrawer: () => void;
  drawerTitle: string;
  drawerActions?: React.ReactNode;
  drawerContent: React.ReactNode;
};

export const CustomDrawer: React.FC<CustomDrawerProps> = (props) => {

  const { isOpen, setOpenDrawer, drawerTitle, drawerActions, drawerContent } = props;

  return <Drawer
    title={drawerTitle}
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
        {drawerActions ? (<>{drawerActions}</>) : (
          <>
            <Button onClick={setOpenDrawer} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={setOpenDrawer} type="primary">
              Submit
            </Button>
          </>)
        }
      </div>
    }
  >
    {drawerContent}
  </Drawer>
}