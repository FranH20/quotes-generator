import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Title from "../components/Title";
import TitleWritting from "../components/TitleWritting";
import QuotesContainer from "../containers/QuotesContainer";
import { getQuotes, getQuoteEs } from "../hooks/fetchQuotes";

const Home = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [quoteEs, setQuoteEs] = useState();

  useEffect(() => {
    getQuoteEs(setQuoteEs);
  }, []);

  
  return (
    <>
      <Title name="Frases del mundo"/>
      {!quoteEs ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-2 auto-rows-auto">
          <TitleWritting
            text="<strong>Bienvenido</strong><br/>En este lugar podras encontrar todo tipo de frases recolectadas por API públicas en español e ingles.<br/>- Franklin Huichi"
            delay={30}
            wrapperClassName="font-medium text-xl"
            cursorClassName="text-xl"
          />
          <TitleWritting
            text={`<strong>Frase del día</strong><br/>${quoteEs.text}<br/>- ${quoteEs.author}`}
            delay={30}
            wrapperClassName="font-medium text-xl"
            cursorClassName="text-xl"
          />
          <section className="col-start-1 col-end-2 p-3">
            <h3 className="text-5xl">{quote.text}</h3>
            <h4 className="text-2xl mt-3">
              {quote.author && `- ${quote.author}`}
            </h4>
          </section>
          <QuotesContainer
            className="col-start-2 col-end-3 p-3 flex flex-wrap gap-3 content-start"
            setQuote={setQuote}
          />
        </div>
      )}
    </>
  );
};

export default Home;
