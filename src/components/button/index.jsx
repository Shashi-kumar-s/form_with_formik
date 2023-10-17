import propTypes from "prop-types"

const FormButton = ({value,type,buttonStyle,onclick}) => {
  return (
    <button type={type} className={buttonStyle} onClick={onclick}>{value}</button>
  )
}

FormButton.propTypes={
  value:propTypes.string,
  type:propTypes.string,
  buttonStyle:propTypes.string,
  onclick:propTypes.func
}

export default FormButton