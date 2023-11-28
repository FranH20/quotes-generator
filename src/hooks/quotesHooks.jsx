import useFetch from "./useFetch";
import APIENDPOINTS from "./apiEndpoints";
import { transformDataOfQuoteInSpanish } from "../utils/functions/transformData";

export const QuoteInSpanish = () => {
  const callback = transformDataOfQuoteInSpanish();
  let { data, error, loading } = useFetch(
    APIENDPOINTS.API_QUOTES_es.GET_RANDOM_QUOTE,
    callback
  );
  return { data, error, loading };
};
