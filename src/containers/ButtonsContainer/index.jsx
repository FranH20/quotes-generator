import React from "react";

import { ButtonQuote } from "../../components/ButtonQuote";

import iconQuoteGenerator from "../../assets/quote-generator-image.svg";
import iconBackgroundGenerator from "../../assets/paintbrush-fill-image.svg";
import iconTextGenerator from "../../assets/text-configuration-image.svg";

const ButtonsContainer = ({ setTabs }) => {
  return (
    <>
      <ButtonQuote
        name="Frase"
        className="row-start-1 col-start-2 col-end-4 hover:bg-color-fourth flex-col"
        img={iconQuoteGenerator}
        classImage="w-10"
        onClick={() => setTabs("FRASE")}
      />
      <ButtonQuote
        name="Fondo"
        className="row-start-1 col-start-5 col-end-7 hover:bg-color-fourth flex-col"
        img={iconBackgroundGenerator}
        classImage="w-10"
        onClick={() => setTabs("FONDO")}
      />
      <ButtonQuote
        name="Texto"
        className="row-start-1 col-start-8 col-end-10 hover:bg-color-fourth flex-col"
        img={iconTextGenerator}
        classImage="w-10"
        onClick={() => setTabs("TEXTO")}
      />
    </>
  );
};

export default ButtonsContainer;
