import React from 'react';
import OutsideClickLayer from 'components/xtra/OutsideClickLayer';
import { classList, prefixToClasses } from 'js-awesome-utils';
import SmartTipContent from 'components/xtra/SmartTipContent/SmartTipContent';

import './Dropdown.styl';

export default class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { show : props.show || false };

    this.toggleDropdown = this._toggleDropdown.bind(this);
    this.closeDropdown = this._closeDropdown.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.show !== prevProps.show) {
      this.setState({
        show: this.props.show
      });
    }
  }

  _toggleDropdown(forceSet) {
    const toShow = typeof forceSet === 'boolean' ? forceSet : !this.state.show;

    this.setState({
      show: toShow,
    });
  }

  _closeDropdown() {
    this.toggleDropdown(false);
  }

  render() {
    const {
      className,
      uiClass,
      uiClassOptions,
      showOnHover,
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
            prefixToClasses('Dropdown--', className),
            uiClass,
            show && 'Dropdown--show',
          )}
          onMouseEnter={showOnHover ? this.toggleDropdown : undefined}
          onMouseLeave={showOnHover ? this.closeDropdown : undefined}
        >
          <div
            className="Dropdown-trigger"
            onClick={showOnHover ? undefined : this.toggleDropdown}
          >
            {typeof trigger === 'function' ? trigger() : trigger}
          </div>

          {
            this.state.show && (
              <SmartTipContent className="Dropdown" tipPos="bottom" uiClass={uiClassOptions}>
                <DropdownOptions
                  beforeOptions={beforeOptions}
                  afterOptions={afterOptions}
                  closeDropdown={this.closeDropdown}
                >
                  {children}
                </DropdownOptions>
              </SmartTipContent>
            )
          }
        </div>
      </OutsideClickLayer>
    );
  }
}

export class DropdownOptions extends React.PureComponent {
  render() {
    const { beforeOptions, afterOptions, children, closeDropdown } = this.props;

    return (
      <div className="DropdownBody">
        {
          !!beforeOptions && (
            <div className="DropdownOptions-before">
              {typeof beforeOptions === 'function' ? beforeOptions(closeDropdown) : beforeOptions}
            </div>
          )
        }
        <div className="DropdownOptions">
          {typeof children === 'function' ? children(closeDropdown) : children}
        </div>
        {
          !!afterOptions && (
            <div className="DropdownOptions-after">
              {typeof afterOptions === 'function' ? afterOptions(closeDropdown) : afterOptions}
            </div>
          )
        }
      </div>
    );
  }
}

export const DropdownItem = ({ children, className, ...restProps }) => (
  <div className={classList('DropdownItem', className)} {...restProps}>{children}</div>
);
