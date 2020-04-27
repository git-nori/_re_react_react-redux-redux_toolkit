import store from '../../store/index'
import { SHOW_ALL } from '../../actions/visibleFilterActionCreator'

describe('store', () => {
  it('initial State', () => {
    expect(store.getState()).toStrictEqual({
      // combineReducerのプロパティ名
      todos: [],
      visibleFilter: SHOW_ALL,
      quiz: {
        isLoading: false,
        quizez: [],
        error: null
      }
    })
  })
})