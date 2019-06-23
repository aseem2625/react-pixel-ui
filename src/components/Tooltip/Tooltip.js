import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';

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

  // Location aware positioning
  shiftPosition() {
    const tooltip = this.tooltip,
      tooltipContent = this.tooltipContent;

    const { x, y, width: triggerWidth } = tooltip.getBoundingClientRect(),
      { width: contentWidth } = tooltipContent.getBoundingClientRect();

    tooltipContent.style.top = y + 'px';
    tooltipContent.style.left = (x - (contentWidth / 2) + (triggerWidth / 2)) + 'px';


    const frameRect = document.body.getBoundingClientRect();


    const newBoundingRect = tooltipContent.getBoundingClientRect();

    const netPosToolTip = newBoundingRect.x + newBoundingRect.width;
    const netPosFrame = frameRect.x + frameRect.width;


    if(netPosToolTip > netPosFrame) { // Right side of tooltip exceeding right side of frame
      // this.set({toolTipPosShift: 'left'});
      tooltipContent.style.left = (x - contentWidth + triggerWidth ) + 'px';
    } else if (newBoundingRect.x < frameRect.x) { // Left side of tooltip is falling behind left side of frame
      // this.set({toolTipPosShift: 'right'});
      tooltipContent.style.left = x + 'px';
    }
  }

  componentDidMount() {
    this.calcTrueWidth();
  }

  componentDidUpdate() {
    this.calcTrueWidth();
  }

  calcTrueWidth() {
    const tooltipContent = this.tooltipContent;
    tooltipContent.style.position = 'fixed';
    tooltipContent.style.transform = 'scale(1)';

    // Calculate full width as per position: fixed
    const renderWidthWithFixed =  tooltipContent.getBoundingClientRect().width;
    tooltipContent.style.width = Math.ceil(renderWidthWithFixed) + 'px';

    // Reset to original styles
    tooltipContent.style.position = '';
    tooltipContent.style.transform = '';
  }

  _onMouseLeave(e) {
    this.props.onMouseLeave && this.props.onMouseLeave();
  }

  setRefTooltipContent = e => (this.tooltipContent = e);
  setRefTooltip = e => (this.tooltip = e);

  render() {
    const { className, uiClass, uiClassContent, children, tooltipContent } = this.props;

    return (
      <div
        ref={this.setRefTooltip}
        className={classList(
          'Tooltip',
          prefixToClasses('Tooltip--', className),
          uiClass
        )}
      >
        <span
          className="Tooltip-trigger"
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          {children}
        </span>

        <SmartOver>
        </SmartOver>

        <span
          ref={this.setRefTooltipContent}
          className={
            classList(
              'Tooltip-content',
              uiClassContent
            )}

        >
          {tooltipContent}
          <span class="arrow"></span>
        </span>
      </div>
    );
  }
}
