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
        isPrimary={boolean("Primary", false)}
        isRound={boolean("Round", false)}
        isLink={boolean("Link", false)}
        disabled={boolean("Disabled", false)}
        className={text("Classes", 'class1 class2')}
        onClick={action('Button clicked')}
      >
        Button
      </Button>
    )
  );
