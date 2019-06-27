import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, object } from '@storybook/addon-knobs';

import { Textarea, TextareaElement, HelpText } from 'components/index';
import Icon from 'components/Icon/Icon';


storiesOf('Components/Field/Textarea', module)
  .add(
    'with FieldWrapper',
    () => (
      <Textarea
        className={text('className', 'Custom')}
        name={text('name', 'field_name')}
        label={text('label', 'Textarea Field Label')}
        placeholder={text('placeholder', 'Enter value')}
        description={text(
          'description',
          <HelpText uiClass="ui-size-md"><Icon name="info" uiClass="ui-svg-size-md" /><span>Some description for this input</span></HelpText>
        )}
        defaultValue={text('defaultValue', 'hi lol')}
        disabled={boolean('disabled', false)}
        required={boolean('required', true)}
        autoResize={boolean('autoResize', true)}
        disableEnterPress={boolean('disableEnterPress', false)}
      />
    )
  )
  .add(
    'without FieldWrapper',
    () => (
      <TextareaElement
        name={text('name', 'field_name')}
        placeholder={text('placeholder', 'Enter value')}
        defaultValue={text('defaultValue', 'hi lol')}
        disabled={boolean('disabled', false)}
        autoResize={boolean('autoResize', true)}
        disableEnterPress={boolean('disableEnterPress', false)}
      />
    )
  );
