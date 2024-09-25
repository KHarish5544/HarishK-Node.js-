import React, { Component } from 'react';

class LifecycleLogger extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor: Component is being constructed.');
    this.state = { message: 'Hello, World!' };
  }

  componentDidMount() {
    console.log('componentDidMount: Component has been mounted.');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Component has been updated.');
    console.log('Previous State:', prevState);
    console.log('Current State:', this.state);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be unmounted.');
  }

  changeMessage = () => {
    this.setState({ message: 'Hello, React!' });
  };

  render() {
    console.log('Render: Component is rendering.');
    return (
      <div className="lifecycle-logger">
        <h2>{this.state.message}</h2>
        <button onClick={this.changeMessage}>Change Message</button>
      </div>
    );
  }
}

export default LifecycleLogger;
