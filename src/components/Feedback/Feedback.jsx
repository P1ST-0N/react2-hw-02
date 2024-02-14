import PropTypes from "prop-types";

import { Wrapper } from "./Feedback.styled";

const Feedback = ({ values: { good, bad, neutral }, total, percent }) => {
  return (
    <Wrapper>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positiv: {percent}%</li>
    </Wrapper>
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
