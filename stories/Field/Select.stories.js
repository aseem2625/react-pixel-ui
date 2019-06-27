import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, object } from '@storybook/addon-knobs';

import { Select, SelectElement, HelpText } from 'components/index';
import Icon from 'components/Icon/Icon';


export const countries = [
  {
    name: 'Argentina',
    value: 'argentina',
    code: 'ARG',
    flag: 'https://restcountries.eu/data/arg.svg',
    continent: 'South America',
  },
  {
    name: 'Brazil',
    value: 'brazil',
    code: 'BRA',
    flag: 'https://restcountries.eu/data/bra.svg',
    continent: 'South America',
  },
  {
    name: 'Canada',
    value: 'canada',
    code: 'CAN',
    flag: 'https://restcountries.eu/data/can.svg',
    continent: 'North America',
  },
  {
    name: 'China',
    value: 'china',
    code: 'CHN',
    flag: 'https://restcountries.eu/data/chn.svg',
    continent: 'Asia',
  }
];

export const nestedCountries = [
  {
    name: 'Uncategorized Item',
  },
  {
    label: 'America',
    options: [
      {
        name: 'Argentina',
        value: 'argentina',
        code: 'ARG',
        flag: 'https://restcountries.eu/data/arg.svg',
        continent: 'South America',
      },
      {
        name: 'Brazil',
        value: 'brazil',
        code: 'BRA',
        flag: 'https://restcountries.eu/data/bra.svg',
        continent: 'South America',
      },
    ]
  },   {
    label: 'Asia',
    options: [
      {
        name: 'India',
        value: 'india',
        code: 'IND',
        flag: 'https://restcountries.eu/data/ind.svg',
        continent: 'Asia',
      },
      {
        name: 'China',
        value: 'china',
        code: 'CHN',
        flag: 'https://restcountries.eu/data/chn.svg',
        continent: 'Asia',
      }
    ]
  }
];


storiesOf('Components/Field/Select', module)
  .add(
    'with FieldWrapper',
    () => (
      <Select
        className={text('className', 'Custom')}
        name={text('name', 'field_name')}
        label={text('label', 'Select Element')}
        placeholder={text('placeholder', 'Enter value')}
        description={object(
          'description',
          <HelpText uiClass="ui-size-md"><Icon name="info" uiClass="ui-svg-size-md" /><span>Some description for this input</span></HelpText>
        )}
        defaultValue={text('defaultValue', 'brazil')}
        options={object('options', countries)}
        disabled={boolean('disabled', false)}
        show={boolean('show', false)}
        enableSearch={boolean('enableSearch', false)}
        searchKeys={['name', 'continent']}
        uiClassOptions={text('uiClassOptions', 'ui-hasShadow ui-bg-white')}
      />
    )
  )
  .add(
    'without FieldWrapper',
    () => (
      <SelectElement
        name={text('name', 'field_name')}
        placeholder={text('placeholder', 'Enter value')}
        defaultValue={text('defaultValue', 'argentina')}
        options={object('options', nestedCountries)}
        disabled={boolean('disabled', false)}
        show={boolean('show', false)}
        enableSearch={boolean('enableSearch', true)}
        searchKeys={['name', 'continent']}
        uiClassOptions={text('uiClassOptions', 'ui-hasShadow ui-bg-white')}
      />
    )
  );
