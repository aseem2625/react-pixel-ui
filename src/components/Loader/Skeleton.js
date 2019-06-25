import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './Skeleton.styl';

const Skeleton = ({ className, children }) => (
  <div
    className={classList(
      'Skeleton',
      prefixToClasses('Skeleton--', className)
    )}
  >
    {children}
    <div className="Skeleton-shimmer"></div>
  </div>
);

export default Skeleton;
