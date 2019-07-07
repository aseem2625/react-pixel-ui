import React from 'react';
import { scrollToHash } from 'js-awesome-utils';


export default class SmoothScrollLink extends React.PureComponent {
  scrollToHash = e => {
    scrollToHash(e, this.props.to);
  };

  render() {
    const { to, children } = this.props;

    return (
      <a href={to} onClick={this.scrollToHash}>{children}</a>
    );
  }
}
