import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { Card } from 'components/index';


storiesOf('Components', module)
  .add(
    'Card',
    () => (
      <Card
        className={text('className', 'round')}
        uiClass={text('uiClass', 'ui-hasShadow')}
      >
        Content line 1
        <br />
        Content line 2
        <br />
        Content line 3
        <br />
      </Card>
    )
  );
