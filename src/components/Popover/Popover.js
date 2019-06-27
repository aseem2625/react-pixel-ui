import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';
import OutsideClickLayer from 'components/xtra/OutsideClickLayer';
import SmartTipContent from 'components/xtra/SmartTipContent/SmartTipContent';

import './Popover.styl';

/*
 *
 * */
export default class Popover extends React.Component {
  state = {};

  _showPopover(e) {
    // No delay if the trigger is click
    if (!this.props.triggerOnHover) {
      this.setState({
        show: true,
      });
    } else {
      const delay = typeof this.props.delay !== 'undefined' ? this.props.delay : 250; // Delay = 250ms (default)

      this.inTransition = window.setTimeout(_ => {
        this.inTransition &&
          this.setState({
            show: true,
          });
      }, delay);
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

  setRef = e => (this.popover = e);

  render() {
    const { className, uiClassContent, children, popoverContent, triggerOnHover = false, tipPos } = this.props;

    return (
      <OutsideClickLayer onOutsideClick={this.hidePopover} enabled>
        <div
          ref={this.setRef}
          className={classList(
            'Popover',
            this.state.show && 'Popover--show',
            prefixToClasses('Popover--', className)
          )}
        >
          {this.state.show && (
            <SmartTipContent
              parentEl={this.popover}
              className="Popover"
              uiClass={uiClassContent}
              tipPos={tipPos}
            >
              {popoverContent(this.hidePopover)}
            </SmartTipContent>
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
