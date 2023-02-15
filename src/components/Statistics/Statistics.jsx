import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomColor } from 'utils/RandomColor';

export const Statistics = ({ title, data }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>
        {data.map(item => {
          const { id, label, percentage } = item;
          return (
            <li
              className={css.item}
              key={id}
              style={{ backgroundColor: `#${getRandomColor()}` }}
            >
              <span className={css.label}>{label} </span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
