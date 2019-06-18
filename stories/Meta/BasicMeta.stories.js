import React from 'react';

import { storiesOf } from '@storybook/react';
import BasicMeta from 'components/Meta/BasicMeta';


/*
* Import BasicMeta manually from 'react-pixel-ui/src/components/Meta/BasicMeta'
* */
storiesOf('Components/Meta', module)
  .add(
    'BasicMeta',
    () => (
      <div>
        <BasicMeta
          meta = {{
            title: 'Title of page',
            page_url: 'Url of this page',
            description: 'Some description',
            keywords: 'comma separated keywords/short sentence like this, which describes your current page, or which describes your website'
          }}
        />

        {/* Rest of the component body goes here */}
      </div>
    )
  );
