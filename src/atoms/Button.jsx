import React from 'react'

const Button = ({ className, clkHandler, children }) => {
  return (
    <button className={className} onClick={clkHandler}>{children}</button>
  )
}

export default Button