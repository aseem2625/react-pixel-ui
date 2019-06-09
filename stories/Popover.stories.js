import React from 'react';

import { storiesOf } from '@storybook/react';
import {boolean, text} from '@storybook/addon-knobs';

import { Popover, Button } from '../dist/index.min';


storiesOf('Components', module)
  .add(
    'Popover',
    () => {
      const triggerOnHover = boolean('Trigger on hover', true ),
        className=text('Classes', 'class1 class2');

      return(
        <Popover
          content={close => (
            <div>
              Some actionable / Simple content goes here
              <Button onClick={close}>Close Popover</Button>
            </div>
          )}
          triggerOnHover={triggerOnHover}
          className={className}
        >
          {triggerOnHover ? 'Hover Me' : 'Click Me'}
        </Popover>
      );
    }
  );
