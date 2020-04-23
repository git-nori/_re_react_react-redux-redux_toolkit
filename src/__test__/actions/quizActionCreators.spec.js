import Quiz from '../../models/Quiz'
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  fetchQuiz
} from '../../actions/quizActionCreators'
import axios from 'axios'
import thunk from 'redux-thunk'
import createMockStore from 'redux-mock-store'

// axiosをmock化
jest.mock('axios')

// mockするstoreのセット
const middlewares = [thunk]
const mockStore = createMockStore(middlewares)

describe('', () => {
  it('fetch success', async () => {
    const expectedResults = [
      {
        question: 'a',
        correct_answer: 'b',
        incorrect_answers: ['c', 'd', 'e']
      }
    ]
    // mockしたaxiosの戻り値をセット
    axios.get.mockResolvedValue({
      data: {
        results: expectedResults
      }
    })

    // storeをmock化
    const store = mockStore()
    await store.dispatch(fetchQuiz())

    expect(store.getActions()).toEqual([
      {
        type: FETCH_REQUEST
      },
      {
        type: FETCH_SUCCESS,
        data: Quiz.createQuizInstanceWithData(expectedResults)
      }
    ])
  })

  it('fetch error', async () => {
    const expectedVal = {
      message: 'dummy error'
    }
    axios.get.mockRejectedValue(expectedVal)

    const store = mockStore()
    await store.dispatch(fetchQuiz())

    expect(store.getActions()).toEqual([
      {
        type: FETCH_REQUEST
      },
      {
        type: FETCH_FAILURE,
        error: expectedVal
      }
    ])
  })
})