import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import { Checkbox, CheckboxElement } from 'components/index';


storiesOf('Components/Field/Checkbox', module)
  .add(
    'with FieldWrapper',
    () => (
      <Checkbox
        name={text('Name', 'field_name')}
        label={text('Label', 'Checkbox Element')}
        description={text('Description', 'Some description for this input')}
        defaultChecked={boolean('Default checked', true)}
        disabled={boolean('Disabled', false)}
        isSwitch={boolean('Switch', false)}
      >
        Checkbox
      </Checkbox>
    )
  )
  .add(
    'without FieldWrapper',
    () => (
      <CheckboxElement
        name={text('Name', 'field_name')}
        defaultChecked={boolean('Default checked', true)}
        disabled={boolean('Disabled', false)}
        isSwitch={boolean('Switch', false)}
      >
        Checkbox
      </CheckboxElement>
    )
  );
