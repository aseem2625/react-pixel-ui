import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import { CheckboxElement } from 'components/index';

import { mockAPI } from 'js-awesome-utils';

storiesOf('Recipes/Checkbox', module)
  .add(
    'Async Action',
    () => (
      <AsyncCheckboxElement
        defaultChecked={true}
        onChange={mockAPI}
        toSuccess={boolean('To success', true)}
      >
        Compose CheckboxElement to handle Async action
      </AsyncCheckboxElement>
    )
  );


class AsyncCheckboxElement extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isDisabled: false,
      isChecked: props.defaultChecked || false
    };
  }

  handleCheck = _ => {
    const isChecked = !this.state.isChecked;

    this.setState({
      isDisabled: true,
      isChecked
    });

    this.props.onChange({}, this.props.toSuccess)
      .then(data => {
        this.setState({
          isDisabled: false
        });
      })
      .catch(err => {
        this.setState({
          isDisabled: false,
          isChecked: !isChecked
        });
      })
  };

  render() {
    const { isChecked, isDisabled } = this.state;

    return (
      <CheckboxElement
        name="field_name"
        disabled={isDisabled}
        checked={isChecked}
        onChange={this.handleCheck}
        isSwitch
      >
        {this.props.children}
      </CheckboxElement>
    );
  }
}
