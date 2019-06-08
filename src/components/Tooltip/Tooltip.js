import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './Tooltip.styl';

/*
 *
 * */
export default class Tooltip extends React.Component {
  state = {};
  delay = this.props.delay || 0; // default delay = 0ms

  constructor(props) {
    super(props);

    this.onMouseEnter = this._onMouseEnter.bind(this);
    this.onMouseLeave = this._onMouseLeave.bind(this);
  }

  _onMouseEnter(e) {
    this.setPosition();
  }

  // Location aware positioning
  setPosition() {}

  _onMouseLeave(e) {
    this.props.onMouseLeave && this.props.onMouseLeave();
  }

  render() {
    const { className, children, tooltipText } = this.props;

    return (
      <div
        className={classList(
          'Tooltip',
          prefixToClasses('Tooltip--', className)
        )}
      >
        <span
          className="Tooltip-trigger"
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          {children}
        </span>

        <span className="Tooltip-text">{tooltipText}</span>
      </div>
    );
  }
}
