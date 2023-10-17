import React from "react"

const TextareaInput = (props) => {
  const { cols, rows,label,className,name,handleChange} = props
  return (
    <div className="textarea">
      <label>{label}</label>
      <textarea name={name} cols={cols} rows={rows} className={className} onChange={handleChange}></textarea>
    </div>
  )
}

export default TextareaInput
