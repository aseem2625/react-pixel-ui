import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './Spinner.styl';

const Spinner = ({ show = true, className, uiClass }) => (
  <span
    className={classList(
      'Spinner',
      show && 'Spinner--show',
      className && prefixToClasses('Spinner--', className),
      uiClass
    )}
  />
);

export default Spinner;
