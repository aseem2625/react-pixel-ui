import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './RipplePointer.styl';

const RipplePointer = ({ className, uiClass, onClick, ...restProps }) => (
  <div
    {...restProps}
    className={classList(
      'RipplePointer',
      prefixToClasses('RipplePointer--', className),
      uiClass,
      onClick && 'RipplePointer--clickable'
    )}
  >
    <span className="RipplePointer-epicenter" onClick={onClick} />
  </div>
);

export default RipplePointer;
