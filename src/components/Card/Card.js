import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './Card.styl';

export default class Card extends React.PureComponent {
  render() {
    const { className, animate, children } = this.props;
    return (
      <div
        className={classList(
          'Card',
          animate && 'Card--animate',
          prefixToClasses('Card--', className)
        )}
      >
        {children}
      </div>
    );
  }
}
