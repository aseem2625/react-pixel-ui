import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';


import { mockAPI } from "js-awesome-utils";
import { action } from '@storybook/addon-actions';

import { Button, AsyncButton } from '../dist/index.min';

const stories = storiesOf('Components/Button', module);
stories.addDecorator(withKnobs);


stories
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
  )
  .add(
    'AsyncButton',
    () => (
      <AsyncButton
        isPrimary={boolean("Primary", false)}
        isRound={boolean("Round", false)}
        isLink={boolean("Link", false)}
        disabled={boolean("Disabled", false)}
        className={text("Classes", 'class1 class2')}
        pendingText={text("Pending Text", 'Pending..')}
        onClick={mockAPI}
        showSpinner={boolean("Show Spinner", false)}
      >
        AsyncButton
      </AsyncButton>
    )
  );
