import { connect } from 'react-redux'
import { fetchQuiz } from '../actions/quizActionCreators'

import QuizList from '../organisms/QuizList'

const mapStateToProps = (state, ownProps) => ({
  quizInfo: state.quiz
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchQuiz: () => dispatch(fetchQuiz())
})

const QuizListContainer = connect(mapStateToProps, mapDispatchToProps)(QuizList)

export default QuizListContainer