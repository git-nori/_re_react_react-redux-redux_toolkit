import {
  ADD_TODO,
  TOGGLE_TODO_COMPLETED,
  DELETE_TODO
} from '../actions/todoActionCreator'
import Todo from '../models/Todo'

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const todo = new Todo(action.text)
      return [...state, todo]
      break;
    case DELETE_TODO:
      return state.filter((todo, idx) => idx !== action.index)
      break;
    case TOGGLE_TODO_COMPLETED:
      return state.map((todo, idx) => {
        if (idx !== action.index) {
          return todo
        }

        const newTodo = new Todo(todo.text)
        if (!todo.hasCompleted()) { newTodo._completed = true }
        return newTodo
      })
      break;
    default:
      return state
      break;
  }
}