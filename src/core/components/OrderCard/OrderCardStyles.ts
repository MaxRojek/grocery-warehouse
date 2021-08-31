import styled from 'styled-components';
import { Avatar, Card } from "antd"

export const StyledOrderCard = styled(Card)`
  width: 500px;
  @media (max-width: 768px) {
    width: 90%;
  }
  :hover {
    border-color: orange;
  }
`;