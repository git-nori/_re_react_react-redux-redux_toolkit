import { showAll, showActive, showCompleted, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../../actions/visibleFilterActionCreator'
import { visibleFilterReducer } from '../../reducers/visibleFilterReducer'

describe('reduceer', () => {
  const createInitialState = () => {
    const action = {}
    const state = visibleFilterReducer(undefined, action)

    return state
  }

  it('test initialState', () => {
    const state = createInitialState()
    expect(state).toStrictEqual(SHOW_ALL)
  })

  it('showAll', () => {
    const state = createInitialState()
    const newState = visibleFilterReducer(state, showAll())
    expect(newState).toStrictEqual(SHOW_ALL)
  })

  it('showAll', () => {
    const state = createInitialState()
    const newState = visibleFilterReducer(state, showActive())
    expect(newState).toStrictEqual(SHOW_ACTIVE)
  })

  it('showAll', () => {
    const state = createInitialState()
    const newState = visibleFilterReducer(state, showCompleted())
    expect(newState).toStrictEqual(SHOW_COMPLETED)
  })
})