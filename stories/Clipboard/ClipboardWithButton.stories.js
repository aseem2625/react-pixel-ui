import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { ClipboardWithButton } from '../../dist/index.min';


storiesOf('Components/Clipboard', module)
  .add(
    'ClipboardWithButton',
    () => (
      <ClipboardWithButton
        toCopy={text('To copy', 'Some Text for ClipboardWithButton')}
        buttonCopyText={text('Button text before copy', 'Copy some url')}
        buttonCopiedText={text('Button text on copy', 'Copied')}
      />
    )
  );
