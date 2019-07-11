import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './ProgressBar.styl';

export default class ProgressBar extends React.PureComponent {
  lastPercentageProgress = 0;

  componentDidMount() {
    this.setFullTransitionDuration();
  }

  componentDidUpdate(prevProps) {
    this.lastPercentageProgress = this.props.progressPercentage;
  }

  setFullTransitionDuration() {
    const progresser = this.progresser;
    const computedStyle = window.getComputedStyle(progresser);

    const transitionDuration = computedStyle.getPropertyValue('transition-duration');

    this.transitionDuration =  parseFloat(transitionDuration || 0);
  }

  setRef = e => (this.progresser = e);

  get safeProgressPercentage() {
    let { progressPercentage } = this.props;

    if (progressPercentage < 0) {
      progressPercentage = 0;
    } else if (progressPercentage > 100) {
      progressPercentage = 100;
    }

    return progressPercentage;
  }

  render() {
    const { className, uiClass, progressPercentage } = this.props;

    const progresserStyles = {
      width: `${this.safeProgressPercentage}%`
    };

    if (this.transitionDuration) {
      progresserStyles.transitionDuration = `${(this.transitionDuration * Math.abs(this.lastPercentageProgress - progressPercentage)/100)}s`;
    }

    return (
      <div
        className={classList(
          'ProgressBar',
          prefixToClasses('ProgressBar--', className),
        )}
      >
        <div
          ref={this.setRef}
          style={progresserStyles}
          className={classList(
            'ProgressBar-progress',
            uiClass
          )}
        />
      </div>
    );
  }
}
