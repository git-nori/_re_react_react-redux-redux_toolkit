import QuizFetcher from '../api/QuizFetcher'
import Quiz from '../models/Quiz'

export const FETCH_REQUEST = 'FETCH_REQUEST'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  }
}

const fetchSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    data
  }
}

const fetchFailure = (error) => {
  return {
    type: FETCH_FAILURE,
    error
  }
}

export const fetchQuiz = () => {
  return async dispatch => {
    dispatch(fetchRequest())

    try {
      const response = await QuizFetcher.fetchData()
      const results = response.data.results
      const data = Quiz.createQuizInstanceWithData(results)
      dispatch(fetchSuccess(data))
    } catch (error) {
      dispatch(fetchFailure(error))
    }
  }
}