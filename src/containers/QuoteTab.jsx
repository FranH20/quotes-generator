import React, { useEffect, useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import QuotesContainer from "../containers/QuotesContainer";
import { ButtonBase } from "../components/ButtonQuote";
import { ErrorMessage } from "../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { getQuoteData } from "../redux/selectors";
import { getQuote } from "../redux/actions/quote-actions";

const QuoteSchema = Yup.object().shape({
  text: Yup.string().required("Requerido"),
  author: Yup.string().required("Requerido"),
});

const QuoteTab = ({ handleSubmit, className }) => {
  const buttonRef = useRef();
  const dispatch = useDispatch();
  const authorInformation = useSelector(getQuoteData);
  const [quote, setQuote] = useState();

  useEffect(() => {
    dispatch(getQuote);
    buttonRef.current.type = "submit";
  }, []);

  return (
    <Formik
      initialValues={{ text: "", author: "" }}
      validationSchema={QuoteSchema}
      onSubmit={() => {}}
    >
      {({ errors, touched }) => (
        <Form className={`${className} grid grid-cols-10 grid-rows-10 gap-y-4`}>
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
  );
};

export default QuoteTab;
