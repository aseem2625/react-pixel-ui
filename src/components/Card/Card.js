import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './Card.styl';

export default class Card extends React.PureComponent {
  render() {
    const { children, className, uiClass } = this.props;
    return (
      <div
        className={classList(
          'Card',
          prefixToClasses('Card--', className),
          uiClass
        )}
      >
        {children}
      </div>
    );
  }
}
