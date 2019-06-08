import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './Spinner.styl';

const Spinner = ({ show = true, isPrimary, className }) => (
  <span
    className={classList(
      'Spinner',
      className && prefixToClasses('Spinner--', className),
      show && 'Spinner--show',
      isPrimary && 'Spinner--primary'
    )}
  />
);

export default Spinner;
