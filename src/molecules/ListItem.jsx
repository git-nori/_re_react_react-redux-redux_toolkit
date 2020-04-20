import React from 'react'

import Button from '../atoms/Button'

const ListItem = ({ id, children, deleteTodo, toggleTodoCompleted }) => {
  return (
    <li>
      <span>{children}</span>
      <div className={"list-btn"}>
        <Button clkHandler={() => deleteTodo(id)}>DELETE TODO</Button>
        <Button clkHandler={() => toggleTodoCompleted(id)}>COMPLETED TODO</Button>
      </div>
    </li>
  )
}

export default ListItem