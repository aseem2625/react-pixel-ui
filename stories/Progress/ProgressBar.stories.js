import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';

import DummyContainer from '../_story-helpers/DummyContainer';
import { ProgressBar } from 'components/index';


storiesOf('Components/Progress', module)
  .add(
    'ProgressBar',
    () => (
      <DummyContainer style={{width: 400}}>
        <ProgressBar
          className={text('className', 'Custom')}
          uiClass={text('uiClass', 'ui-bg-green')}
          progressPercentage={number('progressPercentage', 30)}
       />
      </DummyContainer>
    )
  );
