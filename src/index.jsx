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
    name: 'Virat',
  };

  changeName = () => {
    this.setState({ name: 'Yagnesh' });
  };

  render() {
    const { count, name } = this.state;
    console.log('render app');
    return (
      <>
        <Test count={count} />
        <p>{name}</p>
        <button type="button" onClick={this.changeName}>
          Change Name
        </button>
      </>
    );
  }
}

root.render(<App />);
