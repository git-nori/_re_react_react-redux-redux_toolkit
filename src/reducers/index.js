import { combineReducers } from 'redux'
import { todoReducer } from '../reducers/todoReducer'
import { visibleFilterReducer } from '../reducers/visibleFilterReducer'
import { quizReducer } from '../reducers/quizReducer'

const rootReducer = combineReducers({
  todos: todoReducer,
  visibleFilter: visibleFilterReducer,
  quiz: quizReducer
})

export default rootReducer