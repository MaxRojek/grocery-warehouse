import styled from 'styled-components';

export const OrderListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: fit-content;
  width: 100%;
`
export const OrderContentListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  height: fit-content;
  flex-wrap: wrap;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`