import React, { useState } from "react";
import { ButtonBase } from "../../components/ButtonQuote";
import ButtonsContainer from "../../containers/ButtonsContainer";
import { CLASSNAME_GENERATOR_IMAGE } from "../../utils/constants/imageGenerator";
import { downloadImage } from "../../hooks/functionUtils";
import {
  BodyTabContainer,
  OptionsTabContainer,
  Wrapper,
  WrapperContainer,
} from "./twinStyle";
import BackgroundTab from "../../containers/BackgroundTab";
import TextTab from "../../containers/TextTab";
import QuoteTab from "../../containers/QuoteTab";
import toast, { Toaster } from "react-hot-toast";

const handleTabsPage = (param) => {
  switch (param) {
    case "FONDO":
      return <BackgroundTab />;
    case "TEXTO":
      return <TextTab />;
    default:
      return <QuoteTab />;
  }
};

const GeneratorEditor = () => {
  const [tab, setTab] = useState("FRASE");

  const handleDownload = async () => {
    const divImage = document.querySelector(`.${CLASSNAME_GENERATOR_IMAGE}`);
    if (!divImage) return;
    await downloadImage(divImage)
      .then(() => toast.success("Descarga completa"))
      .catch(() => toast.error("Error durante la descarga"));
  };

  return (
    <Wrapper>
      <WrapperContainer>
        <OptionsTabContainer>
          <ButtonsContainer setTab={setTab} tab={tab} />
        </OptionsTabContainer>
        <BodyTabContainer>{handleTabsPage(tab)}</BodyTabContainer>
        <ButtonBase
          name="Descargar"
          className="border-0 bg-color-fourth text-color-greenLight font-bold hover:bg-color-primary"
          onClick={handleDownload}
        />
      </WrapperContainer>
      <Toaster />
    </Wrapper>
  );
};

export default GeneratorEditor;
