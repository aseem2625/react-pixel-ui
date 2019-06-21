import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import DummyContainer from '../_story-helpers/DummyContainer';

import { TagsList, Tag } from 'components/index';


storiesOf('Components/Tag', module)
  .add(
    'TagsList',
    () => (
      <DummyContainer>
        <TagsList className={text('className', 'class1 class2')}>
          <Tag>Simple Tag </Tag>
          <Tag>Simple very big text Tag</Tag>
          <Tag>Simple Tag </Tag>
        </TagsList>
      </DummyContainer>
    )
  );
