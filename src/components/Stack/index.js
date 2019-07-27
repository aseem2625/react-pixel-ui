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

    const id = `${this.stackType}-` + new Date().getTime();
    // Directly mutating the state
    stack[stackOrder]({
      // Adding in starting of the stack
      id,
      ...opts,
    });

    // Just to trigger re-render
    this.setState({
      stack,
    });

    return id;
  }
}

/*
 *
 * */
export class StackItem extends React.PureComponent {
  render() {
    const {
      className,
      uiClass,
      stackItemType = 'StackItem',
      showCross,
      children,
      removeItemFromStack
    } = this.props;

    return (
      <div
        className={classList(
          stackItemType,
          prefixToClasses(`${stackItemType}--`, className),
          showCross && `${stackItemType}--hasCross`,
          uiClass
        )}
      >
        <span className={`${stackItemType}-content`}>
          {typeof children === 'function'
            ? children(removeItemFromStack)
            : children}
        </span>

        {!!showCross && (
          <span
            className={`${stackItemType}-cross`}
            onClick={removeItemFromStack}
          >
            &#215;
          </span>
        )}
      </div>
    );
  }
}
