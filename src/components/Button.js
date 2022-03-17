import React from "react";

const Button = (props) => {

  return (
    <div className="">
      <button className="px-4 py-1 mt-2 font-semibold bg-blue-500 rounded-lg text-white border-2 border-blue-500 hover:bg-white hover:text-blue-500">{props.children}</button>
    </div>
  );
}

export default Button;