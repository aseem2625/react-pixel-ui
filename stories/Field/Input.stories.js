import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import { Input, InputElement } from 'components/index';


storiesOf('Components/Field/Input', module)
  .add(
    'with FieldWrapper',
    () => (
      <Input
        name={text('Name', 'field_name')}
        label={text('Label', 'Input Element')}
        placeholder={text('Placeholder', 'Enter value')}
        description={text('Description', 'Some description for this input')}
        defaultValue={text('Default value', 'hi lol')}
        disabled={boolean('Disabled', false)}
      />
    )
  )
  .add(
    'without FieldWrapper',
    () => (
      <InputElement
        name={text('Name', 'field_name')}
        placeholder={text('Placeholder', 'Enter value')}
        defaultValue={text('Default value', 'hi lol')}
        disabled={boolean('Disabled', false)}
      />
    )
  );
