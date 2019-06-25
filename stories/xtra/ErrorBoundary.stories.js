import React from 'react';

import { storiesOf } from '@storybook/react';
import { ErrorBoundary } from 'components/index';


storiesOf('Utilities', module)
  .add(
    'ErrorBoundary',
    () => (
      <ErrorBoundary>
        <TimerComponent />
      </ErrorBoundary>
    )
  );



class TimerComponent extends React.PureComponent {
  state = { durationLeft: 5000 };

  componentDidMount() {
    this.interval = setInterval(_ => {
      const durationLeft = this.state.durationLeft - 1000;

      this.setState({
        durationLeft: durationLeft
      });

      if (!durationLeft) {
        clearInterval(this.interval);
      }}, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (!this.state.durationLeft) {
      throw 'Random error';
    }

    return (
      <div>
        Error to occur in {this.state.durationLeft / 1000}s
      </div>
    );
  }
}
