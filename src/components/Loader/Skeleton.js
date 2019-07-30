import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './Skeleton.styl';

const Skeleton = ({ className, uiClass, children, ...restProps }) => (
  <div
    {...restProps}
    className={classList(
      'Skeleton',
      prefixToClasses('Skeleton--', className),
      uiClass
    )}
  >
    {children}
    <div className="Skeleton-shimmer"></div>
  </div>
);

export default Skeleton;
