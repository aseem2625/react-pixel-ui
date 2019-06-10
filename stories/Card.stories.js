import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import { Card } from '../dist/index.min';


storiesOf('Components', module)
  .add(
    'Card',
    () => {
      const hasShadow = boolean('Shadow', true);
      const animate = boolean('Animate', true);

      return (
        <Card hasShadow={hasShadow} animate={animate}>
          Content line 1
          <br />
          Content line 2
          <br />
          Content line 3
          <br />
        </Card>
      );
    }
  );
