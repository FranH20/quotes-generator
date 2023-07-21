import React, { useState } from "react";
import { ButtonBase, ButtonQuote } from "../../components/ButtonQuote";
import iconQuoteGenerator from "../../assets/quote-generator-image.svg";
import iconBackgroundGenerator from "../../assets/paintbrush-fill-image.svg";
import iconTextGenerator from "../../assets/text-configuration-image.svg";
import QuoteTab from "../../containers/QuoteTab";
import BackgroundTab from "../../containers/BackgroundTab";
import TextTab from "../../containers/TextTab";
import tw from "twin.macro";

const Wrapper = tw.section``
const WrapperContainer = tw.article`
    grid 
    grid-cols-10 
    gap-y-5
`
const GeneratorEditor = ( { handleSubmit }) => {
  const [tabs, setTabs] = useState("FRASE");

  const handleDownload = async () => {
    const divImage = document.querySelector(".div-image-quote");
    if (!divImage) return;
    await downloadImage(divImage);
  };


  const handleTabsPage = (param) => {
    switch (param) {
      case "FONDO":
        return (
          <BackgroundTab
            className="row-start-2 col-start-1 col-end-11"
            divContainerImage={divContainerImage}
          />
        );
      case "TEXTO":
        return (
          <TextTab
            className="row-start-2 col-start-1 col-end-11"
            divContainerImage={divContainerImage}
          />
        );
      default:
        return (
          <QuoteTab
            handleSubmit={handleSubmit}
            setQuote={setQuote}
            className="row-start-2 col-start-1 col-end-11"
          />
        );
    }
  };

  return (
    <Wrapper>
      <WrapperContainer>
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
        {handleTabsPage(tabs)}
        <ButtonBase
          name="Descargar"
          className="row-start-3 row-end-4 col-start-2 col-end-10 border-0 bg-color-primary text-white font-bold hover:bg-fuchsia-800"
          onClick={handleDownload}
        />
      </WrapperContainer>
    </Wrapper>
  );
};

export default GeneratorEditor;
