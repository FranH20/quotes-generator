import { getQuotesByCategoryVilla } from "../../hooks/fetchQuotes";

export const SEARCH_QUOTES_LOADING = "SEARCH_QUOTES_LOADING";
export const SEARCH_QUOTES_SUCCESS = "SEARCH_QUOTES_SUCCESS";
export const SEARCH_QUOTES_ERROR = "SEARCH_QUOTES_ERROR";
export const ADD_PAGINATION = "ADD_PAGINATION";

const searchQuotesLoading = () => ({
  type: SEARCH_QUOTES_LOADING,
});

const searchQuotesSuccess = (payload, size, category) => ({
  type: SEARCH_QUOTES_SUCCESS,
  payload,
  size,
  category,
});

const searchQuotesError = (error) => ({
  type: SEARCH_QUOTES_ERROR,
  error,
});

const addQuotePagination = (pagination) => ({
  type: ADD_PAGINATION,
  pagination,
});

export const searchQuotes = (category) => async (dispatch) => {
  try {
    dispatch(searchQuotesLoading());
    const quotes = await getQuotesByCategoryVilla(category);
    dispatch(searchQuotesSuccess(quotes, quotes.length, category));
  } catch (error) {
    console.log(error);
    dispatch(searchQuotesError());
  }
};

export const nextPagination = (pagination, size) => (dispatch) => {
  let start = pagination.start + 10;
  let end = pagination.end + 10;
  if (start <= size && end >= 0) {
    const pagination = {
      start,
      end
    };
    dispatch(addQuotePagination(pagination));
  }
};

export const lastPagination = (pagination, size) => (dispatch) => {
  let start = pagination.start - 10;
  let end = pagination.end - 10;
  if (start >= 0 && end >= 0) {
    const pagination = {
      start,
      end
    };
    dispatch(addQuotePagination(pagination));
  }
}