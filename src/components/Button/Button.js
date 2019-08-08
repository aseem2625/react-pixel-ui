import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';


import './Button.styl';

export default class Button extends React.PureComponent {
  render() {
    let {
      isLink,
      children,
      onClick,
      uiClass,
      className,
      ...restProps
    } = this.props;

    return (
      <button
        {...restProps}
        onClick={restProps.disabled ? undefined : onClick}
        className={classList(
          'Btn',
          className && prefixToClasses('Btn--', className),
          isLink && 'Btn--link',
          uiClass
        )}
      >
        {children}
      </button>
    );
  }
}

