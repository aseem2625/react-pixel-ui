import React from 'react';
import Tooltip from '../Tooltip/Tooltip';
import Button from '../Button/Button';
import { TextareaElement } from 'components/Field/Textarea/Textarea';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './Clipboard.styl';

function Clipboard(type) {
  let _WrappedComponent;

  const HOC = class extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = { isCopied: null, isCopySupported: false };

      this.copyToClipboard = this._copyToClipboard.bind(this);

      if (type === 'withTooltip') {
        this.onMouseLeave = this._onMouseLeave.bind(this);
      }
    }

    componentDidMount() {
      if (document.execCommand) {
        this.setState({ isCopySupported: true });
      }
    }

    selectValue() {
      if (this.copierEl.select) {
        this.copierEl.select();
        this.setState({ isCopied: true });
      }
    }

    _copyToClipboard() {
      this.selectValue();
      document.execCommand('copy');

      setTimeout(_ => {
        this.setState({
          isCopied: false,
        });
      }, 1500);

      this.props.onCopy && this.props.onCopy();
    }

    _onMouseLeave() {
      this.setState({
        isCopied: false,
      });
    }

    setRef = e => (this.copierEl = e);

    render() {
      const { className, toCopy, ...restProps } = this.props;

      const { isCopied, isCopySupported } = this.state;

      if (!isCopySupported) {
        return null;
      }

      return (
        <span
          className={classList(
            'Clipboard',
            `Clipboard--${type}`,
            prefixToClasses('Clipboard--', className),
            isCopied && 'Clipboard--copied'
          )}
          onClick={this.copyToClipboard}
        >
          <TextareaElement
            setElRef={this.setRef}
            className="Clipboard-input"
            value={toCopy}
            readOnly
          />

          <_WrappedComponent
            {...restProps}
            isCopied={isCopied}
            onMouseLeave={this.onMouseLeave}
          />
        </span>
      );
    }
  };

  return function(_component) {
    _WrappedComponent = _component;

    return HOC;
  };
}

/*
 *
 *
 * */
function _ClipboardWithButton({
  isCopied,
  buttonCopyText,
  buttonCopiedText = 'Copied!',
}) {
  return (
    <Button className="Clipboard-copyButton">
      {isCopied ? buttonCopiedText : buttonCopyText}
    </Button>
  );
}

export const ClipboardWithButton = Clipboard('withButton')(
  _ClipboardWithButton
);

/*
 *
 *
 * */
function _ClipboardWithTooltip({
  children,
  isCopied,
  tooltipCopyText,
  tooltipCopiedText = 'Copied!',
  onMouseLeave,
}) {
  return (
    <Tooltip
      tooltipText={isCopied ? tooltipCopiedText : tooltipCopyText}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Tooltip>
  );
}

export const ClipboardWithTooltip = Clipboard('withTooltip')(
  _ClipboardWithTooltip
);
