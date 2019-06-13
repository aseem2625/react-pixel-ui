import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import { Banner } from 'components/index';


storiesOf('Components', module)
  .add(
    'Banner',
    () => {
      return (
        <Banner
          className={text('Classes', 'class1 class2')}
          type={select('Type', ['', 'green', 'red', 'yellow'])}
        >
          Add some Banner text
        </Banner>
      );
    }
  );
