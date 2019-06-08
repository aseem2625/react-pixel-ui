import React from 'react';
import OutsideClickLayer from 'components/xtra/OutsideClickLayer';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './Dropdown.styl';

export default class Dropdown extends React.PureComponent {
  state = this.initState();

  initState() {
    const { options, defaultValue, show = false } = this.props;

    return {
      options,
      value: defaultValue || options[0],
      show,
    };
  }

  toggleDropdownOptions = _ => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleSelectOption = option => {
    this.setState({ value: option, show: false });
  };

  render() {
    const {
      className,
      customOptionComponent,
      customSelectedComponent,
      beforeComponent,
      afterComponent,
      disabled,
    } = this.props;
    const { value, show } = this.state;

    return (
      <OutsideClickLayer
        onOutsideClick={_ => this.setState({ show: false })}
        enabled
      >
        <div
          className={classList(
            'Dropdown',
            show && 'Dropdown--show',
            prefixToClasses('Dropdown--', className)
          )}
        >
          <div
            className="Dropdown-trigger"
            onClick={disabled ? undefined : this.toggleDropdownOptions}
          >
            <div className="Dropdown-selected">
              {customSelectedComponent ? customSelectedComponent(value) : value}
            </div>
          </div>
          <DropdownOptions
            options={this.state.options}
            customOptionComponent={customOptionComponent}
            beforeComponent={beforeComponent}
            afterComponent={afterComponent}
            value={value}
            handleSelectOption={this.handleSelectOption}
          />
        </div>
      </OutsideClickLayer>
    );
  }
}

/*
 * TODO:
 * 1. Add arrow keys suppport
 * 2. Grouped Options
 * */

class DropdownOptions extends React.PureComponent {
  render() {
    const {
      options,
      value,
      handleSelectOption,
      customOptionComponent,
      beforeComponent,
      afterComponent,
    } = this.props;

    return (
      <div className="Dropdown-options">
        <ul>
          {beforeComponent && <li>{beforeComponent}</li>}
          {options.map((o, ix) => (
            <li
              key={ix}
              onClick={value === o ? undefined : _ => handleSelectOption(o)}
              className={classList(value === o && 'Dropdown-option--highlight')}
            >
              {customOptionComponent ? customOptionComponent(o) : o}
            </li>
          ))}
          {afterComponent && <li>{afterComponent}</li>}
        </ul>
      </div>
    );
  }
}
