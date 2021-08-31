import styled from 'styled-components';
import { Avatar, Card } from "antd"

export const StyledOrderCard = styled.div`
  width: 500px;
  @media (max-width: 768px) {
    width: 90%;
  }
  :hover {
    border-color: orange;
  }
`;