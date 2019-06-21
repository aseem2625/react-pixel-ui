import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import { Tag } from 'components/index';


storiesOf('Components/Tag', module)
  .add(
    'Tag',
    () => (
      <Tag
        className={text('className', 'round')}
        uiClass={text('uiClass', 'ui-hasShadow ui-bg-white')}
      >
        Simple Tag
      </Tag>
    )
  );
