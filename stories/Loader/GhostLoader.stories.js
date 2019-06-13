import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import { GhostLoader } from 'components/index';

storiesOf('Components/Loader', module)
  .add(
    'GhostLoader',
    () => (
      <div style={{ width: 300 }}>
        <GhostLoader
          animate={boolean("Animate", true)}
        />
      </div>
    )
  );
