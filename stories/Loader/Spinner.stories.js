import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

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
            show={boolean("show", true)}
            className={text('className', 'primary')}
            uiClass={text('uiClass', 'ui-class1 ui-class2')}
          >
            Button
          </Spinner>
        </span>
      </div>
    )
  );
