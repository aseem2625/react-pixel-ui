import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Tooltip } from 'components/index';


storiesOf('Components', module)
  .add(
    'Tooltip',
    () => (
      <Tooltip
        className={text('className', 'class1 class2')}
        uiClass={text('uiClassContent', 'ui-hasShadow ui-bg-black ui-txt-white')}
        tipPos="top"
        tooltipContent={text('tooltipText', 'Some tooltip content')}
        onMouseLeave={action('onMouseLeave captured!')}
      >
        Hover/Tap Me!
      </Tooltip>
    )
  );
