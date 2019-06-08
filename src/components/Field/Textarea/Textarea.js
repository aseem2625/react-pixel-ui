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
    this.props.autoResize && this.autoAdjustHeight(this.el);
  }

  autoAdjustHeight(target) {
    if (!target) {
      return;
    }

    const content = target.value;
    const resizerEl = this.resizerEl;

    resizerEl.value = content;
    const newHeight = resizerEl.scrollHeight;

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
