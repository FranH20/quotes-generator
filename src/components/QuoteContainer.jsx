import React from "react";

const QuoteContainer = ({ className, text, author }) => {
  return (
    <article className="p-6 flex flex-col gap-y-3 my-5 bg-color-fourth rounded">
      <h3 className="text-2xl">{text}</h3>
      <span className="text-xl">{author}</span>
    </article>
  );
};

export default QuoteContainer;
