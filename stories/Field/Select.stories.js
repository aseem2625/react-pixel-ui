import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, object } from '@storybook/addon-knobs';

import { Select, SelectElement } from 'components/index';


const countries = [
  {
    name: 'Argentina',
    code: 'ARG',
    flag: 'https://restcountries.eu/data/arg.svg',
    continent: 'South America',
  },
  {
    name: 'Brazil',
    code: 'BRA',
    flag: 'https://restcountries.eu/data/bra.svg',
    continent: 'South America',
  },
  {
    name: 'Canada',
    code: 'CAN',
    flag: 'https://restcountries.eu/data/can.svg',
    continent: 'North America',
  },
  {
    name: 'China',
    code: 'CHN',
    flag: 'https://restcountries.eu/data/chn.svg',
    continent: 'Asia',
  }
];

const nestedCountries = [
  {
    name: 'Uncategorized Item',
  },
  {
    label: 'America',
    options: [
      {
        name: 'Argentina',
        code: 'ARG',
        flag: 'https://restcountries.eu/data/arg.svg',
        continent: 'South America',
      },
      {
        name: 'Brazil',
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
        code: 'IND',
        flag: 'https://restcountries.eu/data/ind.svg',
        continent: 'Asia',
      },
      {
        name: 'China',
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
        defaultValue={object('Default value', countries[2])}
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
        defaultValue={object('Default value', countries[1])}
        options={object('Options', nestedCountries)}
        disabled={boolean('Disabled', false)}
        show={boolean('Show', true)}
        enableSearch={boolean('Enable search', true)}
        searchKeys={['name', 'continent']}
      />
    )
  );
