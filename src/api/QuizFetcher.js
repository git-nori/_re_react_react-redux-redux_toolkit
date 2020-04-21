import axios from 'axios'

const API_URL = 'https://opentdb.com/api.php?amount=10&type=multiple'

class QuizFetcher {
  static async fetchData () {
    const response = await axios.get(API_URL)
    const data = response.data

    return data
  }
}

export default QuizFetcher