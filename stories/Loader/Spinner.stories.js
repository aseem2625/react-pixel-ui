import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import { Spinner } from 'components/index';

storiesOf('Components/Loader', module)
  .add(
    'Spinner',
    () => (
      <div>
        <span
          style={{
            height: 40,
            width: 40,
            background: '#000',
            display: 'inline-block',
          }}
        >
          <Spinner
            isPrimary={boolean("Primary", true)}
            show={boolean("Show", true)}
          >
            Button
          </Spinner>
        </span>
      </div>
    )
  );
