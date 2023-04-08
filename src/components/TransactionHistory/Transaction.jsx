import PropTypes from 'prop-types';

import {
  TransactionsTable,
  TableHead,
  TableBody,
  TransactionsTableTr,
  TransactionsTableTh,
  TransactionsTableTd,
} from './TransactionStyles';

export const Transactions = ({ items }) => {
  return (
    <TransactionsTable>
      <TableHead>
        <TransactionsTableTr>
          <TransactionsTableTh>Type</TransactionsTableTh>
          <TransactionsTableTh>Amount</TransactionsTableTh>
          <TransactionsTableTh>Currency</TransactionsTableTh>
        </TransactionsTableTr>
      </TableHead>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionsTableTr key={id}>
            <TransactionsTableTd>{type}</TransactionsTableTd>
            <TransactionsTableTd>{amount}</TransactionsTableTd>
            <TransactionsTableTd>{currency}</TransactionsTableTd>
          </TransactionsTableTr>
        ))}
      </TableBody>
    </TransactionsTable>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
