import React from 'react'

import Button from '../atoms/Button'

const ListItem = ({ id, children, actions }) => {
  const renderBtn = () => {
    if (actions) {
      return actions.map((action, idx) => <Button key={idx} clkHandler={() => action.hndler(id)}>{action.name}</Button>)
    }
  }

  return (
    <li>
      <span>{children}</span>
      <div className={"list-btn"}>
        {renderBtn()}
      </div>
    </li>
  )
}

export default ListItem