import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import './QuizList.css'
import Button from '../atoms/Button'

const QuizList = ({ quizInfo, fetchQuiz }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [correctCnt, setCorrectCnt] = useState(0)

  useEffect(() => {
    const f = async () => {
      await fetchQuiz()
    }
    f()
  }, [])

  const restart = () => {
    setCurrentIndex(0)
    setCorrectCnt(0)
    fetchQuiz()
  }

  const renderLoading = () => {
    return (
      <h2>Loading...</h2>
    )
  }

  const renderResult = () => {
    return (
      <>
        <h2>Results</h2>
        <p>Correct Answer Count is {correctCnt}</p>
      </>
    )
  }

  const renderList = (quiz) => {
    const answers = quiz.shuffleAnswers()
    const clkHandler = (ans) => {
      if (quiz.isCorrect(ans)) {
        setCorrectCnt(correctCnt + 1)
      }
      setCurrentIndex(currentIndex + 1)
    }
    return answers.map((ans, idx) => {
      return (
        <Button className={"btn"} clkHandler={() => { clkHandler(ans) }} key={idx}>{ans}</Button>
      )
    })
  }

  const render = () => {
    const quizez = quizInfo.quizez
    if (quizez.length === 0) {
      return renderLoading()
    }

    if (quizez.length > 0 && quizez.length <= currentIndex) {
      return renderResult()
    }

    const currentQuiz = quizez[currentIndex]
    return (
      <>
        <h2>{currentQuiz.question}</h2>
        {renderList(currentQuiz)}
      </>
    )
  }

  return (
    <div style={{ marginLeft: -40 }}>
      <ul>
        {render()}
      </ul>
      <div style={{ marginLeft: 40 }}>
        <Button clkHandler={() => { restart() }}>RESET</Button>
      </div>
    </div>
  )
}

export default QuizList