import { EditOutlined, EllipsisOutlined, FileSearchOutlined } from "@ant-design/icons"
import { Avatar, Card } from "antd"
import Meta from "antd/lib/card/Meta"
import { StyledOrderCard } from "./OrderCardStyles"

interface OrderCardProps {
  showEditFunc: () => void;
  showDetails: () => void;
  ordersList?: any
};

export const OrderCard: React.FC<OrderCardProps> = (props) => {

  const { showDetails, showEditFunc } = props

  return (
    <StyledOrderCard title="Card title"
      style={{ minWidth: 300, fontSize: '16px', margin: '5px', minHeight: 300 }}

      actions={[
        <EditOutlined onClick={() => showEditFunc()} key="edit" />,
        <FileSearchOutlined key="ellipsis" onClick={() => showDetails()} />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title="Card title"
        description="This is the description"
      />
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>

    </StyledOrderCard>

  )
}