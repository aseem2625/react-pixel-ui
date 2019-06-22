import React from 'react';
import { classList } from 'js-awesome-utils';

import './HelpText.styl';


export const HelpText = ({ children, uiClass }) => (
  <div
    className={classList(
      'HelpText',
      uiClass
    )}
  >
    {children}
  </div>
);

export default HelpText;
