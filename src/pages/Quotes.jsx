import { Field, Form, Formik } from "formik";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonBase } from "../components/ButtonQuote";
import QuoteContainer from "../components/QuoteContainer";
import { searchQuotes } from "../redux/actions/initial-actions";
import {
  getQuotesLoading,
  getQuotesData,
  getQuotesError,
  getQuotesPagination,
  getQuoteCategory
} from "../redux/selectors";
import { CATEGORIES } from "../hooks/constants";
import Title from "../components/Title";
import * as Yup from "yup";
import { ErrorMessage } from "../components/ErrorMessage";
import Spinner from "../components/Spinner";

const FormSchema = Yup.object().shape({
  category: Yup.string().required("Se require una categoria"),
});

const Quotes = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector(getQuotesData);
  const isLoading = useSelector(getQuotesLoading);
  const pagination = useSelector(getQuotesPagination);
  const category = useSelector(getQuoteCategory);
  const buttonSubmit = useRef();

  useEffect(() => {
    buttonSubmit.current.type = "submit";
    dispatch(searchQuotes("science"));
  }, []);

  const handleSubmit = (values) => {
    dispatch(searchQuotes(values.category));
  };

  const ButtonsContainer = () => {
    return (
      <>
        <ButtonBase
          name="Anterior"
          className="bg-color-secondary text-white hover:bg-color-third"
        />
        <ButtonBase
          name="Siguiente"
          className="bg-color-secondary text-white hover:bg-color-third"
        />
      </>
    );
  };

  return (
    <>
      <Title name={`Listado de frases por "${category}"`} />
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="py-5">
          <main className="grid grid-cols-4 gap-x-10">
            <aside className="col-start-0 col-end-2">
              <Formik
                initialValues={{ category: "" }}
                validationSchema={FormSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form>
                    <h2 className="text-xl pb-8">Filtros para la busqueda:</h2>
                    <div className="grid grid-cols-2 pb-4">
                      {CATEGORIES.map((item, index) => (
                        <label
                          key={index}
                          className="flex gap-x-2 cursor-pointer"
                        >
                          <Field
                            id="category"
                            name="category"
                            type="radio"
                            value={item}
                            className="w-4 accent-color-primary cursor-pointer"
                          />
                          <h5 className="capitalize">{item}</h5>
                        </label>
                      ))}
                    </div>
                    {errors.category && touched.category ? (
                      <ErrorMessage error={errors.category} />
                    ) : null}
                    <ButtonBase
                      ref={buttonSubmit}
                      name="Buscar"
                      className="bg-color-primary text-white  hover:bg-fuchsia-800 w-full"
                    />
                  </Form>
                )}
              </Formik>
            </aside>
            <aside className="col-start-2 col-end-5">
              <header className="flex justify-end gap-x-5">
                <ButtonsContainer />
              </header>
              <main>
                {searchResults
                  .slice(pagination.start, pagination.end)
                  .map((item, index) => (
                    <QuoteContainer
                      key={index}
                      text={item.text}
                      author={item.author}
                    />
                  ))}
              </main>
            </aside>
          </main>
          <footer className="flex justify-end gap-x-5">
            <ButtonsContainer />
          </footer>
        </section>
      )}
    </>
  );
};

export default Quotes;
