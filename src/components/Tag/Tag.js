import React from 'react';

import './Tag.styl';
import { classList, prefixToClasses } from 'js-awesome-utils';

export default function Tag({ children, className, uiClass }) {
  return (
    <div
      className={
        classList(
          'Tag',
          prefixToClasses('Tag--', className),
          uiClass
        )}>
      {children}
    </div>
  );
}
