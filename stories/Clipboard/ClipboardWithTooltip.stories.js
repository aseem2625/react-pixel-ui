import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { ClipboardWithTooltip, Icon } from 'components/index';


storiesOf('Components/Clipboard', module)
  .add(
    'ClipboardWithTooltip',
    () => (
      <ClipboardWithTooltip
        toCopy={text('To copy', 'Some Text for ClipboardWithTooltip')}
        tooltipCopyText={text('Tooltip text before copy', 'Copy some url')}
        tooltipCopiedText={text('Tooltip text on copy', 'Copied')}
      >
        Copy Icon
      </ClipboardWithTooltip>
    )
  );
