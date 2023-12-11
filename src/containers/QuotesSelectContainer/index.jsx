import React from "react";
import { useQuote } from "../../hooks/useQuote";
import { BodyQuoteSelector } from "./twinStyle";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

const quotes = [
  "Quote of the day",
  "Breaking Bad",
  "Animechan",
  "Donald Trump",
  "Famouse People",
  "Chuck Norris",
  "Marvel",
];

const QuotesSelectContainer = () => {
  const {
    onFetchQuoteOfTheDay,
    onFetchBreakingBad,
    onFetchAnimechan,
    onFetchDonaldTrump,
    onFetchFamousPeople,
    onFetchChuckNorris,
    onFetchMarvel,
  } = useQuote();

  const { loading } = useSelector((state) => state.quote);

  function selectTheQuote(event) {
    switch (event.target.value) {
      case quotes[0]:
        onFetchQuoteOfTheDay();
        break;
      case quotes[1]:
        onFetchBreakingBad();
        break;
      case quotes[2]:
        onFetchAnimechan();
        break;
      case quotes[3]:
        onFetchDonaldTrump();
        break;
      case quotes[4]:
        onFetchFamousPeople();
        break;
      case quotes[5]:
        onFetchChuckNorris();
        break;
      case quotes[6]:
        onFetchMarvel();
        break;
    }
  }

  return (
    <>
      <BodyQuoteSelector
        onChange={selectTheQuote}
        style={{
          backgroundImage: "url('/img/arrow-down.svg')",
          backgroundSize: "24px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "calc(100% - 8px) center",
        }}
        disabled={loading}
      >
        <option>Escoge una de estas opciones</option>
        {quotes.map((quote) => (
          <option key={quote} value={quote}>
            {quote}
          </option>
        ))}
      </BodyQuoteSelector>
      <Toaster />
    </>
  );
};

export default QuotesSelectContainer;
