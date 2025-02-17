import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import { OutsideClickLayer, Button } from 'components/index';


storiesOf('Utilities', module)
  .add(
    'OutsideClickLayer',
    () => (
      <OutsideClickLayer
        enabled={boolean('Enabled', true)}
        onOutsideClick={_ => alert('Clicked outside')}
      >
        <Button>Some Button</Button>
      </OutsideClickLayer>
    )
  );
