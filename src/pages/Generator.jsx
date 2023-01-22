import React, { useEffect, useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import { ButtonBase, ButtonQuote } from "../components/ButtonQuote";
import iconQuoteGenerator from "../assets/quote-generator-image.svg";
import iconBackgroundGenerator from "../assets/paintbrush-fill-image.svg";
import iconTextGenerator from "../assets/text-configuration-image.svg";
import { downloadImage } from "../hooks/functionUtils";
import QuotesContainer from "../containers/QuotesContainer";
import * as Yup from "yup";
import Title from "../components/Title";
import { ErrorMessage } from "../components/ErrorMessage";

const QuoteSchema = Yup.object().shape({
  text: Yup.string().required("Requerido"),
  author: Yup.string().required("Requerido"),
});

const Generator = () => {
  const buttonRef = useRef();
  const divImage = useRef();
  const [quote, setQuote] = useState({
    text: "Aqui estara tu frase.",
    author: "- Anónimo",
  });
  useEffect(() => {
    buttonRef.current.type = "submit";
  }, []);

  const handleSubmit = (values) => {
    setQuote(values);
  };

  const handleDownload = async () => {
    const divImage = document.querySelector(".div-image-quote");
    if (!divImage) return;
    await downloadImage(divImage);
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
            />
            <ButtonBase
              name="Horizontal"
              className="bg-color-secondary px-5 text-white font-bold border hover:bg-color-third"
            />
            <ButtonBase
              name="Vertical"
              className="bg-color-secondary px-5 text-white font-bold border hover:bg-color-third"
            />
          </article>
          <article className="relative inline-block overflow-hidden">
            <div
              ref={divImage}
              className="div-image-quote overflow-hidden"
              style={{ width: "640px", height: "640px" }}
            >
              <div className="bg-background-image-generator absolute w-full h-full bg-cover"></div>
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
            />
            <ButtonQuote
              name="Fondo"
              className="row-start-1 col-start-5 col-end-7 hover:bg-color-fourth flex-col"
              img={iconBackgroundGenerator}
              classImage="w-10"
            />
            <ButtonQuote
              name="Texto"
              className="row-start-1 col-start-8 col-end-10 hover:bg-color-fourth flex-col"
              img={iconTextGenerator}
              classImage="w-10"
            />
            <main className="row-start-2 col-start-1 col-end-11 grid grid-cols-10">
              <Formik
                initialValues={{ text: "", author: "" }}
                validationSchema={QuoteSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form className="row-start-1 col-start-1 col-end-11 grid grid-cols-10 grid-rows-10 gap-y-4">
                    <label className="row-start-1 col-start-2 col-end-10 text-l">
                      Selecciona un tema para tu frase:
                    </label>
                    <QuotesContainer
                      className="row-start-2 col-start-2 col-end-10 flex flex-wrap gap-3 content-start"
                      setQuote={setQuote}
                    />
                    <label
                      htmlFor="cita"
                      className="row-start-4 col-start-2 col-end-10 text-l"
                    >
                      Escriba su propia frase:
                    </label>
                    <div className="row-start-5 col-start-2 col-end-10">
                      <Field
                        id="text"
                        name="text"
                        placeholder="Su frase aqui"
                        className="rounded w-full block bg-gray-200 text-gray-700 focus:outline-none focus:bg-white border border-gray-200 p-2"
                      />
                      {errors.text && touched.text ? (
                        <ErrorMessage error={errors.text} />
                      ) : null}
                    </div>
                    <div className="row-start-6 col-start-2 col-end-10 ">
                      <Field
                        id="author"
                        name="author"
                        type="text"
                        placeholder="Ingrese el autor aqui"
                        className="rounded w-full block bg-gray-200 text-gray-700 focus:outline-none focus:bg-white border border-gray-200 p-2"
                      />
                      {errors.author && touched.author ? (
                        <ErrorMessage error={errors.author} />
                      ) : null}
                    </div>
                    <ButtonBase
                      ref={buttonRef}
                      name="Agregar"
                      className="row-start-7 col-start-2 col-end-10 bg-color-secondary text-white hover:bg-color-third"
                    />
                  </Form>
                )}
              </Formik>
            </main>
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
