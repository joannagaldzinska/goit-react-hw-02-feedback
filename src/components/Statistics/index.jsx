import LeaveFeedbackOptions from '../FeedbackOptions';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      <li>Total:{total}</li>
      <li>Possitive feedback:{positivePercentage} %</li>
    </ul>
  );
};

export default Statistics;
