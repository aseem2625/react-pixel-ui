import React from 'react';
import OutsideClickLayer from 'components/xtra/OutsideClickLayer';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './Dropdown.styl';

export default class Dropdown extends React.PureComponent {
  state = { show : this.props.show || false };

  toggleDropdown = forceSet => {
    const toShow = typeof forceSet !== 'undefined' ? forceSet : !this.state.show;

    this.setState({
      show: toShow,
    }, () => {
      if (toShow) {
        const el = this.dropdownBody;
        const renderWidthWithFixed =  el && el.getBoundingClientRect().width;

        el.style.width = renderWidthWithFixed + 'px';
        el.style.position = 'absolute';
        el.style.opacity = 1;

      }
    });
  };

  closeDropdown = _ => {
    this.toggleDropdown(false);
  };

  startHoverIntent = _ => {
    if (!this.state.show) {
      this.intentTimer = setTimeout(this.toggleDropdown, 80); // User has to hover atleast for 80ms to open dropdown
    }
  };

  endHoverIntent = _ => {
    clearTimeout(this.intentTimer);
  };

  setTriggerRef = e => (this.dropdownTrigger = e);
  setBodyRef = e => (this.dropdownBody = e);

  render() {
    const {
      showOnHover,
      className,
      trigger,
      beforeOptions,
      afterOptions,
    } = this.props;
    const { show } = this.state;

    return (
      <OutsideClickLayer
        onOutsideClick={_ => this.setState({ show: false })}
        enabled
      >
        <div
          className={classList(
            'Dropdown',
            show && 'Dropdown--show',
            prefixToClasses('Dropdown--', className)
          )}
        >
          <div
            ref={this.setTriggerRef}
            className="Dropdown-trigger"
            onClick={showOnHover ? undefined : this.toggleDropdown}
            onMouseOver={showOnHover ? this.startHoverIntent : undefined}
            onMouseOut={showOnHover ? this.endHoverIntent : undefined}
          >
            {typeof trigger === 'function' ? trigger() : trigger}
          </div>

          {
            this.state.show && (
              <div ref={this.setBodyRef} className="Dropdown-body">
                <div className="Dropdown-options">
                  {
                    !!beforeOptions && (
                      <div class="Dropdown-options-before">
                        {typeof beforeOptions === 'function' ? beforeOptions(this.closeDropdown) : beforeOptions}
                      </div>
                    )
                  }

                  {this.props.children(this.closeDropdown)}

                  {
                    !!afterOptions && (
                      <div className="Dropdown-options-after">
                        {typeof afterOptions === 'function' ? afterOptions(this.closeDropdown) : afterOptions}
                      </div>
                    )
                  }
                </div>
              </div>
            )
          }
        </div>
      </OutsideClickLayer>
    );
  }
}
