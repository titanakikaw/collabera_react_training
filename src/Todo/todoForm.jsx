import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

const TodoForm = forwardRef(({ addTodo }, ref) => {
  console.log('TodoForm render');
  return (
    <form className="todo__form todo_form" onSubmit={addTodo}>
      <input ref={ref} type="text" className="todo_form__input" />
      <button type="submit" className="todo_form__btn">
        Add Todo
      </button>
    </form>
  );
});

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default memo(TodoForm);
