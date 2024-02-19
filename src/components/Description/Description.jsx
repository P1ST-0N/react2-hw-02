import PropTypes from "prop-types";

import { DescriptionWrap, DescriptionTitle } from "./Description.styled";

const Description = ({ title, descrition }) => {
  return (
    <DescriptionWrap>
      <DescriptionTitle>{title}</DescriptionTitle>
      {descrition}
    </DescriptionWrap>
  );
};

Description.propTypes = {
  title: PropTypes.string,
  descrition: PropTypes.node,
};

export default Description;
