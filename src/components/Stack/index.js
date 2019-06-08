import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';

/*
 *
 * */
export default class Stack extends React.Component {
  state = { stack: [] };
  stackType = 'Stack'; // Default stackType

  removeItemFromStack = id => {
    const { stack } = this.state;

    let indexToRemove;

    for (let i = 0; i < stack.length; i++) {
      if (stack[i].id === id) {
        indexToRemove = i;

        break;
      }
    }

    stack.splice(indexToRemove, 1); // Directly mutating the state

    // Just to trigger re-render
    this.setState({
      stack,
    });
  };

  addItemInStack(opts, reverseOrder) {
    const stack = this.state.stack;

    const stackOrder = reverseOrder ? 'push' : 'unshift'; // By default stack will add in the starting

    // Directly mutating the state
    stack[stackOrder]({
      // Adding in starting of the stack
      id: `${this.stackType}-` + new Date().getTime(),
      ...opts,
    });

    // Just to trigger re-render
    this.setState({
      stack,
    });
  }
}

/*
 *
 * */
export class StackItem extends React.PureComponent {
  _handleRemove() {
    this.props.removeItemFromStack(this.props.id);
  }

  handleRemove = this._handleRemove.bind(this);

  render() {
    const {
      className,
      stackItemType = 'StackItem',
      showCross,
      children,
    } = this.props;

    return (
      <div
        className={classList(
          stackItemType,
          prefixToClasses(`${stackItemType}--`, className)
        )}
      >
        <span className={`${stackItemType}-content`}>
          {typeof children === 'function'
            ? children(this.handleRemove)
            : children}
        </span>

        {!!showCross && (
          <span
            className={`${stackItemType}-cross`}
            onClick={this.handleRemove}
          >
            &#215;
          </span>
        )}
      </div>
    );
  }
}
