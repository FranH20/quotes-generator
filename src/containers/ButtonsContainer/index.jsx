import React from "react";

import {
  ButtonQuoteFancyYellow,
} from "../../components/ButtonQuote";

import iconQuoteGenerator from "../../assets/quote-generator-image.svg";
import iconBackgroundGenerator from "../../assets/paintbrush-fill-image.svg";
import iconTextGenerator from "../../assets/text-configuration-image.svg";

const ButtonsContainer = ({ tab, setTab }) => {
  return (
    <>
      <ButtonQuoteFancyYellow name="Frase" onClick={() => setTab("FRASE")} active={tab === "FRASE"}>
        <img
          src={iconQuoteGenerator}
          alt="Icon quote generator"
          className="w-[16px] h-[16px]"
        />
      </ButtonQuoteFancyYellow>
      <ButtonQuoteFancyYellow name="Fondo" onClick={() => setTab("FONDO")} active={tab === "FONDO"}>
        <img
          src={iconBackgroundGenerator}
          alt="Icon background generator"
          className="w-[16px] h-[16px]"
        />
      </ButtonQuoteFancyYellow>
      <ButtonQuoteFancyYellow name="Texto" onClick={() => setTab("TEXTO")} active={tab === "TEXTO"}>
        <img
          src={iconTextGenerator}
          alt="Icon text generator"
          className="w-[16px] h-[16px]"
        />
      </ButtonQuoteFancyYellow>
    </>
  );
};

export default ButtonsContainer;
