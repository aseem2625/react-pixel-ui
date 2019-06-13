import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import { Dropdown } from 'components/index';


storiesOf('Components', module)
  .add(
    'Dropdown ',
    () => {
      const showBeforeOptions = boolean('_Show before options', false),
      showAfterOptions = boolean('_Show after options', false);

      return (
        <Dropdown
          className={text('Classes', 'class1 class2')}
          trigger={() => <div>Some trigger element</div>}
          showOnHover={boolean('Show on hover', false)}
          beforeOptions={showBeforeOptions && (close => <b>Before options element</b>)}
          afterOptions={showAfterOptions && (close => <b>After options element</b>)}
        >
          {
            (close) => (
              <>
                <div>div element</div>
                <span onClick={close}> span element (click to close)</span>
                <button>button element</button>
              </>
            )
          }
        </Dropdown>
      );
    }
  );

