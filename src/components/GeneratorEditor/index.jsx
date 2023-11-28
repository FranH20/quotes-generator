import React, { useState } from "react";
import { ButtonBase } from "../../components/ButtonQuote";
import QuoteTab from "../../containers/QuoteTab";
import BackgroundTab from "../../containers/BackgroundTab";
import TextTab from "../../containers/TextTab";
import tw from "twin.macro";
import ButtonsContainer from "../../containers/ButtonsContainer";
import { CLASSNAME_GENERATOR_IMAGE } from "../../utils/constants/imageGenerator";
import { downloadImage } from "../../hooks/functionUtils";

const Wrapper = tw.section`w-full`;
const WrapperContainer = tw.article`
    grid 
    grid-cols-10 
    gap-y-5
`;

const handleTabsPage = (param) => {
  switch (param) {
    case "FONDO":
      return (
        <BackgroundTab
          className="row-start-2 col-start-1 col-end-11"
        />
      );
    case "TEXTO":
      return (
        <TextTab
          className="row-start-2 col-start-1 col-end-11"
        />
      );
    default:
      return (
        <QuoteTab
          className="row-start-2 col-start-1 col-end-11"
        />
      );
  }
};

const GeneratorEditor = ( ) => {
  
  const [tab, setTab] = useState('FRASE');

  const handleDownload = async () => {
    const divImage = document.querySelector(`.${CLASSNAME_GENERATOR_IMAGE}`);
    if (!divImage) return;
    await downloadImage(divImage);
  };

  return (
    <Wrapper>
      <WrapperContainer>
        <ButtonsContainer tab={tab} setTab={setTab} />
        {handleTabsPage(tab)}
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
