import React from 'react';

/*
 *
 * */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('Catch error in Error Boundary..', error, info);
    // reportStackTrace(error, info); // TODO: Log the stack trace
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="ErrorBoundary">
          Error Boundary render()
          <br />
          Something went Wrong. This will be fixed shortly :)
        </div>
      );
    }

    return this.props.children;
  }
}
