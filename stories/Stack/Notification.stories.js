import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean, text, number } from '@storybook/addon-knobs';

import { NotificationsContainer, openNotification, Button} from '../../dist/index.min';

storiesOf('Components/Stack', module)
  .add(
    'Notification',
    () => {
      const enableAutoRemove = boolean("Enable auto remove", true),
        showCross = boolean("Show cross", false),
        duration = number("Duration in ms", 3000),
        className = text("Classes", 'class1 class2');

      return (
        <div>
          {/* All modals share common instance. NotificationsContainer to be present at top level of React app */}
          <NotificationsContainer />

          {/* Open notifications */}
          <Button
            onClick={_ =>
              openNotification({
                content: close => (
                  <div>
                    Notification content{' '}
                    <button onClick={close}>Close notification</button>
                  </div>
                ),
                showCross,
                enableAutoRemove,
                duration,
                className
              })
            }
          >
            Open Notification
          </Button>
        </div>
      );
    }
  );
