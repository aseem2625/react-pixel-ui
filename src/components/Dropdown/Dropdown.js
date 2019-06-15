import React from 'react';
import OutsideClickLayer from 'components/xtra/OutsideClickLayer';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './Dropdown.styl';

export default class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { show : props.show || false };

    this.toggleDropdown = this._toggleDropdown.bind(this);
    this.closeDropdown = this._closeDropdown.bind(this);
  }

  _toggleDropdown(forceSet) {
    const toShow = typeof forceSet !== 'undefined' ? forceSet : !this.state.show;

    this.setState({
      show: toShow,
    }, () => {
      if (toShow) {
        const el = this.optionsBody;
        const renderWidthWithFixed =  el && el.getBoundingClientRect().width;

        el.style.width = renderWidthWithFixed + 'px';
        el.style.position = 'absolute';
        el.style.opacity = 1;
      }
    });
  }

  _closeDropdown() {
    this.toggleDropdown(false);
  }

  setBodyRef = e => (this.optionsBody = e);

  render() {
    const {
      showOnHover,
      className,
      trigger,
      beforeOptions,
      afterOptions,
      children
    } = this.props;
    const { show } = this.state;

    return (
      <OutsideClickLayer
        onOutsideClick={_ => this.setState({ show: false })}
        enabled={!showOnHover}
      >
        <div
          className={classList(
            'Dropdown',
            show && 'Dropdown--show',
            prefixToClasses('Dropdown--', className)
          )}
          onMouseEnter={showOnHover ? this.toggleDropdown : undefined}
          onMouseLeave={showOnHover ? this.closeDropdown : undefined}
        >
          <div
            ref={this.setTriggerRef}
            className="Dropdown-trigger"
            onClick={showOnHover ? undefined : this.toggleDropdown}
          >
            {typeof trigger === 'function' ? trigger() : trigger}
          </div>

          {
            this.state.show && (
              <DropdownOptions
                elRef={this.setBodyRef}
                beforeOptions={beforeOptions}
                afterOptions={afterOptions}
                closeDropdown={this.closeDropdown}
              >
                {children}
              </DropdownOptions>
            )
          }
        </div>
      </OutsideClickLayer>
    );
  }
}

export class DropdownOptions extends React.PureComponent {

  render() {
    const { beforeOptions, afterOptions, children, elRef, closeDropdown } = this.props;

    return (
      <div ref={elRef} className="DropdownBody">
        <div className="DropdownOptions">
          {
            !!beforeOptions && (
              <div className="DropdownOptions-before">
                {typeof beforeOptions === 'function' ? beforeOptions(closeDropdown) : beforeOptions}
              </div>
            )
          }

          {typeof children === 'function' ? children(closeDropdown) : children}

          {
            !!afterOptions && (
              <div className="DropdownOptions-after">
                {typeof afterOptions === 'function' ? afterOptions(closeDropdown) : afterOptions}
              </div>
            )
          }
        </div>
      </div>
    );
  }
}
