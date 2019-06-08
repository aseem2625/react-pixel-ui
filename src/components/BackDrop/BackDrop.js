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
      this.freezeBG();
    }
  }

  componentDidUpdate() {
    if (this.props.show) {
      this.freezeBG();
    } else {
      this.unFreezeBG();
    }
  }

  freezeBG() {
    document.body.classList.add('freeze');
    document.getElementById('root').classList.add('freeze');
  }

  unFreezeBG() {
    document.body.classList.remove('freeze');
    document.getElementById('root').classList.remove('freeze');
  }

  componentWillUnmount() {
    this.unFreezeBG();
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
