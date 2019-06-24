import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean, text, number, select } from '@storybook/addon-knobs';

import { ToastsContainer, openToast, Button} from 'components/index';

storiesOf('Components/Stack', module)
  .add(
    'Toast',
    () => {
      const
        className = text("className", 'class1 class2'),
        uiClass = text("uiClass", 'class1 class2'),
        showCross = boolean("showCross", false),
        enableAutoRemove = boolean("enableAutoRemove", true),
        duration = number("duration (in ms)", 3000), // default
        content = 'Add toast content'; // Can be a function (close) => (<div>Add toast content</div>)

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
                duration,
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
