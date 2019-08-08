import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { mockAPI } from "js-awesome-utils";
import { AsyncButton, Spinner } from 'components/index';
import Icon from 'components/Icon/Icon';


storiesOf('Components/Button', module)
  .add(
    'AsyncButton',
    () => (
      <AsyncButton
        className={text("className", 'round primary')}
        uiClass={text('uiClass', 'ui-hasShadow ui-bg-white')}
        isLink={boolean("isLink", false)}
        disabled={boolean("disabled", false)}
        onClick={(e) => {
          action('AsyncButton clicked')(e);
          return mockAPI();
        }}
      >
        {
          isPending => (
            <React.Fragment>
              <span>{isPending ? 'Pending..' : 'AsyncButton'}</span>
              {isPending && <Spinner show={isPending} />}
            </React.Fragment>
          )
        }
      </AsyncButton>
    )
  )
  .add(
    'AsyncButton with Icon',
    () => (
      <AsyncButton
        className={text("className", 'round primary')}
        uiClass={text('uiClass', 'ui-hasShadow ui-bg-white')}
        isLink={boolean("isLink", false)}
        disabled={boolean("disabled", false)}
        onClick={(e) => {
          action('AsyncButton clicked')(e);
          return mockAPI();
        }}
      >
        {
          isPending => (
            <React.Fragment>
              {isPending ? <Spinner show={isPending} /> : <Icon name="copy" />}
              <span>Click Me</span>
            </React.Fragment>
          )
        }
      </AsyncButton>
    )
  );
