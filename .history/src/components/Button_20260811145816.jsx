import React from "react";
const variants = {
    delete: "bg-red-600 text-white p-2 text-"
};

function Button({ text, variant }) {
  return <button className={`${variants[variant]}`}>{text}</button>;
}

export default Button;
