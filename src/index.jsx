import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import Test from './test';
import './style.css';

const container = document.getElementById('root');

const root = createRoot(container);

// const testVar = 5;

// Test.getDerivedStateFromProps = (props, state) => ({
//   count: props.count + testVar,
// });

class App extends Component {
  state = {
    count: 2,
    name: 'Virat',
  };

  changeName = () => {
    this.setState({ name: 'Yagnesh' });
  };

  changeCount = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  static getDerivedStateFromError(error) {
    return {
      error,
    };
  }

  //   store this error on server
  componentDidCatch(error, errorInfo) {
    console.log(errorInfo.componentStack);
  }

  render() {
    const { count, name, error } = this.state;
    console.log('render app');
    if (error) {
      return <h1>{error.message}</h1>;
    }

    return (
      <>
        {count < 5 && <Test count={count} />}
        <p>{name}</p>
        <button type="button" onClick={this.changeName}>
          Change Name
        </button>

        <button type="button" onClick={this.changeCount}>
          Change Count
        </button>
      </>
    );
  }
}

root.render(<App />);
