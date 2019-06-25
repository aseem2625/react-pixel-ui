import React from 'react';
import Tooltip from '../Tooltip/Tooltip';
import Button from '../Button/Button';
import { TextareaElement } from 'components/Field/Textarea/Textarea';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './Clipboard.styl';

export default class Clipboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { isCopied: null, isCopySupported: false };

    this.copyToClipboard = this._copyToClipboard.bind(this);
    this.onCopyEnd = this._onCopyEnd.bind(this);

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

    setTimeout(_ => this.onCopyEnd(), 1500);

    this.props.onCopy && this.props.onCopy();
  }

  _onCopyEnd() {
    this.setState({
      isCopied: false,
    });
  }

  setRef = e => (this.copierEl = e);

  render() {
    const { className, toCopy, hideTextarea, children} = this.props;
    const { isCopied, isCopySupported } = this.state;

    if (!isCopySupported) {
      return null;
    }

    return (
      <span
        className={classList(
          'Clipboard',
          prefixToClasses('Clipboard--', className),
          isCopied && 'Clipboard--copied',
          hideTextarea && 'Clipboard--hideTextarea'
        )}
      >
        <TextareaElement
          setElRef={this.setRef}
          className="Clipboard-input"
          value={toCopy}
          readOnly
        />

        <span className="Clipboard-trigger" onClick={isCopied ? undefined : this.copyToClipboard}>
          {
            typeof children === 'function'
              ? children({
                isCopied,
                onCopyEnd: this.onCopyEnd
              })
              : children
          }
        </span>
      </span>
    );
  }
}
