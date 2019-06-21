import React from 'react';

export default ({ children, darkBG }) => (
  <div style={{position: 'relative', width: 500, background: darkBG ? '#757575' : '#f9f9f9', padding: 32}}>
    {children}
  </div>
);
