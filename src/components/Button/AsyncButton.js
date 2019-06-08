import React from 'react';
import { prevent } from 'helpers/utils';
import { classList } from 'js-awesome-utils';
import Button from 'components/Button/Button';
import Spinner from '../Loader/Spinner';

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
      showSpinner = true,
      children,
      className,
      disabled,
      isPending: pending, // isPending from props is utilized in componentDidUpdate
      ...restProps
    } = this.props;

    const { isPending } = this.state;

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
        <span className="Btn-mainText">{children}</span>
        {pendingText && <span className="Btn-pendingText">{pendingText}</span>}
        {showSpinner && (
          <Spinner show={isPending} isPrimary={!restProps.isPrimary} />
        )}
      </Button>
    );
  }
}
