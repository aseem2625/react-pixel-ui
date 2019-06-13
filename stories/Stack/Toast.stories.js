import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean, text, number, select } from '@storybook/addon-knobs';

import { ToastsContainer, openToast, Button} from 'components/index';

storiesOf('Components/Stack', module)
  .add(
    'Toast',
    () => {
      const
        content = 'Add toast content', // Can be a function (close) => (<div>Add toast content</div>)
        enableAutoRemove = boolean("Enable auto remove", true),
        showCross = boolean("Show cross", false),
        duration = number("Duration in ms", 3000),
        className = text("Classes", 'class1 class2'),
        type = select('Type', ['', 'success', 'error'], '');

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
                type,
              })
            }
          >
            Show Toast
          </Button>
        </div>
      );
    }
  );
