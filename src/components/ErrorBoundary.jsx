import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <main className="page">
          <p className="eyebrow">Site preview</p>
          <h1>Smart Upgrade IT</h1>
          <p>
            React loaded, but the page hit a render error. Open the browser console for details,
            or keep working from the source files while we fix the issue.
          </p>
          <pre className="error-box">{this.state.error.message}</pre>
        </main>
      );
    }

    return this.props.children;
  }
}
