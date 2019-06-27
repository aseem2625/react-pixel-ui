import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import { SmartTipContent } from 'components/index';

storiesOf('Utilities', module)
  .add(
    'SmartTipContent',
    () => {
      const className = text('className', 'Custom'),
        uiClass = text('uiClass', 'ui-hasShadow ui-bg-black ui-txt-white'), // Try ui-bg-white
      children = text(
        'children',
        `SmartTipContent adjusts width of tip based content as per content. You can set max-width. Width of SmartTipContent is independent of parent width. Try changing css:position and css:width of parent.`
      );

      return(
        <div style={{position: 'absolute', left: 640, top: 60}}>
          <SmartTipContent
            className={className}
            uiClass={uiClass}
            tipPos={select('tipPos', ['top', 'right', 'bottom', 'left'], 'top')}
          >
            {children}
          </SmartTipContent>
          Here is actual content
        </div>
      );
    }
  );
