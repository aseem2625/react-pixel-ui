import React from 'react';

export default class OutsideClickLayer extends React.PureComponent {
  handleClick = e => {
    if (this.layer && !this.layer.contains(e.target)) {
      this.props.onOutsideClick();
    }
  };

  addListener = () => {
    document.addEventListener('mouseup', this.handleClick);
  };

  removeListener = () => {
    document.removeEventListener('mouseup', this.handleClick);
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

  setRef = e => (this.layer = e);

  render() {
    const { children } = this.props;

    return <div ref={this.setRef}>{children}</div>;
  }
}
