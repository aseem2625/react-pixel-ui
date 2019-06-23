import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { Tooltip } from 'components/index';


storiesOf('Components', module)
  .add(
    'Tooltip',
    () => (
      <Tooltip
        className={text('className', 'class1 class2')}
        uiClass={text('uiClass', '')}
        tooltipContent={text('tooltipText', 'Some tooltip content')}
        uiClassContent={text('uiClassContent', 'ui-hasShadow ui-bg-black ui-txt-white')}
      >
        Hover/Tap Me!
      </Tooltip>
    )
  );
