import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Clipboard, Tooltip } from 'components/index';
import Icon  from 'components/Icon/Icon';


function onMouseLeave(onCopyEnd) {
  /*
  * setTimeout with significant elapse time (to be more than animation/transition time, but lesser than speed to manually mouseOver again),
  * This helps to avoid visible effect of transform changing to original CSS immediately.
  * */

  return _ => setTimeout(_ => onCopyEnd(), 400); // Duration must be less than 1500
}

storiesOf('Components/Clipboard', module)
  .add(
    'ClipboardWithTooltip',
    () => {
      const toCopy = text('toCopy', 'Some Text for ClipboardWithTooltip');

      // Use isCopied to change classes / you can change styles using .Clipboard--copied
      return (
        <Clipboard
          className="tooltip"
          toCopy={toCopy}
          onCopy={action('onCopy capured!')}
          hideTextarea
        >
          {
            ({ isCopied, onCopyEnd }) => (
              <Tooltip
                tipPos="top"
                tooltipContent={isCopied ? 'Copied!' : 'Copy some url'}
                uiClassContent={`ui-hasShadow ${isCopied ? 'ui-bg-green' : 'ui-bg-black'} ui-txt-white`}
                onMouseLeave={onMouseLeave(onCopyEnd)}
              >
                Copy <Icon name="copy" uiClass="ui-svg-size-md" />
              </Tooltip>
            )
          }
        </Clipboard>
      );
    }
  );

