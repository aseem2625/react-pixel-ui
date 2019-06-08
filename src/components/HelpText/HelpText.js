import React from 'react';
import Icon from 'components/Icon/Icon';
import { classList } from 'js-awesome-utils';

import './HelpText.styl';

const HelpText = ({ children, isLarge = false }) => (
  <div className={classList('HelpText', isLarge && 'HelpText--large')}>
    <Icon name="info" isLarge={isLarge} />
    <span className="HelpText-content">{children}</span>
  </div>
);

export default HelpText;
