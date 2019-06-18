import React from 'react';

import { storiesOf } from '@storybook/react';
import _SocialMeta from 'components/Meta/SocialMeta';

// Can be generic share image / brand image.
import defaultImage from 'assets/img/default.jpg';

const SocialMeta = _SocialMeta(defaultImage); // Setting the default preview image

/*
* Import SocialMeta manually from 'react-pixel-ui/src/components/Meta/SocialMeta'
* */
storiesOf('Components/Meta', module)
  .add(
    'SocialMeta',
    () => (
      <div>
        <SocialMeta
          meta = {{
            title: 'Title of page',
            page_url: 'Url of this page',
            image: '',
            description: 'Some description',
            website_name: 'website name',
            twitter_handle: '@twitter_handle',
          }}
        />

        {/* Rest of the component body goes here */}
      </div>
    )
  );
