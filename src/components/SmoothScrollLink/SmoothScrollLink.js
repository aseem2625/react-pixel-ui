import React from 'react';
import { classList, scrollToHash } from 'js-awesome-utils';

/*
 *
 *
 * */
export default class SmoothScrollLink extends React.PureComponent {
  scrollToHash = e => {
    scrollToHash(e, this.props.to);
  };

  render() {
    const { to, className, children } = this.props;

    return (
      <a
        href={to}
        className={classList(
          'SmoothScroll',
          className //  No prefixToClasses here
        )}
        onClick={this.scrollToHash}
      >
        {children}
      </a>
    );
  }
}
