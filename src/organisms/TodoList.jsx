import React from 'react'

import ListItem from '../molecules/ListItem'
import Button from '../atoms/Button'
import './TodoList.css'

const TodoList = ({ todosFromCon, deleteTodo, toggleTodoCompleted, visibleFilter, showAll, showActive, showCompleted }) => {
  const todos = todosFromCon.filter(todo => {
    switch (visibleFilter) {
      case 'SHOW_ALL':
        return todo
        break;
      case 'SHOW_ACTIVE':
        return !todo.hasCompleted()
        break;
      case 'SHOW_COMPLETED':
        return todo.hasCompleted()
        break;
    }
  })

  const renderList = todos.map((todo, idx) => {
    const actions = [
      { "name": "DELETE TODO", "hndler": deleteTodo },
      { "name": "COMPLETED TODO", "hndler": toggleTodoCompleted }
    ]

    return <ListItem key={idx} id={idx} actions={actions}>{todo.text}</ListItem>
  })

  return (
    <div>
      <Button clkHandler={() => showAll()}>SHOW ALL</Button>
      <Button clkHandler={() => showActive()}>SHOW ACTIVE</Button>
      <Button clkHandler={() => showCompleted()}>SHOW COMPLETED</Button>
      <ul>
        {renderList}
      </ul>
    </div>
  )
}

export default TodoList