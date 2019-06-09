import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { mockAPI } from "js-awesome-utils";
import { AsyncButton } from '../../dist/index.min';


storiesOf('Components/Button', module)
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
        onClick={(e) => {
          action('AsyncButton clicked')(e);
          return mockAPI();
        }}
        showSpinner={boolean("Show Spinner", false)}
      >
        AsyncButton
      </AsyncButton>
    )
  );
