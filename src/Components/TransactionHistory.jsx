/* eslint-disable react/prop-types */
import TransactionItem from './TransactionItem';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className="mt-0 mx-auto w-1/2 text-center table-fixed">
      <thead className="bg-blue-700 uppercase text-sm font-bold   text-blue-50 ">
        <tr className="divide-x divide-blue-300 ">
          <th className="py-4">Type</th>
          <th className="py-4">Amount</th>
          <th className="py-4">Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
