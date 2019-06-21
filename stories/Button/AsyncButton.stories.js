import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { mockAPI } from "js-awesome-utils";
import { AsyncButton, Spinner } from 'components/index';


storiesOf('Components/Button', module)
  .add(
    'AsyncButton',
    () => (
      <AsyncButton
        className={text("className", 'round')}
        uiClass={text('uiClass', 'ui-hasShadow ui-bg-white')}
        isLink={boolean("isLink", false)}
        disabled={boolean("disabled", false)}
        pendingText={text("pendingText", 'Pending..')}
        onClick={(e) => {
          action('AsyncButton clicked')(e);
          return mockAPI();
        }}
      >
        AsyncButton
        {(isPending) => <Spinner show={isPending} />}
      </AsyncButton>
    )
  );
