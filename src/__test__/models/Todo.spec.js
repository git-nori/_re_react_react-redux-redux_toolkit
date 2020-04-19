import Todo from '../../models/Todo'

describe('todo', () => {
  it('get text', () => {
    const text = 'dummy'
    const todo = new Todo(text)

    expect(todo.text).toStrictEqual(text)
  })

  it('hasCompleted', () => {
    const text = 'dummy'
    const todo = new Todo(text)

    expect(todo.hasCompleted()).toBeFalsy
  })

  it('toggle', () => {
    const text = 'dummy'
    const todo = new Todo(text)
    todo.toggle()

    expect(todo.hasCompleted()).toBeTruthy
  })
})