import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from '../actions/quizActionCreators'

const initialState = {
  isLoading: false,
  quizez: [],
  error: null
}

export const quizReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true
      }
      break;
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        quizez: actions.data,
        error: null
      }
      break;
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: actions.error
      }
      break;
    default:
      return state
      break;
  }
}