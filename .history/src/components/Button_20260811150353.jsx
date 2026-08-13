import React from "react";
const variants = {
  delete: "bg-red-600 text-white p-1",
  edit: "bg-green-600 text-white p-1",
};

function Button({ text, variant, handleDele }) {
  return <button onClick={} className={`${variants[variant]}`}>{text}</button>;
}

export default Button;
