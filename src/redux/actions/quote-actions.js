export const GET_QUOTE_INFORMATION = "GET_QUOTE_INFORMATION";
export const ADD_QUOTE_INFORMATION = "ADD_QUOTE_INFORMATION";

const getQuoteInformation = () => ({
  type: GET_QUOTE_INFORMATION,
});

const addQuoteInformation = (quote) => ({
  type: ADD_QUOTE_INFORMATION,
  author: quote.author,
  text: quote.text,
});

export const getQuote = () => (dispatch) => dispatch(getQuoteInformation());

export const addQuote = (quote) => (dispatch) =>
  dispatch(addQuoteInformation(quote));
