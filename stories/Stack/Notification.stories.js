import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean, text, number } from '@storybook/addon-knobs';

import { NotificationsContainer, openNotification, Button} from 'components/index';

storiesOf('Components/Stack', module)
  .add(
    'Notification',
    () => {
      const
        className = text("className", 'class1 class2'),
        uiClass = text('uiClass', ''),
        showCross = boolean("showCross", false),
        duration = number("duration (in ms)", 3000),
        enableAutoRemove = boolean("enableAutoRemove", true);

      return (
        <div>
          {/* All modals share common instance. NotificationsContainer to be present at top level of React app */}
          <NotificationsContainer />

          {/* Open notifications */}
          <Button
            onClick={_ =>
              openNotification({
                className,
                uiClass,
                content: close => (
                  <div>
                    Notification content{' '}
                    <button onClick={close}>Close notification</button>
                  </div>
                ),
                showCross,
                enableAutoRemove,
                duration
              })
            }
          >
            Open Notification
          </Button>
        </div>
      );
    }
  );
