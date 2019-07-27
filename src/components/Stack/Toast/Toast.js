import React from 'react';
import AutoRemoveLayer from 'components/xtra/AutoRemoveLayer';
import Stack, { StackItem } from 'components/Stack';

import './Toast.styl';

let _toastsStackInstance;

/*
 *
 * By default auto hide is on for Toast
 * */
export class ToastsContainer extends Stack {
  stackType = 'Toast'; // Override stackType

  constructor(props) {
    super(props);
    this.handleClose = this._handleClose.bind(this);
  }

  componentDidMount() {
    _toastsStackInstance = this;
  }

  componentWillUnmount() {
    _toastsStackInstance = null;
  }

  _handleClose(toast) {
    return () => {
      toast.onClose && toast.onClose();
      this.removeItemFromStack(toast.id);
    }
  }

  render() {
    return (
      <div className="ToastsContainer">
        {this.state.stack.map((t, ix) => {
          // By default auto remove is ON for Toast
          const isEnabledAutoRemove =
            typeof t.enableAutoRemove !== 'undefined'
              ? !!t.enableAutoRemove
              : true;

          return (
            <AutoRemoveLayer
              key={t.id}
              duration={t.autoRemoveDuration}
              remove={this.handleClose(t)}
              enabled={isEnabledAutoRemove}
            >
              <StackItem
                stackItemType={this.stackType}
                className={t.className}
                uiClass={t.uiClass}
                showCross={t.showCross}
                removeItemFromStack={this.handleClose(t)}
              >
                {t.content}
              </StackItem>
            </AutoRemoveLayer>
          );
        })}
      </div>
    );
  }
}

export default function openToast({ className, uiClass, showCross, onClose, enableAutoRemove, autoRemoveDuration, content }) {
  _toastsStackInstance.addItemInStack({
    className,
    uiClass,
    showCross,
    onClose,
    enableAutoRemove,
    autoRemoveDuration,
    content
  });
}
