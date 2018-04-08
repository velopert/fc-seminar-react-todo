import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

class TodoList extends Component {
  render() {
    const { todos, onCheck, onRemove } = this.props;
    const todoList = todos.map(todo => (
      <TodoItem
        id={todo.id}
        key={todo.id}
        checked={todo.checked}
        text={todo.text}
        onCheck={onCheck}
        onRemove={onRemove}
      />
    ));
    return <div className="TodoList">{todoList}</div>;
  }
}

export default TodoList;
