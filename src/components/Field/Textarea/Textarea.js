import React from 'react';
import Field, { addWrapperToField } from '../Field';

import './Textarea.styl';
import { classList } from 'js-awesome-utils';

/*
 *
 *
 * */
export class TextareaElement extends React.PureComponent {
  componentDidMount() {
    this.initialHeight = this.field && this.field.getBoundingClientRect().height;
    this.props.autoResize && this.autoAdjustHeight(this.el);
  }

  autoAdjustHeight(target) {
    if (!target) {
      return;
    }

    const content = target.value;
    const resizerEl = this.resizerEl;

    resizerEl.value = content;
    let newHeight = resizerEl.scrollHeight;

    if (this.initialHeight && newHeight > this.initialHeight) {
      this.field.style['line-height'] = '28px';
    } else {
      this.field.style['line-height'] = ''; // Reset to original
    }

    newHeight = resizerEl.scrollHeight; // Recalculate newHeight as per new line-height

    target.style.height = newHeight + 'px';
  }

  _onInput(e) {
    if (this.props.autoResize) {
      this.autoAdjustHeight(e.target);
    }

    this.props.onInput && this.props.onInput(e);
  }

  _disableEnterPress(e) {
    if (e.which === 13) {
      // Enter
      e.preventDefault();
      return;
    }
  }

  onInput = this._onInput.bind(this);
  disableEnterPress = this._disableEnterPress.bind(this);

  setRef = e => (this.resizerEl = e);
  setFieldRef = e => (this.field = e);
  setElRef = e => {
    this.el = this.props.setElRef ? this.props.setElRef(e) : e;
  };

  render() {
    const {
      autoResize,
      disableEnterPress,
      className,
      setElRef,
      ...restProps
    } = this.props;

    return (
      <Field
        {...restProps}
        className={classList('Textarea', className)}
        tag="textarea"
        onInput={this.onInput}
        onKeyPress={disableEnterPress ? this.disableEnterPress : undefined}
        fieldRef={this.setFieldRef}
        elRef={this.setElRef}
      >
        {autoResize && (
          <textarea className="Textarea-resizer" ref={this.setRef} readOnly />
        )}
      </Field>
    );
  }
}

TextareaElement.defaultProps = {
  autoResize: false,
  disableEnterPress: false,
};

/*
 *
 *
 * */
const Textarea = addWrapperToField(TextareaElement, 'Textarea');
export default Textarea;
