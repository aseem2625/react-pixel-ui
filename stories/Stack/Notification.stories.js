import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean, text, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { NotificationsContainer, openNotification, Button} from 'components/index';

storiesOf('Components/Stack', module)
  .add(
    'Notification',
    () => {
      const
        className = text("className", 'class1 class2'),
        uiClass = text('uiClass', 'ui-hasShadow ui-bg-black ui-txt-white'),
        showCross = boolean("showCross", false), // Pass this prop if enableAutoRemove isn't present
        autoRemoveDuration = number("autoRemoveDuration (in ms)", 3000),
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
                  <React.Fragment>
                    props:content can be a fn. or simple text. Basic styles are pre-applied.
                    <br />
                    <br />
                    <Button onClick={close}>Close notification</Button>
                  </React.Fragment>
                ),
                onClose: action('Notification closed'),
                showCross,
                enableAutoRemove,
                autoRemoveDuration
              })
            }
          >
            Open Notification
          </Button>
        </div>
      );
    }
  );
