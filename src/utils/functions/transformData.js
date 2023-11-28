import { getJsonValues } from "../../hooks/functionUtils";

export const transformDataOfQuoteInSpanish = (response = {}) => {
  const { content, originator } = response?.data || {};
  return getJsonValues(content, originator?.name);
};

export const transformDataBreakingBadQuote = (response = {}) => {
  const { author, quote } = response?.data[0] || {};
  return getJsonValues(quote, author);
};

export const transformDataAnimechanQuote = (response = {}) => {
  const { character, anime, quote } = response?.data || {};
  return getJsonValues(`${quote} (${anime})`, character);
};

export const transformDataDonaldTrumpQuote = (response = {}) => {
  return getJsonValues(response?.data?.message, "Donald Trump");
};

export const transformDataRandomNinjaQuote = (response = {}) => {
  const { quote, author } = response?.data[0] || {};
  return getJsonValues(quote, author);
};

export const transformDataChuckNorrisQuote = (response = {}) => {
  const { value } = response?.data || {};
  return getJsonValues(value, "Chuck Norris");
};

export const transformDataMarvelQuote = (response = {}) => {
  const { Quote, Speaker } = data?.data || {};
  return getJsonValues(Quote, Speaker);
};
