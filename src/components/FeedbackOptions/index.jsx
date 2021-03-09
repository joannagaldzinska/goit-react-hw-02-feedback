const Button = ({ feedback, onLeaveFeedback }) => {
  return (
    <button type="button" data-feedback={feedback} onClick={onLeaveFeedback}>
      {' '}
      {feedback}{' '}
    </button>
  );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <Button feedback={option} onLeaveFeedback={onLeaveFeedback} />
  ));
};

export default FeedbackOptions;
