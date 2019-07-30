import React from 'react'
import { classList, prefixToClasses } from 'js-awesome-utils';

import './Stepper.styl';

export default class Stepper extends React.PureComponent {
  render() {
    const {className, uiClass, activeStep, progress, children, ...restProps} = this.props;

    const steps = [];

    children.forEach((c, ix) => {
      const isActiveStep = ix <= activeStep,
        isCurrentStep = ix === activeStep;

      steps.push(
        <div
          key={ix}
          className={
            classList(
              'Stepper-step',
              isActiveStep && 'Stepper-step--active',
              isCurrentStep && 'Stepper-step--current'
            )}
        >
          {typeof c === 'function' ? c(isActiveStep) : c}
        </div>
      )
    });

    return (
      <div
        {...restProps}
        className={
          classList(
            'Stepper',
            prefixToClasses('Stepper--', className),
            uiClass
          )}
      >
        {progress && progress((activeStep) * 100/(steps.length - 1))}
        {steps}
      </div>
    )
  }
}

