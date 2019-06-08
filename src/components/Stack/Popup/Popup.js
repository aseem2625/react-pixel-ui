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

  componentDidMount() {
    _popupsStackInstance = this;
  }

  componentWillUnMount() {
    _popupsStackInstance = null;
  }

  render() {
    return (
      <BackDrop className="Popup" show={this.state.stack.length}>
        {this.state.stack.map((p, ix) => {
          const isEnabledOutsideClick = p.enableOutsideClick || false; // By default it's false
          const isEnabledEscPress = p.enableEscPress || false; // By default it's false

          return (
            <OutsideClickLayer
              key={p.id}
              onOutsideClick={_ => this.removeItemFromStack(p.id)}
              enabled={
                isEnabledOutsideClick && ix === this.state.stack.length - 1
              } // Only last Popup is allowed to be closed on outside click
            >
              <EscPressLayer
                onEscPress={_ => this.removeItemFromStack(p.id)}
                enabled={
                  isEnabledEscPress && ix === this.state.stack.length - 1
                } // Only last Popup is allowed to be closed on ecs press
              >
                <StackItem
                  stackItemType={this.stackType}
                  id={p.id}
                  showCross={p.showCross}
                  removeItemFromStack={this.removeItemFromStack}
                  className={p.className}
                >
                  {p.title && (
                    <div className={classList(`${this.stackType}--title`)}>
                      {p.title}
                    </div>
                  )}
                  <div className={classList(`${this.stackType}--body`)}>
                    {typeof p.content === 'function'
                      ? p.content(_ => this.removeItemFromStack(p.id))
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

/*
 * Props:
 *   title
 *   content
 *   className
 *   showCross
 *   enableEscPress
 *   enableOutsideClick
 *
 * */
export default function openPopup(props) {
  _popupsStackInstance.addItemInStack(props, true);
}
