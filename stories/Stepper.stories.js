import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';

import DummyContainer from './_story-helpers/DummyContainer';

import { Stepper, ProgressBar, Button } from 'components/index';
import Icon from 'components/Icon/Icon';
import { classList } from 'js-awesome-utils';


storiesOf('Components', module)
  .add(
    'Stepper',
    () => (
      <ParentHavingStepper defaultActiveStep={number('activeStep', 0)}/>
    )
  );



function ParentHavingStepper({ defaultActiveStep }) {
  const [ activeStep, setActiveStep ] = React.useState(defaultActiveStep);

  const totalSteps = 3;

  return (
    <div>
      <DummyContainer style={{width: 500}}>
        <Stepper
          className={text('className', 'Custom')}
          uiClass={text('uiClass', '')}
          activeStep={activeStep}
          progress={percentage => (
            <div className="Stepper-ProgressBarContainer" style={{left: (100/(totalSteps*2) - 5)+'%', right: (100/(totalSteps*2) - 5)+'%'}}>
              <ProgressBar className="Custom" uiClass="ui-bg-blue" progressPercentage={percentage}/>
            </div>
          )}
        >
          {(isActive) => <Icon name="person-pin" className={classList(isActive ? 'activeState' : 'defaultState')} uiClass="ui-bg-white" />}
          {(isActive) => <Icon name="person-pin" className={classList(isActive ? 'activeState' : 'defaultState')} uiClass="ui-bg-white" />}
          {(isActive) => <Icon name="person-pin" className={classList(isActive ? 'activeState' : 'defaultState')} uiClass="ui-bg-white" />}
        </Stepper>
      </DummyContainer>

      <br />
      <br />
      <div style={{textAlign: 'center'}}>
        <Button onClick={() => {
          let newActiveStep = activeStep - 1;
          newActiveStep = newActiveStep >= 0 ? newActiveStep : activeStep;

          setActiveStep(newActiveStep);
        }}>
          Prev
        </Button>
        <Button
          className="primary"
          onClick={() => {
            let newActiveStep = activeStep + 1;
            newActiveStep = newActiveStep >= totalSteps ? activeStep : newActiveStep ;

            setActiveStep(newActiveStep);
          }}>
          Next
        </Button>
      </div>
    </div>
  );
}
