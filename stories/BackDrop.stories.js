import React from 'react';

import { storiesOf } from '@storybook/react';
import {boolean, text} from '@storybook/addon-knobs';

import { BackDrop, Button, Select, Tag, RipplePointer, HelpText, Card } from 'components/index';
import {action} from "@storybook/addon-actions";


storiesOf('Components', module)
  .add(
    'BackDrop',
    () => (
      <div>
        <Button>Some Button 1</Button>
        <BackDrop show={boolean('Show', false)}>
          <Button style={{position: 'fixed', left: 40, top: 50}}>Some Button</Button>
        </BackDrop>
        <Button>Some Button 2</Button>
        <Button>Some Button 3</Button>
        <Tag>Tag</Tag>

        <RipplePointer
          style={{ left: 50, top: 50 }}
          isPrimary
        />

        <HelpText isLarge>
          Some HelpText
        </HelpText>

        <Card animate hasShadow>
          Content line 1
          <br />
          Content line 2
          <br />
        </Card>
      </div>
    )
  );
