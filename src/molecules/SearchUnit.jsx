import React from 'react'

import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Label from '../atoms/Label'
import { useState } from 'react'

const SearchUnit = ({ lbl, inputType, btnClkHandler, btnLbl }) => {
  const [inputVal, setInputVal] = useState('')

  const onChgHndl = (e) => {
    setInputVal(e.target.value)
  }

  const clkHndl = () => {
    if (inputVal) {
      btnClkHandler(inputVal)
      setInputVal('')
    }
  }

  return (
    <>
      {lbl ? <Label>{lbl}</Label> : null}
      <Input type={inputType} val={inputVal} onChange={onChgHndl} />
      {btnLbl ? <Button clkHandler={clkHndl}>{btnLbl}</Button> : null}
    </>
  )
}

SearchUnit.defaultProps = {
  btnLbl: '',
  btnClkHandler: () => { },
  inputType: '',
  lbl: ''
}

export default SearchUnit