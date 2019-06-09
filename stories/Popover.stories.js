import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import { Popover, Button } from '../dist/index.min';


storiesOf('Components', module)
  .add(
    'Popover',
    () => {
      const triggerOnHover = boolean('Trigger on hover', true );

      return(
        <Popover
          content={close => (
            <div>
              Some actionable / Simple content goes here
              <Button onClick={close}>Close Popover</Button>
            </div>
          )}
          triggerOnHover={triggerOnHover}
        >
          {triggerOnHover ? 'Hover Me' : 'Click Me'}
        </Popover>
      );
    }
  );
