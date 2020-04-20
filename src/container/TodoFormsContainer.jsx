import { connect } from 'react-redux'
import { addTodo } from '../actions/todoActionCreator'

import TodoForms from '../organisms/TodoForms'

const mapDispatchToProps = (dispatch, ownProps) => ({
  // ConnectしたComponentのpropsでstateのaddTodoをprops.addTodoFromConで受け取れる
  addTodoFromCon: (txt) => dispatch(addTodo(txt)),
})

const TodoFormsContainer = connect(null, mapDispatchToProps)(TodoForms)

export default TodoFormsContainer