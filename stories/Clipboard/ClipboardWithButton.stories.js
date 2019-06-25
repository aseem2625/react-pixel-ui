import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Clipboard, Button } from 'components/index';
import Icon  from 'components/Icon/Icon';


storiesOf('Components/Clipboard', module)
  .add(
    'ClipboardWithButton',
    () => {
      const toCopy = text('toCopy', 'Some Text for ClipboardWithTooltip');


      // Use isCopied to change classes / you can change styles using .Clipboard--copied
      return (
        <Clipboard
          className="button"
          toCopy={toCopy}
          onCopy={action('onCopy capured!')}
        >
          {
            ({ isCopied }) => (
              <Button>
                {isCopied ? 'Copied!' : 'Copy some url'}
                <Icon name="copy" uiClass="ui-svg-size-md" />
              </Button>
            )
          }
        </Clipboard>
      );
    }
  );


