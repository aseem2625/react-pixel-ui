import React from 'react';
import AutoRemoveLayer from 'components/xtra/AutoRemoveLayer';
import Stack, { StackItem } from 'components/Stack';

import './Notification.styl';

let _notificationsStackInstance;

/*
 *
 * */
export class NotificationsContainer extends Stack {
  stackType = 'Notification'; // Override stackType

  constructor(props) {
    super(props);
    this.handleClose = this._handleClose.bind(this);
  }

  componentDidMount() {
    _notificationsStackInstance = this;
  }

  componentWillUnmount() {
    _notificationsStackInstance = null;
  }

  _handleClose(notification) {
    return () => {
      notification.onClose && notification.onClose();
      this.removeItemFromStack(notification.id);
    }
  }

  render() {
    return (
      <div className="NotificationsContainer">
        {this.state.stack.map((n, ix) => {
          // By default auto remove is ON for Notification
          const isEnabledAutoRemove =
            typeof n.enableAutoRemove !== 'undefined'
              ? !!n.enableAutoRemove
              : true;

          return (
            <AutoRemoveLayer
              key={n.id}
              duration={n.autoRemoveDuration}
              remove={this.handleClose(n)}
              enabled={isEnabledAutoRemove}
            >
              <StackItem
                stackItemType={this.stackType}
                id={n.id}
                showCross={n.showCross}
                removeItemFromStack={this.handleClose(n)}
                className={n.className}
                uiClass={n.uiClass}
              >
                {n.content}
              </StackItem>
            </AutoRemoveLayer>
          );
        })}
      </div>
    );
  }
}


export default function openNotification({ className, uiClass, showCross, onClose, autoRemoveDuration, enableAutoRemove, content }) {
  _notificationsStackInstance.addItemInStack({
    className,
    uiClass,
    showCross,
    onClose,
    autoRemoveDuration,
    enableAutoRemove,
    content,
  });
}
