import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './GhostLoader.styl';

const GhostLoader = ({ className, animate = false }) => (
  <div
    className={classList(
      'GhostLoader',
      animate && 'GhostLoader--animate',
      prefixToClasses('GhostLoader--', className)
    )}
  />
);

export default GhostLoader;
