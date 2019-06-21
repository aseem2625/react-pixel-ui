import React from 'react';
import { classList } from 'js-awesome-utils';

export default class AutoRemoveLayer extends React.PureComponent {
  state = {};

  componentDidMount() {
    this.startAutoRemove();
  }

  componentWillUnmount() {
    this.removeTimer && clearTimeout(this.removeTimer);
  }

  startAutoRemove() {
    if (this.props.enabled) {
      const autoRemoveDuration = this.props.duration || 3000; // 3s is default duration to hide a given item in stack

      this.removeTimer = setTimeout(_ => {
        this.setState({
          hide: true,
        });

        setTimeout(this.handleRemove, 500);
      }, autoRemoveDuration);
    }
  }

  _handleRemove() {
    this.props.remove(this.props.id);
  }

  handleRemove = this._handleRemove.bind(this);

  render() {
    const styles = {};
    if (this.state.hide) {
      styles.display = 'none'
    }

    return (
      <div style={styles}>
        {this.props.children}
      </div>
    );
  }
}
