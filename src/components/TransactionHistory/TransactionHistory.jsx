import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ data }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr className={css.table_head}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {data.map(item => {
          const { id, type, amount, currency } = item;
          return (
            <tr key={id} className={css.table_row}>
              <td className={css.table_item}>{type}</td>
              <td className={css.table_item}>{amount}</td>
              <td className={css.table_item}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
