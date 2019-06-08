import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './Banner.styl';

export const Banner = ({ className, type, children }) => (
  <div
    className={classList(
      'Banner',
      type && `Banner--${type}`,
      prefixToClasses('Banner--', className)
    )}
  >
    {children}
  </div>
);

export default Banner;
