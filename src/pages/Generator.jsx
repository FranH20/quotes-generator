import React, { useRef, useState } from "react";
import { ButtonBase, ButtonQuote } from "../components/ButtonQuote";
import iconQuoteGenerator from "../assets/quote-generator-image.svg";
import iconBackgroundGenerator from "../assets/paintbrush-fill-image.svg";
import iconTextGenerator from "../assets/text-configuration-image.svg";
import { downloadImage } from "../hooks/functionUtils";
import Title from "../components/Title";
import QuoteTab from "../containers/QuoteTab";
import BackgroundTab from "../containers/BackgroundTab";
import TextTab from "../containers/TextTab";

const Generator = () => {
  const divContainerImage = useRef();

  const [quote, setQuote] = useState({
    text: "Aqui estara tu frase.",
    author: "Anónimo",
  });
  const [tabs, setTabs] = useState("FRASE");

  const handleSubmit = (values) => {
    setQuote(values);
  };

  const handleDownload = async () => {
    const divImage = document.querySelector(".div-image-quote");
    if (!divImage) return;
    await downloadImage(divImage);
  };

  const handleSizeImage = (w = "640px", h = "640px") => {
    divContainerImage.current.style.width = w;
    divContainerImage.current.style.height = h;
  };

  const handleTabsPage = (param) => {
    switch (param) {
      case "FRASE":
        return (
          <QuoteTab
            handleSubmit={handleSubmit}
            setQuote={setQuote}
            className="row-start-2 col-start-1 col-end-11"
          />
        );
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
    <>
      <Title name="Genera tu frase aqui" />
      <aside className="flex pb-5">
        <section className="flex flex-col gap-y-5">
          <article className="flex justify-around">
            <ButtonBase
              name="Cuadrado"
              className="bg-color-secondary px-5 text-white font-bold border hover:bg-color-third"
              onClick={() => handleSizeImage("640px", "640px")}
            />
            <ButtonBase
              name="Horizontal"
              className="bg-color-secondary px-5 text-white font-bold border hover:bg-color-third"
              onClick={() => handleSizeImage("600px", "400px")}
            />
            <ButtonBase
              name="Vertical"
              className="bg-color-secondary px-5 text-white font-bold border hover:bg-color-third"
              onClick={() => handleSizeImage("600px", "750px")}
            />
          </article>
          <article className="relative inline-block overflow-hidden">
            <div
              ref={divContainerImage}
              className="div-image-quote overflow-hidden transition-all"
              style={{ width: "640px", height: "640px" }}
            >
              <div className="div-image-generator bg-background-image-generator absolute w-full h-full bg-cover"></div>
              <div className="absolute left-2/4 top-[45%] -translate-x-2/4 -translate-y-1/2 w-full px-8">
                <p className="text-5xl text-center">{quote.text}</p>
              </div>
              <span className="absolute left-2/4 top-[85%] -translate-x-2/4 text-2xl">
                {quote.author}
              </span>
            </div>
          </article>
        </section>
        <section className="flex-1">
          <article className="grid grid-cols-10 gap-y-5">
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
          </article>
        </section>
      </aside>
    </>
  );
};

export default Generator;
