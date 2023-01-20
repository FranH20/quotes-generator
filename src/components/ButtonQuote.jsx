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

export const ButtonQuote = ({ name, className, img, onClick , classImage='w-5'}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center py-2 px-4 gap-x-2 font-bold rounded ${className} `}
    >
      <img src={img} alt={name} className={classImage} />
      {name}
    </button>
  );
};
