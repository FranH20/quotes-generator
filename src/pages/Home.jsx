import React from "react";
import { Title } from "../components/Title";
import TitleWritting from "../components/TitleWritting";
import { QuoteInSpanish } from "../hooks/quotesHooks";
import { CardQuoteSkeleton } from "../components/ui/skeletons";
import QuoteSelector from "../containers/QuoteSelector";

const Home = () => {
  const { data, loading } = QuoteInSpanish();

  return (
    <>
      <Title name="Fraseando" />
      <div className="grid grid-cols-1 auto-rows-auto gap-5 pb-5">
        <div className="row-start-1 row-end-2 bg-gray-200 rounded p-5 min-h-[100px]">
          {loading && <CardQuoteSkeleton />}
          {!loading && (
            <TitleWritting
              text={`<strong>Frase del día</strong><br/>${
                data?.text
              }<br/>- ${data?.author}`}
              delay={30}
              wrapperClassName="font-medium text-xl"
              cursorClassName="text-xl"
            />
          )}
        </div>
        <div className="row-start-2 row-end-3 bg-color-secondary rounded p-5 text-white">
          <TitleWritting
            text="<strong>Bienvenido</strong><br/>En este lugar podras encontrar todo tipo de frases recolectadas por API públicas en español e ingles.<br/>- Franklin Huichi"
            delay={30}
            wrapperClassName="font-medium text-xl rounded"
            cursorClassName="text-xl"
          />
        </div>
        <QuoteSelector />
      </div>
    </>
  );
};

export default Home;
