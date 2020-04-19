import { combineReducers } from 'redux'
import { todoReducer } from '../reducers/todoReducer'
import { visibleFilterReducer } from '../reducers/visibleFilterReducer'

const rootReducer = combineReducers({
  todos: todoReducer,
  visibleFilter: visibleFilterReducer
})

export default rootReducer