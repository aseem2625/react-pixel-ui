import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { RipplePointer } from 'components/index';


storiesOf('Components', module)
  .add(
    'RipplePointer',
    () => {
      const isPrimary = boolean('Primary Ripple', false),
      className = text('Classes', 'class1 class2');

      return (
        <div style={{ height: 100, width: 100, background: `${isPrimary ? '#fff' : '#000'}` }}>
          <RipplePointer
            isPrimary={isPrimary}
            className={className}
            onClick={action('RipplePointer clicked!')}
            style={{ left: 50, top: 50 }}
          />
        </div>
      );
    }
  );
