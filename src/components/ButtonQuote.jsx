import React, { forwardRef } from "react";

export const ButtonBase = forwardRef(({ name, className, onClick }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`${className} border-0 text-center p-2 rounded`}
    >
      {name}
    </button>
  );
});

export const ButtonQuote = ({ name, className, img, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} flex items-center py-2 px-4 gap-x-2 font-bold max-h-12 rounded`}
    >
      <img src={img} alt={name} className="w-5" />
      {name}
    </button>
  );
};
