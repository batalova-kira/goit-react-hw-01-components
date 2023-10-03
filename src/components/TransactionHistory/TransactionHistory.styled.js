import styled from 'styled-components';

export const TransactionBox = styled.table`
  overflow: hidden;
  width: 450px;
  margin: 5% auto 0;

  border-radius: 5px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  border: 1px solid #d3d3d3;
  background: #fefefe;
`;

export const TransactionHead = styled.tr`
  justify-content: center;
  width: 450px;

  background-color: #b0c4de;
  color: #fff;
`;

export const TransactionTitle = styled.th`
  padding: 18px 28px 18px;
  text-align: center;

  background: #b0c4de;
`;
export const TransactionItem = styled.tr`
  background: linear-gradient(100% 25% 90deg, #fefefe, #f9f9f9);
  &:nth-child(2n) {
    background-color: #e9eff7;
  }
`;

export const Type = styled.td`
  padding: 18px 28px 18px;
  text-align: center;
`;

export const Amount = styled.td`
  padding: 18px 28px 18px;
  text-align: center;
`;

export const Currency = styled.td`
  padding: 18px 28px 18px;
  text-align: center;
`;
