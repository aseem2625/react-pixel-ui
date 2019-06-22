import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import DummyContainer from './_story-helpers/DummyContainer';

import { HelpText } from 'components/index';
import Icon from 'components/Icon/Icon';


storiesOf('Components', module)
  .add(
    'HelpText',
    () => (
      <DummyContainer>
        <HelpText
          uiClass={text('uiClass', 'ui-size-md')}
        >
          <Icon name="info" uiClass="ui-svg-size-md" />
          <span>This is helptext icon. Wrap in span tag for alignment. This is helptext icon. Wrap in span tag for alignment.</span>
        </HelpText>
      </DummyContainer>
    )
  );
