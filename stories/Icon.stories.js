import React from 'react';

import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import Icon from 'components/Icon/Icon';


/*
* Import Icon manually from 'react-pixel-ui/src/components/Icon/Icon'
* */
storiesOf('Components', module)
  .add(
    'Icon',
    () => {
      const uiClass = select('uiClass', ['ui-svg-size-sm', 'ui-svg-size-md', 'ui-svg-size-lg']),
        className = text('className', 'class1 class2');

      return (
        <div>
          <Icon name="dislike" className={className} uiClass={uiClass} />
          <Icon name="like" className={className} uiClass={uiClass} />
          <Icon name="views" className={className} uiClass={uiClass} />
          <Icon name="info" className={className} uiClass={uiClass} />
        </div>
      );
    }
  );
