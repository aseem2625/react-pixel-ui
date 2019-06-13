import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { Tag } from 'components/index';


storiesOf('Components/Tag', module)
  .add(
    'Tag',
    () => (
      <Tag className={text('Tag', 'green')}>Simple Tag</Tag>
    )
  );
