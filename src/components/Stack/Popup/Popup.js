import React from 'react';
import EscPressLayer from 'components/xtra/EscPressLayer';
import OutsideClickLayer from 'components/xtra/OutsideClickLayer';
import Stack, { StackItem } from 'components/Stack';
import BackDrop from 'components/BackDrop/BackDrop';

import { classList } from 'js-awesome-utils';

import './Popup.styl';

export let _popupsStackInstance;

/*
 *
 * No auto removal for Popups
 * */
export class PopupsContainer extends Stack {
  stackType = 'Popup'; // Override stackType

  constructor(props) {
    super(props);
    this.handleClose = this._handleClose.bind(this);
  }

  componentDidMount() {
    _popupsStackInstance = this;
  }

  componentWillUnmount() {
    _popupsStackInstance = null;
  }

  _handleClose(popup) {
    return () => {
      popup.onClose && popup.onClose();
      this.removeItemFromStack(popup.id);
    }
  }

  render() {
    return (
      <BackDrop
        className="Popup"
        show={this.state.stack.length}
        onShow={this.props.onShow}
        onHide={this.props.onHide}
      >
        {this.state.stack.map((p, ix) => {
          const isEnabledOutsideClick = p.enableOutsideClick || false; // By default it's false
          const isEnabledEscPress = p.enableEscPress || false; // By default it's false

          return (
            <OutsideClickLayer
              key={p.id}
              onOutsideClick={this.handleClose(p)}
              enabled={
                isEnabledOutsideClick && ix === this.state.stack.length - 1
              } // Only last Popup is allowed to be closed on outside click
            >
              <EscPressLayer
                onEscPress={this.handleClose(p)}
                enabled={
                  isEnabledEscPress && ix === this.state.stack.length - 1
                } // Only last Popup is allowed to be closed on ecs press
              >
                <StackItem
                  stackItemType={this.stackType}
                  showCross={p.showCross}
                  removeItemFromStack={this.handleClose(p)}
                  className={p.className}
                  uiClass={p.uiClass}
                >
                  {p.title && (
                    <div className={classList(`${this.stackType}--title`)}>
                      {p.title}
                    </div>
                  )}
                  <div className={classList(`${this.stackType}--body`)}>
                    {typeof p.content === 'function'
                      ? p.content(this.handleClose(p))
                      : p.content}
                  </div>
                </StackItem>
              </EscPressLayer>
            </OutsideClickLayer>
          );
        })}
      </BackDrop>
    );
  }
}

export default function openPopup({ className, uiClass, title, content, showCross, onClose, enableEscPress, enableOutsideClick }) {
  const popupId = _popupsStackInstance.addItemInStack({
      className,
      uiClass,
      title,
      content,
      showCross,
      onClose,
      enableEscPress,
      enableOutsideClick
    },
    true);

  return popupId;
}
