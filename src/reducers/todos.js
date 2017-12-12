// use es6 default parameter to provide initial state
import { typeList } from '../actions/index';
const todos = (state = [], action) => {
  switch (action.type) {
    case typeList.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case typeList.TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
