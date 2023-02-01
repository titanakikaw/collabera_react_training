import React, { PureComponent, createRef } from 'react';
import './todo.css';
import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoFilter from './todoFilter';

export default class Todo extends PureComponent {
  state = {
    todoList: [],
    filterType: 'all',
  };

  todoText = createRef();

  addTodo = event => {
    event.preventDefault();
    // O(logN)
    // const todoText =
    //   document.getElementById('todo_input');

    // O(1)

    // async
    this.setState(
      ({ todoList }) => ({
        todoList: [
          ...todoList,
          {
            id: new Date().valueOf(),
            text: this.todoText.current.value,
            isDone: false,
          },
        ],
      }),
      () => {
        this.todoText.current.value = '';
      },
    );
  };

  toggleComplete = item => {
    this.setState(({ todoList }) => {
      // O(logN)
      const index = todoList.findIndex(x => x.id === item.id);
      return {
        todoList: [
          ...todoList.slice(0, index),
          { ...item, isDone: !item.isDone },
          ...todoList.slice(index + 1),
        ],
      };
    });
  };

  deleteTodo = item => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex(x => x.id === item.id);
      return {
        todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
      };
    });
  };

  setFilterType = filterType => {
    this.setState({ filterType });
  };

  render() {
    console.log('todo render');
    return (
      <div className="todo">
        <h1 className="todo__title">Todo App</h1>
        <TodoForm addTodo={this.addTodo} ref={this.todoText} />
        <TodoList
          {...this.state}
          toggleComplete={this.toggleComplete}
          deleteTodo={this.deleteTodo}
        />
        <TodoFilter setFilterType={this.setFilterType} />
      </div>
    );
  }
}
