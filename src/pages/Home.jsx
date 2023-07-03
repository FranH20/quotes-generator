import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { Title } from "../components/Title";
import TitleWritting from "../components/TitleWritting";
import QuotesContainer from "../containers/QuotesContainer";
import { getQuoteEs } from "../hooks/fetchQuotes";

const Home = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [quoteEs, setQuoteEs] = useState();

  useEffect(() => {
    getQuoteEs(setQuoteEs);
  }, []);

  return (
    <>
      <Title name="Frases del mundo" />
      {!quoteEs ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-2 auto-rows-auto gap-5">
          <div className="bg-color-secondary rounded p-5 text-white">
            <TitleWritting
              text="<strong>Bienvenido</strong><br/>En este lugar podras encontrar todo tipo de frases recolectadas por API públicas en español e ingles.<br/>- Franklin Huichi"
              delay={30}
              wrapperClassName="font-medium text-xl rounded"
              cursorClassName="text-xl"
            />
          </div>
          <div className="bg-gray-200 rounded p-5">
            <TitleWritting
              text={`<strong>Frase del día</strong><br/>${quoteEs.text}<br/>- ${quoteEs.author}`}
              delay={30}
              wrapperClassName="font-medium text-xl "
              cursorClassName="text-xl"
            />
          </div>

          <section className="col-start-1 col-end-2 p-5 bg-gray-100 rounded">
            <h3 className="text-3xl">{quote.text}</h3>
            <h4 className="text-2xl mt-3">
              {quote.author && `- ${quote.author}`}
            </h4>
          </section>
          <QuotesContainer
            className="col-start-2 col-end-3 p-5 flex flex-wrap gap-3 content-start bg-gray-100"
            setQuote={setQuote}
          />
        </div>
      )}
    </>
  );
};

export default Home;
