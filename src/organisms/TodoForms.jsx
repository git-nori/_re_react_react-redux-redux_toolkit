import React from 'react'

import SearchUnit from '../molecules/SearchUnit'

const TodoForms = ({ addTodoFromCon }) => {
  return (
    <div>
      <SearchUnit inputType={'text'} btnLbl={'ADD TODO'} btnClkHandler={addTodoFromCon} />
    </div>
  )
}

export default TodoForms