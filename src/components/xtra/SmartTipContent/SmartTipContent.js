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
    const computedStyle = window.getComputedStyle(smartTipContent);

    let matrixVal = computedStyle.getPropertyValue('transform')
      || computedStyle.getPropertyValue('-moz-transform')
      || computedStyle.getPropertyValue('-webkit-transform')
      || computedStyle.getPropertyValue('-ms-transform')
      || computedStyle.getPropertyValue('-o-transform');

    matrixVal = (matrixVal && matrixVal !== 'none') ?
      matrixVal
        .split('(')[1]
        .split(')')[0]
        .split(',')
        .map(parseFloat)
      :
      null;

    const widthScale = matrixVal ? matrixVal[0] : 1;

    smartTipContent.style.width = ''; // Reset width to re-calcuate
    smartTipContent.style.position = 'fixed';
    smartTipContent.style.transform = 'scale(1)';

    // Calculate full width as per position: fixed
    const renderWidthWithFixed = smartTipContent.getBoundingClientRect().width;

    smartTipContent.style.width = Math.ceil(renderWidthWithFixed / widthScale) + 'px';

    // Reset to original styles
    smartTipContent.style.position = '';
    smartTipContent.style.transform = '';
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
    const tipPos = ['top', 'bottom'].indexOf(this.props.tipPos) >= -1 ? this.props.tipPos : 'top';

    return (
      <span
        ref={this.setRef}
        className={
          classList(
            'SmartTipContent',
            `SmartTipContent--${tipPos}`,
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
