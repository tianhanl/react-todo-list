import React from 'react';
import logo from './logo.svg';
import './App.css';
import VisibleTodoList from './containers/VisibleTodoList';
import AddTodo from './containers/AddTodo';
const App = () => (
  <div className={'app'}>
    <VisibleTodoList />
    <AddTodo />
  </div>
);

export default App;
