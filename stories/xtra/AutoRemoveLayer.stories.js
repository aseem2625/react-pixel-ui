import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean, number } from '@storybook/addon-knobs';

import { AutoRemoveLayer } from '../../dist/index.min';

storiesOf('Components/Utilities', module)
  .add(
    'AutoRemoveLayer',
    () => {
      const enabled = boolean('Enabled', true),
        duration = number('Duration', 4000);

      return(
        <div>
          <b>AutoRemoveLayer</b> auto-hides the children after certain duration and fires callback
          <br />
          <AutoRemoveLayer
            enabled={enabled}
            duration={duration} // Default duration is 3000ms
            remove={_ => alert('Removed element')}
          >
            <br />
            <TimerComponent duration={duration} />
          </AutoRemoveLayer>
        </div>
      );
    }
  );


class TimerComponent extends React.PureComponent {
  state = { durationLeft: this.props.duration };

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
    return (
      <div>
        Duration left: {this.state.durationLeft / 1000}s
      </div>
    );
  }
}
