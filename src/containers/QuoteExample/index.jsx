import React from "react";
import QuoteSelector from "../QuoteSelector";
import {
  BodyQuoteExample,
  ButtonsQuoteExample,
  ResponseQuoteExample,
  SelectQuoteExample,
  SelectorsQuoteExample,
} from "./twinStyle";
import QuotesContainer from "../QuotesContainer";
import QuotesSelectContainer from "../QuotesSelectContainer";

const QuoteExample = () => {
  return (
    <BodyQuoteExample id="randomQuoteSection">
      <SelectorsQuoteExample>
        <p>Genera tu frase favorita dependiendo tus gustos:</p>
        <SelectQuoteExample>
          <QuotesSelectContainer />
        </SelectQuoteExample>
        <ButtonsQuoteExample>
          <QuotesContainer />
        </ButtonsQuoteExample>
      </SelectorsQuoteExample>
      <ResponseQuoteExample>
        <QuoteSelector />
      </ResponseQuoteExample>
    </BodyQuoteExample>
  );
};

export default QuoteExample;
