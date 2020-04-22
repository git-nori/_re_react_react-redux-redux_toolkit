import Quiz from '../../models/Quiz'

describe('', () => {
  it('', async () => {
    const quizzes = await Quiz.fetchAndCreateQuizez()

    expect(Array.isArray(quizzes)).toBeTruthy
    expect(quizzes.length).toStrictEqual(10)
    quizzes.forEach(quiz => {
      expect(quiz instanceof Quiz).toBeTruthy
    });
  })

  it('', () => {
    const quizFactory = () => {
      return {
        question: 'question',
        correct_answer: 'correct',
        incorrect_answers: [
          'dummy1',
          'dummy2',
          'dummy3',
        ]
      }
    }

    const dummyQuizDataList = [
      quizFactory(),
      quizFactory(),
      quizFactory()
    ]
    const quizzes = Quiz.createQuizInstanceWithData(dummyQuizDataList)

    expect(Array.isArray(quizzes)).toBeTruthy
    expect(quizzes.length).toStrictEqual(dummyQuizDataList.length)
    quizzes.forEach(quiz => {
      expect(quiz instanceof Quiz).toBeTruthy
    });
  })
})