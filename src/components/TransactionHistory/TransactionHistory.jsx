import {
  Amount,
  Currency,
  TransactionBox,
  TransactionHead,
  TransactionItem,
  TransactionTitle,
  Type,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionBox>
      <thead>
        <TransactionHead>
          <TransactionTitle>Type</TransactionTitle>
          <TransactionTitle>Amount</TransactionTitle>
          <TransactionTitle>Currency</TransactionTitle>
        </TransactionHead>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionItem key={id}>
            <Type>{type}</Type>
            <Amount>{amount}</Amount>
            <Currency>{currency}</Currency>
          </TransactionItem>
        ))}
      </tbody>
    </TransactionBox>
  );
};
