import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import { EscPressLayer, Button } from 'components/index';


storiesOf('Components/Utilities', module)
  .add(
    'EscPressLayer',
    () => (
      <EscPressLayer
        enabled={boolean('Enabled', true)}
        onEscPress={_ => alert('Pressed Escape')}
      >
        <Button>Some Button</Button>
      </EscPressLayer>
    )
  );
