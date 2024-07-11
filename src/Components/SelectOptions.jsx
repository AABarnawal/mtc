import React from 'react'
//title , imp, name, value, fun, options
function SelectOptions(props) {
  return (
    <div className="col-xl-3">
            <label>
              {props.title}{props.imp ?<sup className="text-danger fa-1x font-weight-bold">*</sup> : <></> }
            </label>
            <select
              className="form-control form-control-sm"
              required
              id={props.id}
              name={props.name}
              value={props.value}
              onChange={props.fun}
            >
              {props.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            </select>
    </div>
  )
}

export default SelectOptions

