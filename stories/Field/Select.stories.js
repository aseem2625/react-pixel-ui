import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, object } from '@storybook/addon-knobs';

import { Select, SelectElement } from 'components/index';


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
        name={text('Name', 'field_name')}
        label={text('Label', 'Select Element')}
        placeholder={text('Placeholder', 'Enter value')}
        description={text('Description', 'Some description for this input')}
        defaultValue={text('Default value', 'brazil')}
        options={object('Options', countries)}
        disabled={boolean('Disabled', false)}
        show={boolean('Show', true)}
        enableSearch={boolean('Enable search', false)}
        searchKeys={['name', 'continent']}
      />
    )
  )
  .add(
    'without FieldWrapper',
    () => (
      <SelectElement
        name={text('Name', 'field_name')}
        placeholder={text('Placeholder', 'Enter value')}
        defaultValue={text('Default value', 'argentina')}
        options={object('Options', nestedCountries)}
        disabled={boolean('Disabled', false)}
        show={boolean('Show', true)}
        enableSearch={boolean('Enable search', true)}
        searchKeys={['name', 'continent']}
      />
    )
  );
