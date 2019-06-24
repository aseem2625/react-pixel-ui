import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './SmartTipContent.styl'

/*
* This component is for width of 'absolute' positioned box as per content, and also smartly position on screen as per viewport and scroll.
*
* TODO: Support noArrow, position: left/right/top/bottom
* */
export default class SmartTipContent extends React.PureComponent {
  componentDidMount() {
    this.calcTrueWidth();
  }

  componentDidUpdate() {
    this.calcTrueWidth();
  }

  calcTrueWidth() {
    const smartTipContent = this.smartTipContent;
    console.log(window.getComputedStyle(smartTipContent))//.getPropertyValue('transform'));

    smartTipContent.style.position = 'fixed';
    smartTipContent.style.transform = 'scale(1)';

    setTimeout(_ => {

      // Calculate full width as per position: fixed
      const renderWidthWithFixed =  smartTipContent.getBoundingClientRect().width;
      smartTipContent.style.width = Math.ceil(renderWidthWithFixed) + 'px';

      // Reset to original styles
      smartTipContent.style.position = '';
      smartTipContent.style.transform = '';
    });
  }

  // Location aware positioning
  // TODO: Complete the fn.
  shiftPosition() {
    const parentEl = this.parentEl,
      smartTipContent = this.smartTipContent;

    if (!parentEl) {
      return;
    }

    const { x, y, width: triggerWidth } = parentEl.getBoundingClientRect(),
      { width: contentWidth } = smartTipContent.getBoundingClientRect();

    smartTipContent.style.top = y + 'px';
    smartTipContent.style.left = (x - (contentWidth / 2) + (triggerWidth / 2)) + 'px';


    const frameRect = document.body.getBoundingClientRect();


    const newBoundingRect = smartTipContent.getBoundingClientRect();

    const netPosToolTip = newBoundingRect.x + newBoundingRect.width;
    const netPosFrame = frameRect.x + frameRect.width;


    if(netPosToolTip > netPosFrame) { // Right side of tooltip exceeding right side of frame
      // this.set({toolTipPosShift: 'left'});
      smartTipContent.style.left = (x - contentWidth + triggerWidth ) + 'px';
    } else if (newBoundingRect.x < frameRect.x) { // Left side of tooltip is falling behind left side of frame
      // this.set({toolTipPosShift: 'right'});
      smartTipContent.style.left = x + 'px';
    }
  }

  setRef = e => (this.smartTipContent = e);

  render() {
    const { children, className, uiClass } = this.props;

    return (
      <span
        ref={this.setRef}
        className={
          classList(
            'SmartTipContent',
            prefixToClasses('SmartTipContent--', className),
            uiClass
          )}
      >
        {children}
        <span className="arrow"></span>
      </span>
    );
  }
}
