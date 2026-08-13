import React from "react";
const variant = {
    delete: "bg-red-600 text-"
};

function Button({ text, variant }) {
  return <button>{text}</button>;
}

export default Button;
