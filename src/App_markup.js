import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  color: gray;
`;

export const DonateMessage = styled.p`
  color: red;
  margin: 1em 0;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export const CardLayout = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const CardLayout__Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const AllDonationLayout = styled.div`
  margin: 32px;
  padding: 16px;
  border-radius: 8px;
  border: 2px solid blue;
`;

export const AllDonationLayout__Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;