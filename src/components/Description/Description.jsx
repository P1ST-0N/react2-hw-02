import PropTypes from "prop-types";

import { DescriptionWrap, DescriptionTitle } from "./Description.styled";

const Description = ({ title, children }) => {
  return (
    <DescriptionWrap>
      <DescriptionTitle>{title}</DescriptionTitle>
      {children}
    </DescriptionWrap>
  );
};

Description.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Description;
