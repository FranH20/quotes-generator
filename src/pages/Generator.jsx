import React, { useEffect, useRef, useState } from "react";
import backGroundExample from "../assets/background-example.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ButtonBase, ButtonQuote } from "../components/ButtonQuote";
import iconQuoteGenerator from "../assets/quote-generator-image.svg";
import iconBackgroundGenerator from "../assets/paintbrush-fill-image.svg";
import iconTextGenerator from "../assets/text-configuration-image.svg";

const Generator = () => {
  const buttonRef = useRef();
  const [quote, setQuote] = useState({});
  useEffect(() => {
    buttonRef.current.type = "submit";
  }, []);
  const handleSubmit = (values) => {
    console.log(values);
    setQuote(values);
  };
  return (
    <>
      <h1 className="text-3xl font-bold">Generador</h1>
      <aside className="flex">
        <section className="bg-green-200">
          <article className="relative inline-block">
            <div style={{ width: "640px", height: "640px" }}>
              <div className="bg-background-image-generator absolute w-full h-full bg-cover"></div>
              <p className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-1/2">
                {quote.text}
              </p>
              <span className="absolute left-2/4 top-3/4 -translate-x-2/4 ">
                {quote.author}
              </span>
            </div>
          </article>
        </section>
        <section className="flex-1">
          <Formik
            initialValues={{ text: "", author: "" }}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="grid grid-cols-10 grid-rows-10 gap-y-4">
                <ButtonQuote
                  name="Frase"
                  className="col-start-2 col-end-4 border border-color-primary hover:bg-color-fourth"
                  img={iconQuoteGenerator}
                />
                <ButtonQuote
                  name="Fondo"
                  className="col-start-5 col-end-7 border border-color-primary hover:bg-color-fourth"
                  img={iconBackgroundGenerator}
                />
                <ButtonQuote
                  name="Texto"
                  className="col-start-8 col-end-10 border border-color-primary hover:bg-color-fourth"
                  img={iconTextGenerator}
                />
                <label className="text-l row-start-2 col-start-2 col-end-10">
                  Selecciona un tema para tu frase:
                </label>
                <Field
                  id="cita-generador"
                  name="cita-generador"
                  as="select"
                  className="row-start-3 col-start-2 col-end-10 rounded block bg-gray-200 text-gray-700 focus:outline-none focus:bg-white border border-gray-200 p-1"
                />
                <ButtonBase
                  name="Generar"
                  className="row-start-4 col-start-2 col-end-10 bg-color-secondary text-white hover:bg-color-third"
                />
                <label
                  htmlFor="cita"
                  className="row-start-5 col-start-2 col-end-10"
                >
                  Escriba su propia frase:
                </label>
                <Field
                  id="text"
                  name="text"
                  placeholder="Su frase aqui"
                  className="row-start-6 col-start-2 col-end-10 rounded block bg-gray-200 text-gray-700 focus:outline-none focus:bg-white border border-gray-200 p-2"
                />
                <Field
                  id="author"
                  name="author"
                  type="text"
                  placeholder="Ingrese el autor aqui"
                  className="row-start-7 col-start-2 col-end-10 rounded block bg-gray-200 text-gray-700 focus:outline-none focus:bg-white border border-gray-200 p-2"
                />
                <ButtonBase
                  ref={buttonRef}
                  name="Agregar"
                  className="row-start-8 col-start-2 col-end-10 bg-color-secondary text-white hover:bg-color-third"
                />
              </Form>
            )}
          </Formik>
        </section>
      </aside>
    </>
  );
};

export default Generator;
