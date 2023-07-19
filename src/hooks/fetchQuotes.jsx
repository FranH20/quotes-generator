import axios from "axios";
import APIENDPOINTS from "./apiEndpoints";
import { getJsonValues } from "./functionUtils";

export const getQuotes = async (setQuote) => {
  await axios(APIENDPOINTS.API_QUOTE_OPTIONS.GET_RANDOM_QUOTES).then(
    (response) => setQuote(response.data[0])
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

export const getQuoteEs = async (setQuoteEs) => {
  await axios(APIENDPOINTS.API_QUOTES_es.GET_RANDOM_QUOTE).then((response) => {
    const { content, originator } = response.data;
    return setQuoteEs(getJsonValues(content, originator.name));
  });
};

export const getQuoteEs2 = () =>
  axios(APIENDPOINTS.API_QUOTES_es, APIENDPOINTS.API_QUOTES_es).then(
    (response) => {
      const { content, originator } = response.data;
      return getJsonValues(content, originator.name);
    }
  );

export const getQuoteNorris = async (setNorris) => {
  await axios(APIENDPOINTS.API_CHUCK_NORRIS.GET_RANDOM_NORRIS).then(
    (response) => {
      const { value } = response.data;
      return setNorris(getJsonValues(value, "Chuck Norris"));
    }
  );
};

export const getMarvel = async (setMarvel) => {
  await axios(APIENDPOINTS.API_MARVEL.GET_RANDOM_MARVEL).then((response) => {
    const { Quote, Speaker } = response.data;
    return setMarvel(getJsonValues(Quote, Speaker));
  });
};

export const getRandomNinja = async (setNinja) => {
  await axios(APIENDPOINTS.API_NINJA.GET_RANDOM_NINJA).then((response) => {
    const { quote, author } = response.data[0];
    return setNinja(getJsonValues(quote, author));
  });
};

export const getRandomTrump = async (setTrump) => {
  await axios(APIENDPOINTS.API_TRUMP.GET_RANDOM_TRUMP).then((response) =>
    setTrump(getJsonValues(response.data.message, "Donald Trump"))
  );
};

export const getRandomAnimechan = async (setAnime) => {
  await axios(APIENDPOINTS.API_ANIMECHAN.GET_RANDOM_ANIMECHAN).then(
    (response) => {
      const { character, anime, quote } = response.data;
      return setAnime(getJsonValues(`${quote} (${anime})`, character));
    }
  );
};

export const getRandomBreakingBad = async (setBreakingBad) => {
  await axios(APIENDPOINTS.API_BREAKING_BAD.GET_RANDOM_BREAKING_BAD).then(
    (response) => {
      const { author, quote } = response.data[0];
      return setBreakingBad(getJsonValues(quote, author));
    }
  );
};

export const getQuotesByCategoryVilla = async (category = "science") => {
  const url = `${APIENDPOINTS.API_VILLA.GET_QUOTES_BY_CATEGORY.url}/${category}`;
  const response = await axios({
    ...APIENDPOINTS.API_VILLA.GET_QUOTES_BY_CATEGORY,
    url: url,
  });
  return response.data ?? [];
};
