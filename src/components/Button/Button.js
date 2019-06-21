import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';


import './Button.styl';

export default class Button extends React.PureComponent {
  render() {
    let {
      isLink,

      iconBefore,
      iconAfter,

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
        {iconBefore && (
          <i className={'Btn-icon Btn-icon--before i-' + iconBefore} />
        )}
        {children}
        {iconAfter && (
          <i className={'Btn-icon Btn-icon--after i-' + iconAfter} />
        )}
      </button>
    );
  }
}
