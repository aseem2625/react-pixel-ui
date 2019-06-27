import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, object } from '@storybook/addon-knobs';

import { Checkbox, CheckboxElement, HelpText } from 'components/index';
import Icon from 'components/Icon/Icon';


storiesOf('Components/Field/Checkbox', module)
  .add(
    'with FieldWrapper',
    () => (
      <Checkbox
        className={text('className', 'Custom')}
        name={text('name', 'field_name')}
        label={text('label', 'Checkbox Field Label')}
        description={text(
          'description',
          <HelpText uiClass="ui-size-md"><Icon name="info" uiClass="ui-svg-size-md" /><span>Some description for this input</span></HelpText>
        )}
        defaultChecked={boolean('defaultChecked', true)}
        disabled={boolean('disabled', false)}
        required={boolean('required', true)}
        isSwitch={boolean('isSwitch', false)}
      >
        Checkbox
      </Checkbox>
    )
  )
  .add(
    'without FieldWrapper',
    () => (
      <CheckboxElement
        name={text('name', 'field_name')}
        defaultChecked={boolean('defaultChecked', true)}
        disabled={boolean('disabled', false)}
        isSwitch={boolean('isSwitch', false)}
      >
        Checkbox
      </CheckboxElement>
    )
  );
