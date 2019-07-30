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
      <Form className={text('className', 'Custom')} uiClass={text('uiClass', '')} onSubmit={handleSubmit}>
        {(isPending, isInvalid) => (
          <React.Fragment>
            Simple field 1
            <input name="field1" defaultValue="dog" disabled={isPending} />
            <br />
            <br />
            Simple field 2
            <input name="field2" defaultValue="cat" disabled={isPending} />
            <br />
            <br />

            <Input
              className="Custom"
              name="field3"
              label="Field 3"
              placeholder="Add some value"
              description="Add some description"
              defaultValue="hi lolol"
              disabled
            />

            <Textarea
              className="Custom"
              name="field4"
              label="Field 4"
              placeholder="Add some value"
              defaultValue="check check"
              description="Add some description"
              disabled={isPending}
            />

            <Textarea
              className="Custom"
              name="field5"
              label="Field 5"
              defaultValue="wow"
              placeholder="Add some value"
              autoResize
              disabled={isPending}
            />

            <RadioGroup
              className="Custom"
              name="field6"
              label="Field 6"
              defaultValue="van"
              options={[
                {
                  value: 'van',
                  label: 'Van',
                },
                {
                  value: 'car',
                  label: () => <>Car</>,
                },
              ]}
              disabled={isPending}
            />

            <Checkbox
              className="Custom"
              name="field7"
              label="Field 7"
              defaultChecked
              disabled
            >
              Checkbox 1
            </Checkbox>

            <Checkbox
              className="Custom"
              name="field8"
              label="Field 8"
              disabled={isPending}
            >
              Checkbox 2
            </Checkbox>

            <Select
              className="Custom"
              uiClassOptions="ui-hasShadow"
              name="field9"
              label="Field 9"
              placeholder="Select"
              description="Some description"
              defaultValue="india"
              options={nestedCountries}
              disabled={isPending}
              enableSearch
              searchKeys={['name', 'continent']}
            />
            <Checkbox
              className="Custom"
              name="field10"
              label="Field 10"
              isSwitch
              disabled={isPending}
            >
              Switch
            </Checkbox>
            <br />

            <Button type="button" disabled={isPending}>
              Normal Button
            </Button>

            <AsyncButton
              className="primary"
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
