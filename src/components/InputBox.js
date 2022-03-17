import React from "react";

const InputBox = (props) => {
  
  return (
    <div className="mt-2">
      <div>
        <label className="text-xs text-gray-700">{props.inputLabel}</label>
      </div>
      <div>
        <input type={props.inputType}
          className="border-2 border-gray-600 w-56 rounded-lg px-2 py-1"
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          placeholder={` Please Enter ${props.inputLabel}`}
        />
      </div>
    </div>
  );
}
export default InputBox;