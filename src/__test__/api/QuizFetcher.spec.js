import QuizFetcher from '../../api/QuizFetcher'

describe('', () => {
  it('QuizFetcher typeof is function', () => {
    expect(typeof QuizFetcher).toStrictEqual('function')
  })
})

describe('fetch method', () => {
  it('fetch 10 result item', async ()=>{
    const response = await QuizFetcher.fetchData()
    const results = response.data.results

    expect(Array.isArray(results)).toBeTruthy
    expect(results.length).toStrictEqual(10)
  })

  it('result item is correct type', async () => {
    const response = await QuizFetcher.fetchData()
    const results = response.data.results

    results.forEach(result => {
      expect(typeof result.category).toStrictEqual('string')
      expect(typeof result.type).toStrictEqual('string')
      expect(typeof result.difficulty).toStrictEqual('string')
      expect(typeof result.question).toStrictEqual('string')
      expect(typeof result.correct_answer).toStrictEqual('string')
      expect(typeof result.incorrect_answers).toStrictEqual('object')

      expect(result.incorrect_answers.length).toStrictEqual(3)
      result.incorrect_answers.forEach(ans => {
        expect(typeof ans).toStrictEqual('string')
      })
    })
  })
})