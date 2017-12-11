import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/TodoList';
import TodoList from './components/TodoList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TodoList
          todos={[{ text: 'test string', id: 123, completed: true }]}
          onTodoClick={(id) => {
          console.log(id);
        }}
        />
      </div>
    );
  }
}

export default App;
