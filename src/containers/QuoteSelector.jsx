import React, { useState } from "react";
import QuotesContainer from "./QuotesContainer";
import { CardQuoteSkeleton } from "../components/ui/skeletons";

const QuoteSelector = () => {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });

  return (
    <>
      <QuotesContainer
        className="row-start-3 row-end-4 p-5 flex flex-wrap gap-3 content-start bg-gray-100"
        setQuote={setQuote}
        onLoading={setLoading}
      />
      <section className="lg:col-start-2 lg:row-start-3 row-start-4 row-end-5 p-5 bg-white border rounded">
        {loading ? (
          <CardQuoteSkeleton />
        ) : (
          <>
            <h3 className="text-xl">{quote?.text}</h3>
            <h4 className="text-l mt-3">
              {quote?.author && `- ${quote?.author}`}
            </h4>
          </>
        )}
        { loading == undefined && <span>😔 Quote not found</span>}
      </section>
    </>
  );
};

export default QuoteSelector;
