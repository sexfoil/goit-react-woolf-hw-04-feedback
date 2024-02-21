import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css['statistic-block']}>
      <span className={css.header}>Statistics</span>
      <ul className={css['stat-list']}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage} %</li>
      </ul>
    </div>
  );
};

export default Statistics;
