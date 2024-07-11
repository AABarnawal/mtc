import React, { useState } from 'react';

const InputField = ({
  label,
  type,
  name,
  maxLength,
  value,
  onChange,
  onBlur,
  onKeyPress,
  error,
  max,
  min,
}) => {
    
  return (
    <div className="col-xl-3">
      <label>
        {label} <sup className="text-danger fa-1x font-weight-bold">*</sup>
      </label>
      <input
        autoComplete="off"
        className="form-control form-control-sm"
        id={`txt_${name}`}
        maxLength={maxLength}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
        max={max}
        min={min}
      />
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
};

export default InputField;
