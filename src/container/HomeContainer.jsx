import { connect } from 'react-redux'
import { addTodo, deleteTodo, toggleTodoCompleted } from '../actions/todoActionCreator'
import { showAll, showActive, showCompleted } from '../actions/visibleFilterActionCreator'

import HomeTmp from '../templates/HomeTmp'

// container(Atomic Designのpageに相当)

// Objectをreturn
const mapStateToProps = (state, ownProps) => ({
  // ConnectしたComponentのpropsでstateのtodosをprops.FromConで受け取れる
  todosFromCon: state.todos,
  visibleFilter: state.visibleFilter
})

// Objectをreturn
const mapDispatchToProps = (dispatch, ownProps) => ({
  // ConnectしたComponentのpropsでstateのaddTodoをprops.addTodoFromConで受け取れる
  addTodoFromCon: (txt) => dispatch(addTodo(txt)),
  deleteTodo: (idx) => dispatch(deleteTodo(idx)),
  toggleTodoCompleted: (idx) => dispatch(toggleTodoCompleted(idx)),
  showAll: () => dispatch(showAll()),
  showActive: () => dispatch(showActive()),
  showCompleted: () => dispatch(showCompleted())
})

// 上でセットした値をHomeTmpコンポーネントのpropsで受け取れるようconnect
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeTmp)