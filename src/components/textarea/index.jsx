import propTypes from "prop-types"

const TextareaInput = (props) => {
  const { cols, rows, label, className, name, handleChange } = props
  return (
    <div className="textarea">
      <label>{label}</label>
      <textarea
        name={name}
        cols={cols}
        rows={rows}
        className={className}
        onChange={handleChange}
      ></textarea>
    </div>
  )
}
TextareaInput.propTypes = {
  cols:propTypes.string,
  rows:propTypes.string,
  label:propTypes.string,
  className:propTypes.string,
  name:propTypes.string,
  handleChange:propTypes.func
}

export default TextareaInput
