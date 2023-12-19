import axios from "axios";
import APIENDPOINTS from "./apiEndpoints";
import { getJsonValues } from "./functionUtils";
import {
  transformDataAnimechanQuote,
  transformDataBreakingBadQuote,
  transformDataChuckNorrisQuote,
  transformDataDonaldTrumpQuote,
  transformDataMarvelQuote,
  transformDataOfQuoteInSpanish,
  transformDataRandomNinjaQuote,
} from "../utils/functions/transformData";

export const getQuotes = async (setData) => {
  await axios(APIENDPOINTS.API_QUOTE_OPTIONS.GET_RANDOM_QUOTES).then(
    (response) => setData(response.data[0])
  );
};

export const postTranslate = async (textConfiguration, setTranslate) => {
  await axios({
    ...APIENDPOINTS.API_TRANSLATE_OPTIONS.POST_TRANSLATE,
    data: textConfiguration,
  }).then((response) =>
    setTranslate((translate) => {
      console.log("Response:", response.data);
      const body = {
        text: "response.data.translations[0].translatedText",
        author: translate.author,
      };
      console.log(body);
      return body;
    })
  );
};

export const getQuoteEs = () => {
  const data = axios(APIENDPOINTS.API_QUOTES_es.GET_RANDOM_QUOTE).then(
    (response) => transformDataOfQuoteInSpanish(response)
  );
  return data;
};

export const getQuoteEs2 = () =>
  axios(APIENDPOINTS.API_QUOTES_es, APIENDPOINTS.API_QUOTES_es).then(
    (response) => {
      const { content, originator } = response.data;
      return getJsonValues(content, originator.name);
    }
  );

export const getQuoteNorris =  () => {
  const data =  axios(
    APIENDPOINTS.API_CHUCK_NORRIS.GET_RANDOM_NORRIS
  ).then((response) => transformDataChuckNorrisQuote(response));
  return data;
};

export const getMarvel = async () => {
  const data = await axios(APIENDPOINTS.API_MARVEL.GET_RANDOM_MARVEL).then(
    (response) => transformDataMarvelQuote(response)
  );
  return data;
};

export const getRandomNinja =  () => {
  const data =  axios(APIENDPOINTS.API_NINJA.GET_RANDOM_NINJA).then(
    (response) => transformDataRandomNinjaQuote(response)
  );
  return data;
};

export const getRandomTrump = () => {
  const data =  axios(APIENDPOINTS.API_TRUMP.GET_RANDOM_TRUMP).then(
    (response) => transformDataDonaldTrumpQuote(response)
  );
  return data;
};

export const getRandomAnimechan =  () => {
  const data =  axios(
    APIENDPOINTS.API_ANIMECHAN.GET_RANDOM_ANIMECHAN
  ).then((response) => transformDataAnimechanQuote(response));
  return data;
};

export const getRandomBreakingBad =  () => {
  const data =  axios(
    APIENDPOINTS.API_BREAKING_BAD.GET_RANDOM_BREAKING_BAD
  ).then((response) => transformDataBreakingBadQuote(response));
  return data;
};

export const getQuotesByCategoryVilla = async (category = "science") => {
  const url = `${APIENDPOINTS.API_VILLA.GET_QUOTES_BY_CATEGORY.url}/${category}`;
  const response = await axios({
    ...APIENDPOINTS.API_VILLA.GET_QUOTES_BY_CATEGORY,
    url: url,
  });
  return response.data ?? [];
};
