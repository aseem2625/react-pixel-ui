import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import { Textarea, TextareaElement } from 'components/index';


storiesOf('Components/Field/Textarea', module)
  .add(
    'with FieldWrapper',
    () => (
      <Textarea
        name={text('Name', 'field_name')}
        label={text('Label', 'Textarea Element')}
        placeholder={text('Placeholder', 'Enter value')}
        description={text('Description', 'Some description for this input')}
        defaultValue={text('Default value', 'hi lol')}
        disabled={boolean('Disabled', false)}
        autoResize={boolean('Auto resize', true)}
        disableEnterPress={boolean('Disable enter press', false)}
      />
    )
  )
  .add(
    'without FieldWrapper',
    () => (
      <TextareaElement
        name={text('Name', 'field_name')}
        placeholder={text('Placeholder', 'Enter value')}
        defaultValue={text('Default value', 'hi lol')}
        disabled={boolean('Disabled', false)}
        autoResize={boolean('Auto resize', true)}
        disableEnterPress={boolean('Disable enter press', false)}
      />
    )
  );
