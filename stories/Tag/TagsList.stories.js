import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { TagsList, Tag } from '../../dist/index.min';


storiesOf('Components/Tag', module)
  .add(
    'TagsList',
    () => (
      <TagsList className={text('Classes', 'class1 class2')}>
        <Tag>Simple Tag </Tag>
        <Tag>Simple very big text Tag</Tag>
        <Tag className="green">Simple Tag </Tag>
      </TagsList>
    )
  );
