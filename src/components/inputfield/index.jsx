import React from "react"

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

export default InputField
