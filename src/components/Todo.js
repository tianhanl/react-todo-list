import React from 'react';


/*
  A Todo component should show the status of the todo, and users
  should be able to click them to toggle the component.
 */


const Todo = ({completed, onClick, text}) => (
  <li
    style={{ textDecoration: completed? 'line-through' : 'none' }}
    onClick={onClick}
  >
    {text};
  </li>
);

export default Todo;
