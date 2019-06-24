import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { freezeRoot, unfreezeRoot } from '../_story-helpers/utils';

import { PopupsContainer, openConfirmPopup, AsyncButton} from 'components/index';
import { mockAPI } from 'js-awesome-utils';
// import Spinner from "../../src/components/Loader/Spinner";

storiesOf('Components/Stack', module)
  .add(
    'ConfirmPopup',
    () => {
      const
        className = text("className", 'class1 class2'),
        uiClass = text("uiClass", ''),
        title = text("title", 'Confirm Me?'),
        description = text("description", 'Wow this is amazing'),
        affirmLabel = text("affirmLabel", 'Some Promise Button'),
        cancelLabel = text("cancelLabel", 'Cancel Me'),
        onAffirm = mockAPI,
        onCancel = _ => console.log('Close Confirm'),
        affirmButtonClass = text('affirmButtonClass', 'primary'),
        cancelButtonClass = text('cancelButtonClass', '');

      const handleConfirm = _ => {
        return openConfirmPopup({
          uiClass,
          className,
          title,
          description,
          cancelLabel,
          affirmLabel,
          onAffirm,
          onCancel,
          affirmButtonClass,
          cancelButtonClass
        });
      };

      return (
        <div>
          {/* All modals share common instance. PopupsContainer to be present at top level of React app */}
          <PopupsContainer
            onShow={freezeRoot}
            onHide={unfreezeRoot}
          />

          {/* Open a confirmation modal */}
          <AsyncButton onClick={handleConfirm} pendingText="Pending...">
            Confirm Modal
            {/*{isPending => <Spinner show={isPending} />}*/}
          </AsyncButton>
        </div>
      );
    }
  );

