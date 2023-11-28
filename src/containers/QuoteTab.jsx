import React, { useEffect, useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import QuotesContainer from "../containers/QuotesContainer";
import { ButtonBase } from "../components/ButtonQuote";
import { ErrorMessage } from "../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { getQuoteData } from "../redux/selectors";
import { addQuote, getQuote } from "../redux/actions/quote-actions";
import tw from "twin.macro";
import { Label } from "../components/Label";

const QuoteSchema = Yup.object().shape({
  text: Yup.string().required("Requerido"),
  author: Yup.string().required("Requerido"),
});

const LabelRepoQuote = tw(Label)`
  row-start-1 
  col-start-2 
  col-end-10
`;
const LabelPhraseQuote = tw(Label)`
  row-start-4 
  col-start-2 
  col-end-10
`;

const WrapperPhrase = tw.div`
  row-start-5 
  col-start-2 
  col-end-10
`;
const WrapperAuthor = tw.div`
  row-start-6 
  col-start-2 
  col-end-10
`;

const QuoteTab = ({ className }) => {
  const buttonRef = useRef();
  const dispatch = useDispatch();
  const authorInformation = useSelector(getQuoteData);

  useEffect(() => {
    dispatch(getQuote);
    buttonRef.current.type = "submit";
  }, []);

  return (
    <Formik
      initialValues={ authorInformation }
      validationSchema={QuoteSchema}
      onSubmit={(values) => { dispatch(addQuote(values)) }}
    >
      {({ errors, touched }) => (
        <Form className={`${className} grid grid-cols-10 grid-rows-10 gap-y-4`}>
          <LabelRepoQuote>Selecciona un tema para tu frase:</LabelRepoQuote>
          <QuotesContainer
            className="row-start-2 col-start-2 col-end-10 flex flex-wrap gap-3 content-start"
          />
          <LabelPhraseQuote htmlFor="cita">
            Escriba su propia frase:
          </LabelPhraseQuote>
          <WrapperPhrase>
            <Field
              id="text"
              name="text"
              placeholder="Su frase aqui"
              className="rounded w-full block bg-gray-200 text-gray-700 focus:outline-none focus:bg-white border border-gray-200 p-2"
            />
            {errors.text && touched.text ? (
              <ErrorMessage error={errors.text} />
            ) : null}
          </WrapperPhrase>
          <WrapperAuthor>
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
          </WrapperAuthor>
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
