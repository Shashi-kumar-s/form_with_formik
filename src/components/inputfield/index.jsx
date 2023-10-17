import propTypes from "prop-types"
const InputField = (props) => {
  const {
    type,
    placeholder,
    handlechange,
    name,
    className,
    label,
    id,
    handleBlur
  } = props
  return (
    <div className="inputfield">
      <label htmlFor="">{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={handlechange}
        name={name}
        className={className}
        onBlur={handleBlur}
      />
    </div>
  )
}
InputField.propTypes={
  type:propTypes.string,
  placeholder:propTypes.string,
  handlechange:propTypes.func,
  name:propTypes.string,
  className:propTypes.string,
  label:propTypes.string,
  id:propTypes.string,
  handleBlur:propTypes.func
}

export default InputField
