import React from 'react';

export default class EscPressLayer extends React.PureComponent {
  _handleEsc(e) {
    e = e || window.event;
    var isEscape = false;
    if ('key' in e) {
      isEscape = e.key === 'Escape' || e.key === 'Esc';
    } else {
      isEscape = e.keyCode === 27;
    }

    if (isEscape) {
      this.props.onEscPress();
    }
  }

  handleEsc = this._handleEsc.bind(this);

  addListener = () => {
    document.addEventListener('keydown', this.handleEsc);
  };

  removeListener = () => {
    document.removeEventListener('keydown', this.handleEsc);
  };

  componentDidMount() {
    if (this.props.enabled) {
      this.addListener();
    }
  }

  componentWillUnmount() {
    this.removeListener();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.enabled !== this.props.enabled) {
      this.props.enabled ? this.addListener() : this.removeListener();
    }
  }

  render() {
    const { children } = this.props;

    return <React.Fragment>{children}</React.Fragment>;
  }
}
