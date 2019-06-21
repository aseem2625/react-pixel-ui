import React from 'react';
import { prevent } from 'helpers/utils';
import { classList } from 'js-awesome-utils';
import Button from 'components/Button/Button';

/*
* Async Button to show spinner if onClick returns promise
* @props *  - {Promise} onClick: optional, however if passed circular loader would be shown
  - Other props are passed as it is to Button component
* */
export default class AsyncButton extends React.PureComponent {
  state = { isPending: false };

  componentDidUpdate(prevProps) {
    if (this.props.isPending !== prevProps.isPending) {
      this.setState({ isPending: this.props.isPending }); // In case of onSubmit, <Form> would control state of <AsyncButton>
    }
  }

  onClick = e => {
    if (!this.props.onClick) {
      return;
    }

    e.persist(); // e.prevenDefault makes synthetic even to get removed. Synthetic event is needed for performance reasons
    prevent(e);

    if (!this.state.isPending) {
      let returnValue = this.props.onClick(e);

      if (returnValue instanceof Promise) {
        this.setState({ isPending: true });

        returnValue.then(_ => this.setState({ isPending: false }));
        returnValue.catch(_ => this.setState({ isPending: false }));
      }
    }
  };

  render() {
    const {
      pendingText,
      onClick,
      children,
      className,
      disabled,
      isPending: pending, // isPending from props is utilized in componentDidUpdate
      ...restProps
    } = this.props;

    const { isPending } = this.state;
    let btnContent = [];

    console.log('....', children);

    if (children instanceof Array) {
      children.forEach(c => {
        if (c && typeof c === 'function') {
          btnContent.push(<React.Fragment key="Spinner">{c(isPending)}</React.Fragment>);
        } else {
          if (!isPending || pendingText)
          btnContent.push(
            <span key="text" className="Btn-text">
              {isPending ? pendingText : c}
            </span>
          );
        }
      });
    } else {
      btnContent = children;
    }

    return (
      <Button
        {...restProps}
        className={classList(
          'AsyncBtn',
          className,
          isPending && 'AsyncBtn--isPending'
        )}
        onClick={onClick && !disabled ? this.onClick : void 0}
        disabled={isPending || disabled}
      >
        {btnContent}
      </Button>
    );
  }
}
