import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import DummyContainer from '../_story-helpers/DummyContainer'

import { Spinner } from 'components/index';

storiesOf('Components/Loader', module)
  .add(
    'Spinner',
    () => {
      const className = text('className', 'primary'),
        uiClass = text('uiClass', ''),
        show = boolean("show", true);

      return (
        <DummyContainer darkBG={className.split(' ').indexOf('primary') === -1 }>
          <Spinner
            show={show}
            className={className}
            uiClass={uiClass}
          >
            Button
          </Spinner>
        </DummyContainer>
      );
    }
  );
