import React from 'react';
import Field, { addWrapperToField, getFieldClasses } from '../Field';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './Checkbox.styl';

/*
 *
 *
 * */
export class CheckboxElement extends React.PureComponent {
  render() {
    const { className, children, isSwitch, ...restProps } = this.props;

    return (
      <div
        className={getFieldClasses({
          ...this.props,
          className: classList(
            'Checkbox',
            className,
            isSwitch && 'Checkbox--Switch'
          ),
        })}
      >
        <label className="Field-el">
          <input {...restProps} type="checkbox" hidden />
          <span className="Checkbox-mark" />
          <span className="Checkbox-label">{children}</span>
        </label>
      </div>
    );
  }
}

/*
 *
 *
 * */
const Checkbox = addWrapperToField(CheckboxElement, 'Checkbox');
export default Checkbox;
