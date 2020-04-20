import React from 'react'

const Input = ({ type, val, onChange }) => {
  return (
    <input type={type} value={val} onChange={onChange}/>
  )
}

export default Input