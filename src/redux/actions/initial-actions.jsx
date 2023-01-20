import { getQuotesByCategoryVilla } from "../../hooks/fetchQuotes";

export const SEARCH_QUOTES_LOADING = "SEARCH_QUOTES_LOADING";
export const SEARCH_QUOTES_SUCCESS = "SEARCH_QUOTES_SUCCESS";
export const SEARCH_QUOTES_ERROR = "SEARCH_QUOTES_ERROR";

const searchQuotesLoading = () => ({
  type: SEARCH_QUOTES_LOADING,
});

const searchQuotesSuccess = (payload, size, category) => ({
  type: SEARCH_QUOTES_SUCCESS,
  payload,
  size,
  category
});

const searchQuotesError = (error) => ({
  type: SEARCH_QUOTES_ERROR,
  error,
});

export const searchQuotes = (category) => async (dispatch) => {
    try {
        dispatch(searchQuotesLoading())
        const quotes = await getQuotesByCategoryVilla(category);
        dispatch(searchQuotesSuccess(quotes, quotes.length, category))
    } catch (error) {
        console.log(error)
        dispatch(searchQuotesError());
    }
};
