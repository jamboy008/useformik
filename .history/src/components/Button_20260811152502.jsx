import React from "react";

const variants = {
  // edit ham, secondary ham bir xil yashil rang beradi
  edit: "bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white shadow-sm shadow-emerald-200",
  secondary: "bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white shadow-sm shadow-emerald-200",
  
  // delete ham, danger ham bir xil qizil rang beradi
  delete: "bg-rose-500 hover:bg-rose-600 active:bg-rose-700 text-white shadow-sm shadow-rose-200",
  danger: "bg-rose-500 hover:bg-rose-600 active:bg-rose-700 text-white shadow-sm shadow-rose-200",
};

function Button({ text, variant = "edit", onClick, type = "button", ...props }) {
  const baseStyles =
    "inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold capitalize rounded-lg transition-all duration-200 cursor-pointer focus:outline-none";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.edit}`}
      {...props}
    >
      {text}
    </button>
  );
}

export default Button;