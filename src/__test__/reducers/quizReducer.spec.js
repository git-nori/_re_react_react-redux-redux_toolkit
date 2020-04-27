import {quizReducer} from '../../reducers/quizReducer'
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from '../../actions/quizActionCreators'

describe('', () => {
  it('request', () => {
    const action = {type: FETCH_REQUEST}
    const newState = quizReducer(undefined, action)

    expect(newState).toStrictEqual({
      isLoading: true,
      quizez: [],
      error: null
    })
  })

  it('success', () => {
    const dummyData = [{
      question: 'a',
      correct_answer: 'b',
      incorrect_answers: ['c,d,e']
    }]
    const action = {
      type: FETCH_SUCCESS,
      data: dummyData
    }
    const currentState = {
      isLoading: true,
      quizez: [],
      error: 'dummyError'
    }
    const newState = quizReducer(currentState, action)
    
    expect(newState).toStrictEqual({
      isLoading: false,
      quizez: dummyData,
      error: null
    })
  })

  it('failure', () => {
    const dummyError = 'error'
    const action = {
      type: FETCH_FAILURE,
      error: dummyError
    }
    const currentState = {
      isLoading: true,
      quizez: [],
      error: null
    }

    const newState = quizReducer(currentState, action)

    expect(newState).toStrictEqual({
      isLoading: false,
      quizez: [],
      error: dummyError
    })
  })
})