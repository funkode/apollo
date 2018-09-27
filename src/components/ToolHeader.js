import React from 'react';
import PropTypes from 'prop-types';

export const ToolHeader = (props) => {
  return <header>
    <h1>{props.headerText}</h1>
  </header>;
};

ToolHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
};
