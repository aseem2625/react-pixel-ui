import React from 'react';

import './Tag.styl';
import { classList, prefixToClasses } from 'js-awesome-utils';

export default function Tag({ children, className }) {
  return (
    <div className={classList('Tag', prefixToClasses('Tag--', className))}>
      {children}
    </div>
  );
}
