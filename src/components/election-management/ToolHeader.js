import React from 'react';
import PropTypes from 'prop-types';

export const ToolHeader = (props) => {
   return <h1>{props.headerText}</h1>
}

ToolHeader.propTypes = {
   headerText: PropTypes.string.isRequired,
};

