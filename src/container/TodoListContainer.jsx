import { connect } from 'react-redux'
import { deleteTodo, toggleTodoCompleted } from '../actions/todoActionCreator'
import { showAll, showActive, showCompleted } from '../actions/visibleFilterActionCreator'

import TodoList from '../organisms/TodoList'

// container(Atomic Designのpageに相当)

// Objectをreturn
const mapStateToProps = (state, ownProps) => ({
  // ConnectしたComponentのpropsでstateのtodosをprops.FromConで受け取れる
  todosFromCon: state.todos,
  visibleFilter: state.visibleFilter
})

// Objectをreturn
const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteTodo: (idx) => dispatch(deleteTodo(idx)),
  toggleTodoCompleted: (idx) => dispatch(toggleTodoCompleted(idx)),
  showAll: () => dispatch(showAll()),
  showActive: () => dispatch(showActive()),
  showCompleted: () => dispatch(showCompleted())
})

// 上でセットした値をOrganismsのpropsで受け取れるようconnect
const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer