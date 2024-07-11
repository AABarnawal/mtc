import React, { useState } from 'react';


const Complications = ({ list, selectedValues, onChange }) => {
  return (
    <div className='d-flex flex-wrap' >
      {list.map((item, index) => (
        <div key={index} className='m-1' >
          <input
            type="checkbox"
            id={item}
            checked={selectedValues.includes(index)}
            onChange={(e) => {
              const newSelectedValues = [...selectedValues];
              if (e.target.checked) {
                newSelectedValues.push(index);
              } else {
                const removeIndex = newSelectedValues.indexOf(index);
                newSelectedValues.splice(removeIndex, 1);
              }
              onChange(newSelectedValues);
            }}
          />
          <label style={{fontSize:'12px'}} htmlFor={item}>_{item}</label>
        </div>
      ))}
    </div>
  );
};

export default Complications;









