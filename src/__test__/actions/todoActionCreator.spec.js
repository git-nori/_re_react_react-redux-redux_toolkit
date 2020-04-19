import {
  addTodo,
  deleteTodo,
  toggleTodoCompleted,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO_COMPLETED
} from '../../actions/todoActionCreator'

describe('action', () => {
  it('addtodo', () => {
    const text = 'dummy'
    const action = addTodo(text)

    expect(action).toStrictEqual({ type: ADD_TODO, text })
  })

  it('deleteTodo', () => {
    const index = 1
    const action = deleteTodo(index)

    expect(action).toStrictEqual({ type: DELETE_TODO, index })
  })

  it('toggleTodoCompleted', () => {
    const index = 1
    const action = toggleTodoCompleted(index)

    expect(action).toStrictEqual({ type: TOGGLE_TODO_COMPLETED, index })
  })
})