import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  background-color: white;
  width: 450px;
  height: 310px;
  border-radius: 8px;
  box-shadow: 0 0 16px gray;
`;

export const Image = styled.img`
  max-width: 100%;
  width: 100%;
  height: 230px;
  object-fit: cover;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const Description__Text = styled.div`
  color: gray;
  font-weight: 600;
  font-size: 16px;
`;

export const Description__Button = styled.div`
  border: 2px solid blue;
  color: blue;
  font-size: 14px;
  background-color: white;
  padding: 4px 8px;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
`;

export const PaymentLayout = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.95);
  width: 450px;
  height: 310px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PaymentLayout__Close_Layout = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`;

export const PaymentLayout__Close_Button = styled.div`
  font-size: 16px;
  color: black;
  cursor: pointer;
`;

export const PaymentLayout__Title = styled.div`
  color: gray;
  font-weight: 600;
  font-size: 14px;
  margin-top: 16px;
`;

export const PaymentLayout__Selector = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 16px;
  margin-bottom: 16px;
`;