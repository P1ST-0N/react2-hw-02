import PropTypes from "prop-types";

const Feedback = ({ values: { good, bad, neutral }, total, percent }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positiv: {percent}%</p>
    </>
  );
};

Feedback.propTypes = {
  values: PropTypes.shape({
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
  }),
  total: PropTypes.number,
  percent: PropTypes.number,
};

export default Feedback;
