import React from 'react';
import { classList, prefixToClasses, debounce } from 'js-awesome-utils';

import './Form.styl';

export default class Form extends React.PureComponent {
  state = {
    isPending: false,
  };

  setRef = e => (this.form = e);

  componentDidMount() {
    this.evaluateIfError();
  }

  _evaluateIfError() {
    const hasInvalidField = this.form.querySelector('.Input.isInvalid');

    this.setState({ isInvalid: hasInvalidField });

    return hasInvalidField;
  }

  _onSubmit(e) {
    e.preventDefault();

    if (!this.state.isPending && !this.state.isInvalid) {
      const returnValue = this.props.onSubmit(serialize(e.target));

      if (returnValue instanceof Promise) {
        this.setState({
          isPending: true,
        });

        returnValue
          .catch(e => {
            console.log(e);
          })
          .then(() => {
            this.setState({
              isPending: false,
            });
          });
      }
    }
  }

  _onChange(e) {
    this.props.onChange && this.props.onChange(e);

    setTimeout(() => {
      this.evaluateIfError();
    }, 10);
  }

  evaluateIfError = debounce(this._evaluateIfError.bind(this), 50);
  onChange = this._onChange.bind(this);
  onSubmit = this._onSubmit.bind(this);

  render() {
    let { children, onChange, onSubmit, className, uiClass, ...restProps } = this.props;

    return (
      <form
        ref={this.setRef}
        noValidate
        {...restProps}
        className={classList(
          'Form',
          this.state.isPending && 'Form--isPending',
          this.state.isInvalid && 'Form--isInvalid',
          prefixToClasses('Form--', className),
          uiClass
        )}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
      >
        {children(this.state.isPending, this.state.isInvalid)}
      </form>
    );
  }
}

export function serialize(form) {
  return Array.prototype.reduce.call(
    form.querySelectorAll('[name]'),
    function(data, el) {
      let { name, value } = el;
      if (el.type === 'checkbox') {
        value = el.checked ? '1' : '0';
      }
      if (el.type === 'radio') {
        if (!el.checked) {
          return data;
        }
        value = el.value;
      }
      if (el.type === 'select-multiple') {
        value = [];
        const selectedOptions = Array.from(el.selectedOptions);

        selectedOptions.forEach(option => value.push(option.value));
      }
      if (el.type === 'file') {
        value = el.files.length ? el.files : null;
      }

      if (value) {
        // item[foo] → item.foo
        var nameSplit = name.match(/(.+)\[(\w+)\]$/);
        if (nameSplit) {
          let arrayIndex = nameSplit[2];
          let array = data[nameSplit[1]];
          if (arrayIndex === '0') {
            data[nameSplit[1]] = [value];
          } else if (/^\d+$/.test(arrayIndex)) {
            array.push(value);
          } else {
            if (!array) {
              data[nameSplit[1]] = {};
            }
            data[nameSplit[1]][arrayIndex] = value;
          }
        } else {
          data[name] = value;
        }
      }
      return data;
    },
    {}
  );
}
