import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import Test from './test';
import '../style.scss';

const container = document.getElementById('root');

const root = createRoot(container);

// const testVar = 5;

// Test.getDerivedStateFromProps = (props, state) => ({
//   count: props.count + testVar,
// });

class App extends Component {
  state = {
    count: 2,
  };

  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <Test count={count} />
        <button type="button" onClick={this.increment}>
          Increment Count
        </button>
      </>
    );
  }
}

root.render(<App />);
