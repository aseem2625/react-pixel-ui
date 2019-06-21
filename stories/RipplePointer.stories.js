import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import DummyContainer from './_story-helpers/DummyContainer'

import { RipplePointer } from 'components/index';


storiesOf('Components', module)
  .add(
    'RipplePointer',
    () => {
      const className = text('className', 'primary'),
        uiClass = text('uiClass', ''),
        style = object('style', { left: 50, top: 32 });

      return (
        <DummyContainer darkBG={className.split(' ').indexOf('primary') === -1 }>
          <RipplePointer
            className={className}
            uiClass={uiClass}
            style={style}
            onClick={action('RipplePointer clicked!')}
          />
        </DummyContainer>
      );
    }
  );
