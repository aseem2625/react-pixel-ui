import React from 'react';
import { getFieldClasses, addWrapperToField } from '../Field';
import { classList, debounce } from 'js-awesome-utils';

import OutsideClickLayer from 'components/xtra/OutsideClickLayer';
import Dropdown, { DropdownOptions, DropdownItem } from 'components/Dropdown/Dropdown';
import { InputElement } from 'components/Field/Input/Input';

import './Select.styl';


/*
* Handle required, etc.
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
    this._options = JSON.stringify(props.options); // One time, so no significant performance issues.

    this.state.options = JSON.parse(this._options);

    this.onSelect = this._onSelect.bind(this);

    this.searchInOptions = this._searchInOptions.bind(this);
    this.filterOptions = debounce(this._filterOptions, 100);
  }

  _onSelect(option) {
    this.setState({
      selectedOption: option,
      show: false
    });
  }

  _searchInOptions(e) {
    const search = e.target.value;

    this.filterOptions(search);
  }

  _filterOptions(search) {
    let options = JSON.parse(this._options);

    if (search) {
      const searchKeys = this.props.searchKeys || ['name'];
      search = search.toLowerCase();

      options = options.filter(o => {
        for (let k of searchKeys) {
          const isNested = o.options && (o.options instanceof Array);

          if (isNested) {
            if (!o.options.length) {
              return false;
            }

            const subOptions = o.options.filter(so => {
              if (so.hasOwnProperty(k) && so[k].toLowerCase().indexOf(search) > -1) {
                return true;
              }
            });

            if (subOptions.length) {
               o.options = subOptions;
               return true;
            }

            return false;

          } else {
            if (o.hasOwnProperty(k) && o[k].toLowerCase().indexOf(search) > -1) {
              return true;
            }
          }
        }
      });
    }

    this.setState({
      options
    });
  }

  setRef = e => (this.optionsBody = e);

  render() {
    const { name, className, disabled, beforeOptions, afterOptions, enableSearch } = this.props;
    const { options, selectedOption, show } = this.state;

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
                beforeOptions={enableSearch ? <InputElement onChange={this.searchInOptions} autoFocus /> : beforeOptions}
                afterOptions={afterOptions}
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

  getOption(key, o, highlightOption) {
    return (
      <DropdownItem
        key={key}
        className={
          classList(
            'Select-Option',
            highlightOption === o && 'Select-Option--highlight'
          )}
        onClick={_ => this.handleSelect(o)}
      >
        {o.name}
      </DropdownItem>
    );
  }

  render() {
    const { options, highlightOption } = this.props;

    return (
      options.map((o, ix) => {
        const isNested = o.options && (o.options instanceof Array);

        let opt;

        if (isNested) {
          if (!o.options.length) {
            return;
          }

          opt = (
            <div className="Select-Option-group" key={o.label}>
              <div className="Select-Option-label">{o.label}</div>
              {o.options.map((oy, iy) => (
                this.getOption('' + ix + iy, oy, highlightOption)
              ))}
            </div>
          )
        } else {
          opt = this.getOption(ix, o, highlightOption);
        }

        return opt
      })
    );
  }
}
