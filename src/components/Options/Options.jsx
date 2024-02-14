import PropTypes from "prop-types";

import { List, Button } from "./Options.styled";

const Options = ({ onUpdate, onReset, total }) => {
  return (
    <List>
      <Button onClick={() => onUpdate("good")}>Good</Button>
      <Button onClick={() => onUpdate("neutral")}>Neutral</Button>
      <Button onClick={() => onUpdate("bad")}>Bad</Button>
      {total > 0 && <Button onClick={onReset}>Reset</Button>}
    </List>
  );
};

Options.propTypes = {
  onUpdate: PropTypes.func,
  onReset: PropTypes.func,
  total: PropTypes.number,
};

export default Options;
