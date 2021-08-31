import { OrderCard } from "../../../../core/components/OrderCard/OrderCard"
import { OrderContentListWrapper, OrderListWrapper } from "./OrdersListStyles"
import { Pagination } from 'antd';


interface OrdersListProps {
  showEdit: () => void;
  showDetails: () => void;
  ordersList?: any;
  data?: any;
  pagination?: any;
};

export const OrdersList: React.FC<OrdersListProps> = (props) => {

  const { showDetails, showEdit } = props;

  return <OrderListWrapper>
    <OrderContentListWrapper>
      <OrderCard showDetails={showDetails} showEditFunc={showEdit} />
      <OrderCard showDetails={showDetails} showEditFunc={showEdit} />
      <OrderCard showDetails={showDetails} showEditFunc={showEdit} />
      <OrderCard showDetails={showDetails} showEditFunc={showEdit} />
      <OrderCard showDetails={showDetails} showEditFunc={showEdit} />
    </OrderContentListWrapper>
    <Pagination current={3} onChange={() => console.log('change')} total={50} />
  </OrderListWrapper>
}