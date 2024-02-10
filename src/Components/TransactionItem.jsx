/* eslint-disable react/prop-types */
const TransactionItem = ({ transaction }) => {
  const { type, amount, currency } = transaction;
  return (
    <tr className="text-slate-800   capitalize [&:nth-child(even)]:bg-slate-400 divide-x divide-slate-500">
      <td className="py-3">{type}</td>
      <td className="py-3">{amount}</td>
      <td className="py-3">{currency}</td>
    </tr>
  );
};

export default TransactionItem;
