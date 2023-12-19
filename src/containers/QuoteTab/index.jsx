import React from "react";
import { Formik, Form, Field } from "formik";
import QuotesContainer from "../QuotesContainer";
import { useDispatch, useSelector } from "react-redux";
import QuotesSelectContainer from "../QuotesSelectContainer";
import {
  LabelPhraseQuote,
  LabelRepoQuote,
  WrapperAuthor,
  WrapperPhrase,
} from "./twinStyle";
import { setAuthor, setQuote } from "../../redux/sliders/quoteSlice";

const QuoteTab = () => {
  const dispatch = useDispatch();
  const authorInformation = useSelector((state) => state.quote.data);

  const handleQuoute = (event, handleChange) => {
    dispatch(setQuote(event.currentTarget.value));
    handleChange(event);
  };

  const handleAuthor = (event, handleChange) => {
    dispatch(setAuthor(event.currentTarget.value));
    handleChange(event);
  };

  return (
    <Formik
      initialValues={authorInformation}
    >
      {({ handleChange }) => (
        <Form className="flex flex-col gap-y-4">
          <LabelRepoQuote>Selecciona un tema para tu frase:</LabelRepoQuote>
          <div className="flex flex-wrap gap-3 content-start">
            <div className="hidden lg:flex flex-row flex-wrap gap-2">
              <QuotesContainer />
            </div>
            <div className="w-full text-base lg:hidden">
              <QuotesSelectContainer />
            </div>
          </div>
          <LabelPhraseQuote htmlFor="cita">
            Escriba su propia frase:
          </LabelPhraseQuote>
          <WrapperPhrase>
            <Field
              id="quote"
              name="quote"
              onChange={(e) => handleQuoute(e, handleChange)}
              placeholder="Su frase aqui"
              className="rounded w-full block bg-color-third text-color-lightGreen placeholder:text-color-lightGreen focus:outline-none focus:bg-white border border-gray-200 p-2"
            />
          </WrapperPhrase>
          <WrapperAuthor>
            <Field
              id="author"
              name="author"
              type="text"
              onChange={(e) => handleAuthor(e, handleChange)}
              placeholder="Ingrese el autor aqui"
              className="rounded w-full block bg-color-third text-color-lightGreen placeholder:text-color-lightGreen  focus:outline-none focus:bg-white border border-gray-200 p-2"
            />
          </WrapperAuthor>
        </Form>
      )}
    </Formik>
  );
};

export default QuoteTab;
