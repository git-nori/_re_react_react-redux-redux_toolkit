import { connect } from 'react-redux'
import { fetchQuiz } from '../actions/quizActionCreators'

import QuizList from '../organisms/QuizList'

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchQuiz: () => dispatch(fetchQuiz())
})

const QuizListContainer = connect(null, mapDispatchToProps)(QuizList)

export default QuizListContainer