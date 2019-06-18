import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import Icon from 'components/Icon/Icon';


/*
* Import Icon manually from 'react-pixel-ui/src/components/Icon/Icon'
* */
storiesOf('Components', module)
  .add(
    'Icon',
    () => {
      const isLarge = boolean('Large size', false);

      return (
        <div>
          <Icon name="dislike" isLarge={isLarge} />
          <Icon name="like" isLarge={isLarge} />
          <Icon name="views" isLarge={isLarge} />
          <Icon name="info" isLarge={isLarge} />
        </div>
      );
    }
  );
