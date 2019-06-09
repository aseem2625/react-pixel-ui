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

  componentDidMount() {
    _notificationsStackInstance = this;
  }

  componentWillUnmount() {
    _notificationsStackInstance = null;
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
              duration={n.duration}
              remove={this.removeItemFromStack}
              enabled={isEnabledAutoRemove}
            >
              <StackItem
                stackItemType={this.stackType}
                id={n.id}
                className={n.type}
                showCross={n.showCross}
                removeItemFromStack={this.removeItemFromStack}
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

export default function openNotification(props) {
  _notificationsStackInstance.addItemInStack(props);
}
