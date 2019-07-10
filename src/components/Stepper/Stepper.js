import React from 'react'
import { classList, prefixToClasses } from 'js-awesome-utils';

import './Stepper.styl';

export default class Stepper extends React.PureComponent {
  render() {
    const {className, activeStep, progress, children} = this.props;

    const steps = [];

    children.forEach((c, ix) => {
      const isActive = ix <= activeStep;

      steps.push(
        <div
          key={ix}
          className={
            classList(
              'Stepper-step',
              isActive && 'Stepper-step--active'
            )}
        >
          {typeof c === 'function' ? c(isActive) : c}
        </div>
      )
    });

    return (
      <div className={
        classList(
          'Stepper',
          prefixToClasses('Stepper--', className)
        )}
      >
        {progress && progress((activeStep) * 100/(steps.length - 1))}
        {steps}
      </div>
    )
  }
}

