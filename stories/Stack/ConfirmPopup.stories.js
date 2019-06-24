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
        title = text("Title", 'Confirm Me?'),
        description = text("Description", 'Wow this is amazing'),
        className = text("Classes", 'class1 class2'),
        cancelLabel = text("Cancel Label", 'Cancel Me'),
        affirmLabel = text("Affirm Label", 'Some Promise Button'),
        onAffirm = mockAPI,
        onCancel = _ => console.log('Close Confirm'),
        affirmButtonClass = text('affirmButtonClass', 'primary'),
        cancelButtonClass = text('cancelButtonClass', '');

      const handleConfirm = _ => {
        return openConfirmPopup({
          title: '',
          description,
          className,
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

