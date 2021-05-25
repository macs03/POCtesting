import React from 'react';
import PropTypes from 'prop-types';

const Scroll = ({ children }) => (
  <div style={{ overflowY: 'scroll', height: '70vh' }}>{children}</div>
);

Scroll.propTypes = {
  children: PropTypes.node.isRequired
};

export default Scroll;
