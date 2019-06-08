import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './RipplePointer.styl';

const RipplePointer = ({ isPrimary = false, className, onClick, ...restProps }) => (
  <div
    {...restProps}
    className={classList(
      'RipplePointer',
      isPrimary && 'RipplePointer--primary',
      prefixToClasses('RipplePointer--', className)
    )}
  >
    <span className="RipplePointer-epicenter" onClick={onClick} />
  </div>
);

export default RipplePointer;
