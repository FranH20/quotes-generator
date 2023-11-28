import React from "react";

import { ButtonQuote } from "../../components/ButtonQuote";

import iconQuoteGenerator from "../../assets/quote-generator-image.svg";
import iconBackgroundGenerator from "../../assets/paintbrush-fill-image.svg";
import iconTextGenerator from "../../assets/text-configuration-image.svg";

const ButtonsContainer = ({ tab, setTab }) => {
  return (
    <>
      <ButtonQuote
        name="Frase"
        hasBg={tab === "FRASE"}
        className="row-start-1 col-start-2 col-end-4 flex-col"
        img={iconQuoteGenerator}
        classImage="w-10"
        onClick={() => setTab("FRASE")}
      />
      <ButtonQuote
        name="Fondo"
        hasBg={tab === "FONDO"}
        className="row-start-1 col-start-5 col-end-7 flex-col"
        img={iconBackgroundGenerator}
        classImage="w-10"
        onClick={() => setTab("FONDO")}
      />
      <ButtonQuote
        name="Texto"
        hasBg={tab === "TEXTO"}
        className="row-start-1 col-start-8 col-end-10 flex-col"
        img={iconTextGenerator}
        classImage="w-10"
        onClick={() => setTab("TEXTO")}
      />
    </>
  );
};

export default ButtonsContainer;
