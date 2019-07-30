import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { Skeleton } from 'components/index';

storiesOf('Components/Loader', module)
  .add(
    'Skeleton',
    () => {
      // Pass skeleton structure upon which shimmering will be applied
      return (
        <Skeleton className={text('className', 'Custom')} uiClass={text('uiClass', '')}>
          <div>
            <div className="placeholder circle" style={{display: 'inline-block'}}></div>
            <div className="placeholder" style={{width: 200, display: 'inline-block'}}></div>
            <div className="placeholder" style={{width: 80, display: 'inline-block'}}></div>
          </div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <br />
          <br />
          <div className="placeholder" style={{height: 32}}></div>
        </Skeleton>
      );
    }
  );
