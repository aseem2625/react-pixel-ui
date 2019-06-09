import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';


import './Button.styl';

export default class Button extends React.PureComponent {
  render() {
    let {
      isRound,
      isLink,
      isPrimary,

      iconBefore,
      iconAfter,

      children,
      onClick,
      className,
      ...restProps
    } = this.props;

    const classes = classList(
      'Btn',
      className && prefixToClasses('Btn--', className),
      !isLink && isRound && 'Btn--round',
      isLink && 'Btn--link',
      !isLink && isPrimary && 'Btn--primary'
    );

    return (
      <button
        {...restProps}
        onClick={restProps.disabled ? undefined : onClick}
        className={classes}
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
