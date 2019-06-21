import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './Banner.styl';

export const Banner = ({ children, className, uiClass }) => (
  <div
    className={classList(
      'Banner',
      prefixToClasses('Banner--', className),
      uiClass
    )}
  >
    {children}
  </div>
);

export default Banner;
