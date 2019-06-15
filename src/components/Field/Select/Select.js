import React from 'react';
import { getFieldClasses, addWrapperToField } from '../Field';
import { classList } from 'js-awesome-utils';

import OutsideClickLayer from 'components/xtra/OutsideClickLayer';
import Dropdown, { DropdownOptions } from 'components/Dropdown/Dropdown';

import './Select.styl';


/*
* Handle nested options, required, etc.
* Add toggle arrow
* */
export class SelectElement extends Dropdown {
  constructor(props) {
    super(props);

    let selectedOption = props.defaultValue; // pass defaultValue = null, if nothing to be selected

    // Check if defaultValue present or if it's one of the options available in props.options
    if (!selectedOption || props.options.indexOf(selectedOption) == -1) {
      selectedOption = props.options[0]
    }

    this.state.selectedOption = selectedOption;

    this.onSelect = this._onSelect.bind(this);
  }

  _onSelect(option) {
    this.setState({
      selectedOption: option,
      show: false
    });
  }

  setRef = e => (this.optionsBody = e);

  render() {
    const { name, className, options, disabled } = this.props;
    const { selectedOption, show } = this.state;

    return (
      <OutsideClickLayer
        onOutsideClick={_ => this.setState({ show: false })}
        enabled
      >
        <div
          className={getFieldClasses({
            ...this.props,
            className: classList('Select', show && 'Select--show', className),
          })}
        >
          <input
            name={name}
            value={selectedOption ? (selectedOption.value || selectedOption.name) : ''}
            hidden
            readOnly
          />

          <div
            className="Field-el Select-trigger"
            onClick={disabled ? undefined: this.toggleDropdown}
          >
            <SelectedOption option={selectedOption} />
          </div>

          {
            show && (
              <DropdownOptions
                elRef={this.setRef}
                closeDropdown={this.closeDropdown}
              >
                <Options
                  options={options}
                  highlightOption={selectedOption}
                  onSelect={disabled ? undefined : this.onSelect}
                />
              </DropdownOptions>
            )
          }
        </div>
      </OutsideClickLayer>
    );
  }
}

/*
 *
 *
 * */
const Select = addWrapperToField(SelectElement, 'Select');
export default Select;



class SelectedOption extends React.PureComponent {

  render() {
    const { option } = this.props;

    return (
      <div className="SelectedOption">
        {option.name}
      </div>
    )
  }
}

class Options extends React.PureComponent {
  _handleSelect(option) {
    this.props.onSelect(option);
  }

  handleSelect = this._handleSelect.bind(this);

  render() {
    const { options, highlightOption } = this.props;

    return (
      options.map((o, ix) => (
        <div
          key={ix}
          className={
            classList(
              'Select-Option',
              highlightOption === o && 'Select-Option--highlight'
            )}
          onClick={_ => this.handleSelect(o)}
        >
          {o.name}
        </div>
      ))
    );
  }
}
