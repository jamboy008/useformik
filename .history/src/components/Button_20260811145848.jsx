import React from "react";
const variants = {
  delete: "bg-red-600 text-white p-",
};

function Button({ text, variant }) {
  return <button className={`${variants[variant]}`}>{text}</button>;
}

export default Button;
