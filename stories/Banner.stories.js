import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import DummyContainer from './_story-helpers/DummyContainer';

import { Banner } from 'components/index';
import Icon from 'components/Icon/Icon';


storiesOf('Components', module)
  .add(
    'Banner',
    () => {
      const className = text('className', 'class1 class2'),
        uiClass = text('uiClass', 'ui-hasShadow ui-bg-red ui-txt-white'); // Try ui-bg-green, ui-bg-yellow

      return (
        <DummyContainer>
          <Banner
            className={className}
            uiClass={uiClass}
          >
            <Icon name="info" uiClass="ui-svg-size-lg"/>
            <span>Add some Banner text here and see it wrapping inside this Banner parent.</span>
          </Banner>
        </DummyContainer>
      );
    }
  );
