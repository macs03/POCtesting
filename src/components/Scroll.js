import React from 'react';

const Scroll = (props) => (
  <div style={{ overflowY: 'scroll', height: '70vh' }}>{props.children}</div>
);

export default Scroll;
