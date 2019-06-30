import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import { RadioGroup, RadioGroupElement, HelpText } from 'components/index';
import Icon from 'components/Icon/Icon';


storiesOf('Components/Field/RadioGroup', module)
  .add(
    'with FieldWrapper',
    () => (
      <RadioGroup
        className={text('className', 'Custom')}
        name={text('name', 'field_name')}
        label={text('label', 'RadioGroup Element Label')}
        description={text(
          'description',
          <HelpText uiClass="ui-size-md"><Icon name="info" uiClass="ui-svg-size-md" /><span>Some description for this input</span></HelpText>
        )}
        defaultValue="female"
        disabled={boolean('disabled', false)}
        options={[
          {
            value: 'male',
            label: () => (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                Male
              </>
            ),
          },
          {
            value: 'female',
            label: () => <>Female</>,
          },
        ]}
      />
    )
  )
  .add(
    'without FieldWrapper',
    () => (
      <RadioGroup
        name={text('name', 'field_name')}
        disabled={boolean('disabled', false)}
        options={[
          {
            value: 'male',
            label: () => (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                Male
              </>
            ),
          },
          {
            value: 'female',
            label: () => <>Female</>,
          },
        ]}
        defaultValue="male"
      />
    )
  );
