import PropTypes from 'prop-types';
import React from 'react';

const Label = ({ children, htmlFor, ...props }) => (
  <label
    htmlFor={htmlFor}
    {...props}
  >
    {children}
  </label>
);

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string.isRequired,
};

Label.defaultProps = {
  children: null,
};

export default Label;
