import React from 'react';

import { storiesOf } from '@storybook/react';
import {boolean, text, number} from '@storybook/addon-knobs';

import { Popover, Button } from 'components/index';


storiesOf('Components', module)
  .add(
    'Popover',
    () => {
      const className = text('className', 'class1 class2'),
        uiClass = text('uiClass', 'ui-hasShadow ui-bg-black ui-txt-white'),
        triggerOnHover = boolean('triggerOnHover', true ),
        delay = number('delay (Optional / provide only when triggerOnHover = true)', 250); // default value

      return(
        <Popover
          className={className}
          uiClass={uiClass}
          tipPos="top"
          popoverContent={close => (
            <React.Fragment>
              Some actionable / Simple content goes here
              <br />
              <br />
              <Button className="round" onClick={close}>Close Popover</Button>
            </React.Fragment>
          )}
          triggerOnHover={triggerOnHover}
          delay={delay}
        >
          {triggerOnHover ? 'Hover Me' : 'Click Me'}
        </Popover>
      );
    }
  );
