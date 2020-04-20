import React from 'react'
import Title from '../atoms/Title'
import TodoFormsContainer from '../container/TodoFormsContainer'
import TodoListContainer from '../container/TodoListContainer'

const HomeTmp = () => {
  return (
    <div>
      {/* <Header /> */}
      <div style={{ textAlign: "center" }}>
        <Title>Todo App</Title>
        <div style={{ marginBottom: "20px" }}>
          <TodoFormsContainer />
        </div>
        <TodoListContainer />
      </div>
      {/* <Fotter /> */}
    </div >
  )
}

export default HomeTmp