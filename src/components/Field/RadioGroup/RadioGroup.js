import React from 'react';
import { getFieldClasses, addWrapperToField } from '../Field';
import { classList, debounce } from 'js-awesome-utils';

import './RadioGroup.styl';
import { prevent, setNativeValue } from 'helpers/utils';

/*
 *
 * TODO: Handle required, etc.
 * */
export class RadioGroupElement extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: this.props.defaultValue || '' };

    this.onChange = this._onChange.bind(this);
  }

  _onChange(option) {
    const newValue = option.isChecked ? option.value : '';

    this.setState({
      value: newValue,
    });

    setNativeValue(this.inputEl, newValue);
    this.inputEl.dispatchEvent(new Event('change', { bubbles: true }));

    this.props.onChange && this.props.onChange(newValue);
  }

  setRef = el => (this.inputEl = el);

  render() {
    const { name, className, options, disabled } = this.props;
    const { value } = this.state;

    return (
      <div
        className={getFieldClasses({
          ...this.props,
          className: classList('RadioGroup', className),
        })}
      >
        <input ref={this.setRef} name={name} defaultValue={value} hidden readOnly />
        {options.map((o, i) => (
          <Radio
            key={o.value}
            value={o.value}
            isChecked={value === o.value}
            onChange={this.onChange}
            className="Field-el"
            disabled={disabled}
          >
            {typeof o.label === 'function' ? o.label() :  o.label}
          </Radio>
        ))}
      </div>
    );
  }
}

/*
 *
 *
 * */
export default class RadioGroup extends addWrapperToField(
  RadioGroupElement,
  'RadioGroup'
) {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
    };

    this.onFocus = undefined;
    this.onBlur = undefined;
  }

  componentDidMount() {
    this.evalValidity();
  }

  _onFocus() {}

  _onBlur() {}

  _onChange(e) {
    this.evalValidity();

    this.props.onChange && this.props.onChange(e);

    if (!this.state.isDirty) {
      this.setState({ isDirty: true });
    }
  }
}

/*
 *
 * Note: Cannot be used standalone without RadioGroup / RadioGroupElement, otherwise use CheckBox
 * */
class Radio extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: this.props.isChecked || this.props.defaultChecked || false,
    };

    this.toggleSelect = debounce(this._toggleSelect.bind(this), 50);
  }

  componentWillUpdate(nextProps) {
    if (this.props.isChecked !== nextProps.isChecked) {
      this.setState({
        isChecked: nextProps.isChecked,
      });
    }
  }

  _toggleSelect(e) {
    const isChecked = !this.state.isChecked;

    this.setState({
      isChecked,
    });

    this.props.onChange &&
      this.props.onChange({
        value: this.props.value,
        isChecked,
      });
  }

  preventBubbleOnChange(e) {
    // Preventing bubbling because this is pseudo element. Actual element would manually trigger onChange in parent component.
    prevent(e);
  }

  render() {
    const { isChecked, disabled } = this.props;

    return (
      <div className="Field-el">
        <label onClick={disabled ? undefined : this.toggleSelect}>
          <input type="checkbox" checked={isChecked} hidden readOnly disabled={disabled} onChange={this.preventBubbleOnChange}/>
          <span className="Radio-mark" />
          <span className="Radio-label">{this.props.children}</span>
        </label>
      </div>
    );
  }
}
