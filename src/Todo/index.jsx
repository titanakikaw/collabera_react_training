import React, {
  Component,
  createRef,
} from 'react';
import clsx from 'clsx';
import './todo.css';

export default class Todo extends Component {
  state = {
    todoList: [],
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
      const index = todoList.findIndex(
        x => x.id === item.id,
      );
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
      const index = todoList.findIndex(
        x => x.id === item.id,
      );
      return {
        todoList: [
          ...todoList.slice(0, index),
          ...todoList.slice(index + 1),
        ],
      };
    });
  };

  render() {
    console.log('render');
    const { todoList } = this.state;

    return (
      <div className="todo">
        <h1 className="todo__title">Todo App</h1>
        <form
          className="todo__form todo_form"
          onSubmit={this.addTodo}
        >
          <input
            ref={this.todoText}
            type="text"
            className="todo_form__input"
          />
          <button
            type="submit"
            className="todo_form__btn"
          >
            Add Todo
          </button>
        </form>
        <div className="w-full flex-1">
          {todoList.map(item => (
            <div
              key={item.id}
              className="flex items-center m-4"
            >
              <input
                type="checkbox"
                checked={item.isDone}
                onChange={() =>
                  this.toggleComplete(item)
                }
              />
              <p
                className={clsx('flex-1 px-4', {
                  'line-through': item.isDone,
                })}
                // style={{
                //   textDecoration: item.isDone
                //     ? 'line-through'
                //     : 'none',
                // }}
              >
                {item.text}
              </p>
              <button
                type="button"
                className="btn"
                onClick={() =>
                  this.deleteTodo(item)
                }
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="w-full flex">
          <button
            type="button"
            className="btn flex-1"
          >
            All
          </button>
          <button
            type="button"
            className="btn flex-1"
          >
            Pending
          </button>
          <button
            type="button"
            className="btn flex-1"
          >
            Completed
          </button>
        </div>
      </div>
    );
  }
}
