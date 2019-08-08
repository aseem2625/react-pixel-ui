import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Icon from 'components/Icon/Icon';
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
        Simple Button
      </Button>
    )
  )
  .add(
    'Button with Icon',
    () => (
      <div>
        <Button
          className={text("className", 'round primary')}
          uiClass={text('uiClass', 'ui-hasShadow ui-bg-white')}
          isLink={boolean("Link", false)}
          disabled={boolean("Disabled", false)}
          onClick={action('Button clicked')}
        >
          <Icon name="copy" />
          {/* Pass text wrapped inside span to vertically align it in middle */}
          <span>Button with Icon before</span>
        </Button>

        <br />
        <br />

        <Button
          className={text("className", 'round primary')}
          uiClass={text('uiClass', 'ui-hasShadow ui-bg-white')}
          isLink={boolean("Link", false)}
          disabled={boolean("Disabled", false)}
          onClick={action('Button clicked')}
        >
          <span>Button with Icon after</span>
          <Icon name="copy" />
        </Button>

        <br />
        <br />

        <Button
          className={text("className", 'round primary')}
          uiClass={text('uiClass', 'ui-hasShadow ui-bg-white')}
          isLink={boolean("Link", false)}
          disabled={boolean("Disabled", false)}
          onClick={action('Button clicked')}
        >
          <Icon name="copy" />
        </Button>
      </div>
    )
  );
