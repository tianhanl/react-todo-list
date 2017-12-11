import React from 'react';


/*
  A Todo component should show the status of the todo, and users
  should be able to click them to toggle the component.
 */

class Todo extends React.Component {
  render() {
    return (
      <li
        style={{ textDecoration: this.props.completed ? 'line-through' : 'none' }}
        onClick={this.props.onClick}
      >
        {this.props.text};
      </li>
    );
  }
}

export default Todo;
