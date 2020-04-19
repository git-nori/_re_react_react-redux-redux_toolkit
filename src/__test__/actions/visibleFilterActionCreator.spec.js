import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
  showAll,
  showActive,
  showCompleted
} from '../../actions/visibleFilterActionCreator'

describe('visibleFilter', () => {
  it('showAll', () => {
    const action = showAll()

    expect(action).toStrictEqual({type: SHOW_ALL})
  })

  it('showActive', () => {
    const action = showActive()

    expect(action).toStrictEqual({type: SHOW_ACTIVE})
  })

  it('showCompleted', () => {
    const action = showCompleted()

    expect(action).toStrictEqual({type: SHOW_COMPLETED})
  })
})