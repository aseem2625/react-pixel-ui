import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import { Input, InputElement, HelpText } from 'components/index';
import Icon from 'components/Icon/Icon';


storiesOf('Components/Field/Input', module)
  .add(
    'with FieldWrapper',
    () => (
      <Input
        className={text('className', 'Custom')}
        name={text('name', 'field_name')}
        label={text('label', 'Input Field Label')}
        placeholder={text('placeholder', 'Enter value')}
        description={text(
          'description',
          <HelpText uiClass="ui-size-md"><Icon name="info" uiClass="ui-svg-size-md" /><span>Some description for this input</span></HelpText>
        )}
        defaultValue={text('defaultValue', 'hi lol')}
        disabled={boolean('disabled', false)}
        required={boolean('required', true)}
      />
    )
  )
  .add(
    'without FieldWrapper',
    () => (
      <InputElement
        name={text('name', 'field_name')}
        placeholder={text('placeholder', 'Enter value')}
        defaultValue={text('defaultValue', 'hi lol')}
        disabled={boolean('disabled', false)}
      />
    )
  );
