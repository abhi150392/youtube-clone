import React from "react";

const Button = ({ name }) => {
  return (
    <div className="py-2 px-5 m-2 bg-gray-100 rounded-lg">
      <button>{name}</button>
    </div>
  );
};

export default Button;
