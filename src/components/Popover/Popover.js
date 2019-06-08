import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';
import OutsideClickLayer from 'components/xtra/OutsideClickLayer';

import './Popover.styl';

/*
 *
 * */
export default class Popover extends React.Component {
  state = {};
  delay = 250; // Delay = 250ms (not taken from props to make consistent)

  _showPopover(e) {
    // No delay if the trigger is click
    if (!this.props.triggerOnHover) {
      this.setState({
        show: true,
      });
    } else {
      this.inTransition = window.setTimeout(_ => {
        this.inTransition &&
          this.setState({
            show: true,
          });
      }, this.delay);
    }
  }

  _hidePopover(e) {
    this.setState({
      show: false,
    });
  }

  _clearInterval() {
    this.inTransition && window.clearTimeout(this.inTransition);
  }

  showPopover = this._showPopover.bind(this);
  hidePopover = this._hidePopover.bind(this);
  clearInterval = this._clearInterval.bind(this);

  render() {
    const { className, children, content, triggerOnHover = false } = this.props;

    return (
      <OutsideClickLayer onOutsideClick={this.hidePopover} enabled>
        <div
          className={classList(
            'Popover',
            this.state.show && 'Popover--show',
            prefixToClasses('Popover--', className)
          )}
        >
          {this.state.show && (
            <span className="Popover-content">{content(this.hidePopover)}</span>
          )}

          <span
            className="Popover-trigger"
            onClick={triggerOnHover ? undefined : this.showPopover}
            onMouseOver={triggerOnHover ? this.showPopover : undefined}
            onMouseOut={triggerOnHover ? this.clearInterval : undefined}
          >
            {children}
          </span>
        </div>
      </OutsideClickLayer>
    );
  }
}
