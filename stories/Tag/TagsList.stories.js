import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { TagsList, Tag } from 'components/index';


storiesOf('Components/Tag', module)
  .add(
    'TagsList',
    () => (
      <div style={{width: 250, border: '1px solid black'}}>
        <TagsList className={text('Classes', 'class1 class2')}>
          <Tag showShadow>Simple Tag </Tag>
          <Tag showShadow>Simple very big text Tag</Tag>
          <Tag showShadow isRound>Simple Tag </Tag>
        </TagsList>
      </div>
    )
  );
