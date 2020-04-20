import React from 'react'

const Button = ({ clkHandler, children }) => {
  return (
    <button onClick={clkHandler}>{children}</button>
  )
}

export default Button