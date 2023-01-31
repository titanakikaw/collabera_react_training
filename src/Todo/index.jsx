import React, { Component } from 'react';
import './todo.css';

export default class Todo extends Component {
  state = {
    todoText: '',
    todoList: [],
  };

  changeText = event => {
    this.setState({
      todoText: event.target.value,
    });
  };

  addTodo = event => {
    event.preventDefault();
    this.setState(({ todoText, todoList }) => ({
      todoList: [
        ...todoList,
        {
          id: new Date().valueOf(),
          text: todoText,
        },
      ],
      todoText: '',
    }));
  };

  render() {
    const { todoText, todoList } = this.state;

    return (
      <div className="todo">
        <h1 className="todo__title">Todo App</h1>
        <form
          className="todo__form todo_form"
          onSubmit={this.addTodo}
        >
          <input
            type="text"
            className="todo_form__input"
            value={todoText}
            onChange={this.changeText}
          />
          <button
            type="submit"
            className="todo_form__btn"
          >
            Add Todo
          </button>
        </form>
        <div>
          {todoList.map(item => (
            <p key={item.id}>{item.text}</p>
          ))}
        </div>
      </div>
    );
  }
}
