import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import { SmoothScrollLink } from 'components/index';


storiesOf('Utilities', module)
  .add(
    'SmoothScrollLink',
    () => (
      /* Note: Below is sample to use it. This doesn't work in Storybook since it wraps it inside iframe */

      <div id="your-page">
        <SmoothScrollLink to="#bottom">
          <div name="top">
            Scroll To Bottom
          </div>
        </SmoothScrollLink>

        <div name="bottom" style={{marginTop: 1500}}>
          Some element at bottom of the page
          <SmoothScrollLink to="#top">
            Go To Top
          </SmoothScrollLink>
        </div>
      </div>
    )
  );
