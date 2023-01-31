import React, { Component, PureComponent } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

// Virtual Dom is copy of the actual DOM which is stored in app memory

// Only update sub-tree
// Batch operations are possible

// if in the component state value change or prop value change that time only they compare old VDOM with new VDOM

// Life cycle Methods

// 1. Mounting
// -> Constructor (call only once)
// -> getDerivedStateFromProps (static)
// -> render
// -> componentDidMount (call only once)

// 2. Updating
// -> getDerivedStateFromProps
// -> shouldComponentUpdate (imp for improve performace)
// -> render
// -> getSnapshotBeforeUpdate
// -> componentDidUpdate

// 3. Unmounting
// -> componentWillUnmount (imp for avoid memory leak problem)

// 4. Error
// -> getDerivedStateFromError
// -> componentDidCatch

export default class Test extends PureComponent {
  state = {
    name: 'Yagnesh',
    todoItem: null,
    count: 0,
  };

  // Base on Prop value set state value
  // constructor will call only once
  // bind method
  // Analytics
  constructor(props) {
    super(props);
    // this.state = {
    //   count: props.count,
    //   name: 'Yagnesh',
    // };
    // this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
    // API call for analytics
    this.controller = new AbortController();
    // this.signal = this.controller.signal;
  }

  // Base on old prop value or old State value derive new State value
  //  calls every time whenever we change state value or prop
  // static getDerivedStateFromProps(props, state) {
  //   return {
  //     count: props.count !== state.count ? props.count : state.count,
  //   };

  //   // if (this.props.count !== props.count) {
  //   //   return {
  //   //     count: props.count,
  //   //   };
  //   // }
  //   // if (this.state.count !== state.count) {
  //   //   return {
  //   //     count: state.count,
  //   //   };
  //   // }
  // }

  // Most Important life cycle method
  // shouldComponentUpdate(nextProps, nextState) {
  //   return shallowCompare(this, nextProps, nextState);
  //   // if (this.props !== nextProps || this.state !== nextState) {
  //   //   return true;
  //   // }
  //   // return false;
  // }

  // manipulate your DOM element
  componentDidUpdate(prevProps, prevState) {}

  // html is mounted after that this life cycle method called
  // manipulate dom element
  // register any document events
  // on the page load if you want to display any data through server call
  // call only once

  async componentDidMount() {
    console.log(document.getElementsByTagName('button'));
    // const btns = document.getElementsByTagName('button');
    // for (let i = 0; i < btns.length; i++) {
    //   const element = btns[i];
    //   element.style.backgroundColor = 'blue';
    // }
    document.addEventListener('mousemove', this.mouseMove);
    this.interval = setInterval(() => {
      console.log('interval');
    }, 1000);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        signal: this.controller.signal,
      });
      const json = await res.json();
      this.setState({ todoItem: json });
    } catch (error) {}
  }

  // remove all the async code from the componet when you remove component
  componentWillUnmount() {
    document.removeEventListener('mousemove', this.mouseMove);
    clearInterval(this.interval);
    this.controller.abort();
  }

  mouseMove = () => {
    console.log('mouse move');
  };

  increment = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  decrement = () => {
    this.setState(state => ({
      count: state.count - 1,
    }));
  };

  render() {
    console.log('render test');
    const { count, name, todoItem } = this.state;
    throw new Error('something went wrong');

    return (
      <div>
        {todoItem && <h1>{todoItem.title}</h1>}
        {count < 5 && <p>{name}</p>}
        <button type="button" onClick={this.increment}>
          +
        </button>
        <p>{count}</p>
        <button type="button" onClick={this.decrement}>
          -
        </button>
      </div>
    );
  }
}
