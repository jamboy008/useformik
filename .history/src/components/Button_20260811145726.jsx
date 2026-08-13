import React from "react";
const variant = {
    delete: "bg-red-"
};

function Button({ text, variant }) {
  return <button>{text}</button>;
}

export default Button;
