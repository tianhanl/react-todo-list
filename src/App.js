import React from 'react';
import logo from './logo.svg';
import './App.css';
import VisibleTodoList from './containers/VisibleTodoList';
import AddTodo from './containers/AddTodo';
import FilterLink from './containers/FilterLink';
const App = () => (
  <div className={'app'}>
    <VisibleTodoList />
    <AddTodo />
    <FilterLink children={'SHOW_ALL'} />
  </div>
);

export default App;
