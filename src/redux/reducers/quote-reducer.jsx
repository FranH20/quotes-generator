import {
  GET_QUOTE_INFORMATION,
  ADD_QUOTE_INFORMATION,
} from "../actions/quote-actions";

const initialState = {
  text: "Aqui estara tu frase",
  author: "",
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUOTE_INFORMATION:
      return { ...state };
    case ADD_QUOTE_INFORMATION:
      return { ...state, text: action.text, author: action.author };
    default:
      return state;
  }
};

export default quoteReducer;
