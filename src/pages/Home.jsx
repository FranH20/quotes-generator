import React, { useEffect, useState } from "react";
import TitleWritting from "../components/TitleWritting";
import QuotesContainer from "../containers/QuotesContainer";
import { getQuotes, getQuoteEs } from "../util/fetchQuotes";

const Home = () => {
  const [quote, setQuote] = useState();
  const [quoteEs, setQuoteEs] = useState();

  useEffect(() => {
    //getQuotes(setQuote);
    getQuoteEs(setQuoteEs);
  }, []);

  if (!quoteEs) return <h1>No hay información</h1>;

  return (
    <>
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
        <QuotesContainer />
      </div>
    </>
  );
};

export default Home;
