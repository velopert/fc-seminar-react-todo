import React, { Component } from 'react';
import TodoList from './components/TodoList';
import CreateForm from './components/CreateForm';

import './App.css';

class App extends Component {
  id = 3;

  state = {
    todos: [
      {
        id: 0,
        text: '앵귤러 배우고',
        checked: true
      },
      {
        id: 1,
        text: '리액트 배우고',
        checked: false
      },
      {
        id: 2,
        text: '뷰 배우자',
        checked: false
      }
    ]
  };

  handleCreate = text => {
    // 데이터 만들고
    const todoData = {
      id: this.id++,
      text,
      checked: false
    };
    // 데이터를 등록
    this.setState({
      todos: this.state.todos.concat(todoData)
    });
  };

  handleCheck = id => {
    const nextTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    this.setState({
      todos: nextTodos
    });
  };

  handleRemove = id => {
    const nextTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: nextTodos
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>오늘 뭐할까?</h1>
        </div>
        <CreateForm onSubmit={this.handleCreate} />
        <div className="white-box">
          <TodoList
            todos={this.state.todos}
            onCheck={this.handleCheck}
            onRemove={this.handleRemove}
          />
        </div>
      </div>
    );
  }
}

export default App;
