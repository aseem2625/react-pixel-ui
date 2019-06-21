import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './Icon.styl';

const Icon = ({ name, className, uiClass }) => {
  const Ico = require(`assets/svg/${name}.svg`).default;

  return (
    <span
      className={classList(
        'Icon',
        'Icon--' + name,
        prefixToClasses('Icon--', className),
        uiClass
      )}
    >
      <Ico />
    </span>
  );
};

export default Icon;
