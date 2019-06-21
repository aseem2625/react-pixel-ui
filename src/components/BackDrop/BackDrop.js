import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './BackDrop.styl';

/*
 * Usage: <BackDrop>{content}</BackDrop>
 * Props:
 *   show
 *   className
 * */
export default class BackDrop extends React.PureComponent {
  componentDidMount() {
    if (this.props.show) {
      this.onShowBD();
    }
  }

  componentDidUpdate() {
    if (this.props.show) {
      this.onShowBD();
    } else {
      this.onHideBD();
    }
  }

  onShowBD() {
    // via class, it gives control if you want to override styles for scroll-fix, eg: remove overflow: hidden to let it scroll
    document.body.classList.add('scroll-fix');
    this.props.onShow && this.props.onShow();
  }

  onHideBD() {
    document.body.classList.remove('scroll-fix');
    this.props.onHide && this.props.onHide();
  }

  componentWillUnmount() {
    this.onHideBD();
  }

  render() {
    const { children, show = false, className } = this.props;

    return (
      <div
        className={classList(
          'BackDrop',
          show && 'BackDrop--show',
          prefixToClasses('BackDrop--', className)
        )}
      >
        <div className="BackDrop-content">{children}</div>
      </div>
    );
  }
}
