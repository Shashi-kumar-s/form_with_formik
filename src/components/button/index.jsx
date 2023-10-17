import React from 'react'

const FormButton = ({value,type,buttonStyle,onclick}) => {
  return (
    <button type={type} className={buttonStyle} onClick={onclick}>{value}</button>
  )
}

export default FormButton