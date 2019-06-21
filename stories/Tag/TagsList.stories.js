import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { TagsList, Tag } from 'components/index';


storiesOf('Components/Tag', module)
  .add(
    'TagsList',
    () => (
      <div style={{width: 500, background: '#f9f9f9', padding: 32}}>
        <TagsList className={text('className', 'class1 class2')}>
          <Tag>Simple Tag </Tag>
          <Tag>Simple very big text Tag</Tag>
          <Tag>Simple Tag </Tag>
        </TagsList>
      </div>
    )
  );
