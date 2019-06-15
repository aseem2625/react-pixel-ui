import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import { Dropdown } from 'components/index';


storiesOf('Components/Dropdown', module)
  .add(
    'simple',
    () => {
      return (
        <Dropdown
          className={text('Classes', 'class1 class2')}
          trigger={() => <div>Some trigger element</div>}
          showOnHover={boolean('Show on hover', false)}
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
  )
  .add(
    'with beforeOptions',
    () => {
      return (
        <Dropdown
          className={text('Classes', 'class1 class2')}
          trigger={() => <div>Some trigger element</div>}
          showOnHover={boolean('Show on hover', false)}
          beforeOptions={(close => <b>Before options element</b>)}
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
  )
  .add(
    'with afterOptions',
    () => {
      return (
        <Dropdown
          className={text('Classes', 'class1 class2')}
          trigger={() => <div>Some trigger element</div>}
          showOnHover={boolean('Show on hover', false)}
          afterOptions={close => <b>After options element</b>}
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

