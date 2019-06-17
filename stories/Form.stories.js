import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import { Form, Input, Textarea, Select, Checkbox, RadioGroup, Button, AsyncButton } from 'components/index';
import { mockAPI } from 'js-awesome-utils';
import {action} from "@storybook/addon-actions";
import { nestedCountries } from "./Field/Select.stories";


storiesOf('Components', module)
  .add(
    'Form',
    () => {
      async function handleSubmit(formData) {
        console.log('form...', formData);

        const data = await mockAPI(formData);
        return data;
      }

      return (
      <Form onSubmit={handleSubmit}>
        {(isPending, isInvalid) => (
          <React.Fragment>
            <input name="field1" defaultValue="dog" disabled={isPending} />
            <input name="field2" defaultValue="cat" disabled={isPending} />

            <Input
              name="field3"
              label="Field 3"
              defaultValue="hi lolol"
              placeholder="Add some value"
              disabled
            />

            <Textarea
              name="field4"
              label="Field 4"
              defaultValue="check check"
              placeholder="Add some value"
              disabled={isPending}
            />

            <Textarea
              name="field5"
              label="Field 5"
              defaultValue="wow"
              placeholder="Add some value"
              autoResize
              disabled={isPending}
            />
            <RadioGroup
              name="field6"
              label="Field 6"
              options={[
                {
                  value: 'male',
                  label: 'Male',
                },
                {
                  value: 'female',
                  label: () => <>Female</>,
                },
              ]}
              disabled={isPending}
            />

            <Checkbox
              name="field7"
              label="Field 7"
              defaultChecked
              disabled
            >
              Checkbox 1
            </Checkbox>

            <Checkbox
              name="field8"
              label="Field 8"
              disabled={isPending}
            >
              Checkbox 2
            </Checkbox>

            <Checkbox
              name="field9"
              label="Field 9"
              isSwitch
              disabled={isPending}
            >
              Switch
            </Checkbox>

            <Select
              name="field10"
              label="Field 10"
              placeholder="Select"
              description="Some description"
              defaultValue={nestedCountries[1].options[0]}
              options={nestedCountries}
              disabled={isPending}
              enableSearch={boolean('Enable search', false)}
              searchKeys={['name', 'continent']}
            />

            <br />

            <Button type="button" isPrimary disabled={isPending}>
              Normal Button
            </Button>

            <AsyncButton
              isPrimary
              pendingText="Submitting.."
              isPending={isPending}
              disabled={isInvalid}
            >
              Submit Button
            </AsyncButton>
          </React.Fragment>
        )}
      </Form>
    );
    }
  );
