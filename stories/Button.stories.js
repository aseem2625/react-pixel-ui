import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from '../dist/index.min';


storiesOf('Components/Button', module)
  .add(
    'Default Button',
    () => <Button>Default Button</Button>
  )
  .add(
    'Primary Button',
    () => <Button isPrimary>Primary Button</Button>
  )
  .add(
    'Round Button',
    () => <Button isRound>Round Button</Button>
  )
  .add(
    'Primary Round Button',
    () => <Button isPrimary isRound>Round Button</Button>
  )
  .add(
    'Disabled Button',
    () => <Button disabled>Disabled Button</Button>
  )
  .add(
    'Link Button',
    () => <Button isLink>Link Button</Button>
  )
  .add(
    'Custom classes on Button',
    () => <Button className="class1 class2">Custom class Button</Button>
  );
