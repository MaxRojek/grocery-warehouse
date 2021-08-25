import styled from 'styled-components';

export const LoginPageWrapper = styled.div`
  display:flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  padding: 20px;
`;

export const LoginPageLeftWrapper = styled.div`
  display:flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  padding: 20px;
  background-color: orange;
  border-radius: 10px;
  @media (max-width: 768px) {
  width: 0%;
  height: 0%;
  padding: 0px;
  }
`;

export const LoginPageRightWrapper = styled.div`
  display:flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  padding: 20px;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
