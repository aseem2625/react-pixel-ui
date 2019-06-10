import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import { HelpText } from '../dist/index.min';


storiesOf('Components', module)
  .add(
    'HelpText',
    () => {
      const isLarge = boolean('Large', true);

      return(
        <HelpText isLarge={isLarge}>
          This is {isLarge ? 'large' : 'default'} info icon size
        </HelpText>
      );
    }
  );
