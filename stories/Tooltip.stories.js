import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { Tooltip } from '../dist/index.min';


storiesOf('Components', module)
  .add(
    'Tooltip',
    () => (
      <Tooltip
        tooltipText={text('Tooltip Text', 'Some tooltip content')}
        className={text('Classes', 'class1 class2')}
      >
        Hover/Tap Me!
      </Tooltip>
    )
  );
