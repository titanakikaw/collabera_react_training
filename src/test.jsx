import React, { Component } from 'react';

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
// 3. Unmounting
// 4. Error

export default class Test extends Component {
  state = {
    name: 'Yagnesh',
    todoItem: null,
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
  }

  // Base on old prop value or old State value derive new State value
  //  calls every time whenever we change state value or prop
  static getDerivedStateFromProps(props, state) {
    return {
      count: props.count,
    };
  }

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
    document.addEventListener('copy', () => {
      console.log('copied');
    });
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const json = await res.json();
      this.setState({ todoItem: json });
    } catch (error) {}
  }

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
    console.log('render');
    const { count, name, todoItem } = this.state;

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
