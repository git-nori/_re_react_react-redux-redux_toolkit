import { todoReducer } from '../../reducers/todoReducer'
import { addTodo, deleteTodo, toggleTodoCompleted } from '../../actions/todoActionCreator'
import Todo from '../../models/Todo'

describe('reduceer', () => {
  it('addTodo', () => {
    const initialState = []
    const txt = 'dummy'
    const action = addTodo(txt)
    const newState = todoReducer(initialState, action)

    const todo = new Todo(txt)

    expect(newState.length).toStrictEqual(1)
    expect(newState).toStrictEqual([todo])
  })

  it('deleteTodo', () => {
    const len = 3
    let state = []
    for (let i = 0; i < len; i++) {
      const txt = `dummy-${i}`
      const action = addTodo(txt)
      state = todoReducer(state, action)
    }
    const todo0 = new Todo('dummy-0')
    const todo1 = new Todo('dummy-1')
    const todo2 = new Todo('dummy-2')
    const expectInitialState = [todo0, todo1, todo2]
    expect(state.length).toStrictEqual(len)
    expect(state).toStrictEqual(expectInitialState)

    const targetIdx = 1
    const newState = todoReducer(state, deleteTodo(targetIdx))
    expect(newState).toStrictEqual([todo0, todo2])
  })

  it('toggle', () => {
    const len = 3
    let state = []
    for (let i = 0; i < len; i++) {
      const txt = `dummy-${i}`
      const action = addTodo(txt)
      state = todoReducer(state, action)
    }

    const targetIdx = 1
    const newState = todoReducer(state, toggleTodoCompleted(targetIdx))
    expect(newState[targetIdx].hasCompleted()).toBeTruthy
  })
})