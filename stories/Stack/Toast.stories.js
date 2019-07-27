import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean, text, number, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { ToastsContainer, openToast, Button} from 'components/index';

storiesOf('Components/Stack', module)
  .add(
    'Toast',
    () => {
      const
        className = text("className", 'class1 class2'),
        uiClass = text("uiClass", 'ui-hasShadow'),
        showCross = boolean("showCross", false), // Pass this prop if enableAutoRemove isn't present
        enableAutoRemove = boolean("enableAutoRemove", true),
        autoRemoveDuration = number("autoRemoveDuration (in ms)", 3000), // default
        content = text('content', 'Add toast content'); // Can be a function (close) => (<div>Add toast content</div>)

      return (
        <div>
          {/* All modals share common instance. NotificationsContainer to be present at top level of React app */}
          <ToastsContainer />

          {/* Open toasts */}
          <Button
            onClick={_ =>
              openToast({
                content,
                showCross,
                enableAutoRemove,
                onClose: action('Toast closed'),
                autoRemoveDuration,
                className,
                uiClass,
              })
            }
          >
            Show Toast
          </Button>
        </div>
      );
    }
  );
