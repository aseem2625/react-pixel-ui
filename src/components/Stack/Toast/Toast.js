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

  componentDidMount() {
    _toastsStackInstance = this;
  }

  componentWillUnmount() {
    _toastsStackInstance = null;
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
              duration={t.duration}
              remove={this.removeItemFromStack}
              enabled={isEnabledAutoRemove}
            >
              <StackItem
                stackItemType={this.stackType}
                id={t.id}
                className={t.type}
                showCross={t.showCross}
                removeItemFromStack={this.removeItemFromStack}
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

export default function openToast({ content, type, duration, showCross }) {
  _toastsStackInstance.addItemInStack({ content, type, duration, showCross });
}
