import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Button } from 'components/index';


storiesOf('Components/Button', module)
  .add(
    'Button',
    () => (
      <Button
        className={text("className", 'round primary')}
        uiClass={text('uiClass', 'ui-hasShadow ui-bg-white')}
        isLink={boolean("Link", false)}
        disabled={boolean("Disabled", false)}
        onClick={action('Button clicked')}
      >
        Button
      </Button>
    )
  );
