import {
  API_KEY,
  GET_RANDOM_QUOTES_URL,
  HOST_QUOTE,
  GET_RANDOM_QUOTEES_URL,
  HOST_KEY_QUOTES_es,
  GET_RANDOM_NORRIS_URL,
  GET_RANDOM_MARVEL_URL,
  HOST_MARVEL,
  GET_RANDOM_NINJA_URL,
  HOST_NINJA,
  GET_RANDOM_TRUMP_URL,
  GET_RANDOM_ANIMECHAN_URL,
  GET_RANDOM_BREAKING_BAD_URL,
  GET_QUOTES_VILLA_BY_CATEGORY,
  HOST_QUOTE_VILLA,
  
} from "./constants";

const APIENDPOINTS = {
  API_QUOTE_OPTIONS: {
    NAME: "Daily quotes",
    GET_RANDOM_QUOTES: {
      method: "GET",
      url: GET_RANDOM_QUOTES_URL,
      params: {
        category: "all",
        count: "1",
      },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": HOST_QUOTE,
      },
    },
  },
  API_QUOTES_es: {
    NAME: "Quotes en español",
    GET_RANDOM_QUOTE: {
      method: "GET",
      url: GET_RANDOM_QUOTEES_URL,
      params: { language_code: "es" },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": HOST_KEY_QUOTES_es,
      },
    },
  },
  API_CHUCK_NORRIS: {
    NAME: "Chuck Norris",
    GET_RANDOM_NORRIS: {
      method: "GET",
      url: GET_RANDOM_NORRIS_URL,
    },
  },
  API_MARVEL: {
    NAME: "Marvel",
    GET_RANDOM_MARVEL: {
      method: "GET",
      url: GET_RANDOM_MARVEL_URL,
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": HOST_MARVEL,
      },
    },
  },
  API_NINJA: {
    NAME: "Famous quotes",
    GET_RANDOM_NINJA: {
      method: "GET",
      url: GET_RANDOM_NINJA_URL,
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": HOST_NINJA,
      },
    },
  },
  API_TRUMP: {
    NAME: "Donald Trump",
    GET_RANDOM_TRUMP: {
      method: "GET",
      url: GET_RANDOM_TRUMP_URL,
    },
  },
  API_ANIMECHAN: {
    NAME: "Anime",
    GET_RANDOM_ANIMECHAN: {
      method: "GET",
      url: GET_RANDOM_ANIMECHAN_URL,
    },
  },
  API_BREAKING_BAD: {
    NAME: "Breaking Bad",
    GET_RANDOM_BREAKING_BAD: {
      method: "GET",
      url: GET_RANDOM_BREAKING_BAD_URL,
    },
  },
  API_VILLA: {
    NAME: "Quotes Villa",
    GET_QUOTES_BY_CATEGORY: {
      method: "GET",
      url: GET_QUOTES_VILLA_BY_CATEGORY,
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": HOST_QUOTE_VILLA,
      },
    },
  },
};

export default APIENDPOINTS;
