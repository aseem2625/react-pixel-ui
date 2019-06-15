import React from 'react';
import { classList, prefixToClasses, debounce } from 'js-awesome-utils';

import './Field.styl';

export function getFieldClasses(props) {
  const { className } = props;

  return classList(
    'Field',
    prefixToClasses(
      'Field--',
      classList(className, getFieldWrapperClasses(props))
    )
  );
}

/*
 * TODO: defaultValue, validator, tooltips onHover/onClick,
 *
 * */
export default class Field extends React.PureComponent {
  render() {
    const {
      tag,
      className,
      name,
      placeholder,
      disabled,
      required,
      children,
      onChange,
      onFocus,
      onBlur,
      elRef,
      ...restProps
    } = this.props;

    const InputTag = tag || 'input'; // tag = select, textarea, input

    return (
      <div className={getFieldClasses(this.props)}>
        <InputTag
          {...restProps} // style, other Listeners
          className="Field-el"
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={elRef}
        />
        {children}
      </div>
    );
  }
}

export function getFieldWrapperClasses(props, state = {}) {
  const { disabled, required } = props;
  const { isFocused, isMature, error } = state;

  return classList(
    disabled && 'disabled',
    required && 'required',
    isFocused && 'focused',
    isMature && 'mature',
    error && 'invalid'
  );
}

/*
 *
 * */
export function addWrapperToField(_FieldComponent, _fieldType) {
  return class extends React.PureComponent {
    constructor(props) {
      super(props);

      this.class = 'FieldWrapper';

      this.state = {
        error: '',
        isMature: false,
        isFocused: false,
      };

      this.onChange = this._onChange.bind(this);
      this.onFocus = this._onFocus.bind(this);
      this.onBlur = this._onBlur.bind(this);
    }

    componentDidMount() {
      this.evalValidity(); // error is evaluated in start, even though it may be displayed only when isMature.

      // On render, FE error will be shown upfront if value filled is not value.
      if (this.props.defaultValue || this.props.value) {
        this.setState({
          isMature: true,
        });
      }
    }

    // TODO: Debounce
    evalValidity() {
      // TODO: evaluation logic
      let error = '';
      this.setState({ error });
    }

    _onFocus() {
      this.setState({ isFocused: true });
      this.props.onFocus && this.props.onFocus(e);
    }

    _onBlur() {
      this.setState({ isFocused: false });

      /*
       * Setting mature shows the error. However, mature is done only when the field is isDirty and also, blurred.
       * So, error on mature is shown only when it has isDirty + blurred once.
       * */
      if (this.state.isDirty) {
        this.setState({ isMature: true });
      }

      this.props.onBlur && this.props.onBlur(e);
    }

    _onChange(e) {
      this.evalValidity();

      this.props.onChange && this.props.onChange(e);

      if (!this.state.isMature || !this.state.isDirty) {
        this.setState({ isDirty: true });
      }
    }

    render() {
      const {
        className,
        label,
        description,
        children,
        ...restProps
      } = this.props;
      const { error } = this.state;

      return (
        <div
          className={classList(
            this.class,
            className && prefixToClasses(`${this.class}--`, className),
            _fieldType && prefixToClasses(`${this.class}--`, _fieldType),
            prefixToClasses(
              `${this.class}--`,
              getFieldWrapperClasses(this.props, this.state)
            )
          )}
        >
          {label && (
            <div className="Field-label">
              {label}
              {restProps.required && <span className="Field-label-star">*</span>}
            </div>
          )}
          <div className="Field-content">
            <_FieldComponent
              {...restProps}
              onError={this.onError}
              onChange={this.onChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
            >
              {children}
            </_FieldComponent>

            <div className="Field-error">{error || ''}</div>
            <div className="Field-description">{description || ''}</div>
          </div>
        </div>
      );
    }
  };
}
