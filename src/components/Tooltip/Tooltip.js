import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';
import SmartTipContent from 'components/xtra/SmartTipContent/SmartTipContent';

import './Tooltip.styl';

/*
 *
 * */
export default class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onMouseEnter = this._onMouseEnter.bind(this);
    this.onMouseLeave = this._onMouseLeave.bind(this);
  }

  _onMouseEnter(e) {
    this.props.onMouseEnter && this.props.onMouseEnter();
  }

  _onMouseLeave(e) {
    this.props.onMouseLeave && this.props.onMouseLeave();
  }

  setRef = e => (this.tooltip = e);

  render() {
    const { className, uiClass, children, tooltipContent, tipPos } = this.props;

    return (
      <span
        ref={this.setRef}
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

        <SmartTipContent
          parentEl={this.tooltip}
          className="Tooltip"
          uiClass={uiClass}
          tipPos={tipPos}
        >
          {tooltipContent}
        </SmartTipContent>
      </span>
    );
  }
}
