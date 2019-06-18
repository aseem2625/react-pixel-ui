import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './Icon.styl';

const Icon = ({ name, className = '', isLarge = false }) => {
  const Ico = require(`assets/svg/${name}.svg`).default;

  return (
    <span
      className={classList(
        'Icon',
        'Icon--' + name,
        isLarge && 'Icon--large',
        prefixToClasses('Icon--', className)
      )}
    >
      <Ico />
    </span>
  );
};

export default Icon;
