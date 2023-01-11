//API KEY
const API_KEY = "e9dad997a4msh7bab9bb96da7387p1ebf3ejsn8152f1156853";
const API_KEY_HARRY_POTTER = "8Hr_b2Rx0mlkPLuTUAi6";

// API QUOTES
const HOST_QUOTE = "famous-quotes4.p.rapidapi.com";
const GET_RANDOM_QUOTES_URL = "https://famous-quotes4.p.rapidapi.com/random";
// API TRANSALATE
const HOST_TRANSLATE = "google-translate1.p.rapidapi.com";
const POST_TRANSLATE_URL =
  "https://google-translate1.p.rapidapi.com/language/translate/v2";
// API QuotesEs
const HOST_KEY_QUOTES_es = "quotes15.p.rapidapi.com";
const GET_RANDOM_QUOTEES_URL = "https://quotes15.p.rapidapi.com/quotes/random/";
// API Chuck Norris
const GET_RANDOM_NORRIS_URL = "https://api.chucknorris.io/jokes/random";
// API Marvel
const HOST_MARVEL = "marvel-quote-api.p.rapidapi.com";
const GET_RANDOM_MARVEL_URL = "https://marvel-quote-api.p.rapidapi.com/";
// API Ninja
const HOST_NINJA = "quotes-by-api-ninjas.p.rapidapi.com";
const GET_RANDOM_NINJA_URL =
  "https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes";
// API Donald Trump
const GET_RANDOM_TRUMP_URL =
  "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
// API AnimeChan
const GET_RANDOM_ANIMECHAN_URL = "https://animechan.vercel.app/api/random";
// API Breaking Bad
const GET_RANDOM_BREAKING_BAD_URL = "https://api.breakingbadquotes.xyz/v1/quotes";

const CONSTANTS = {
  API_QUOTE_OPTIONS: {
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
  API_TRANSLATE_OPTIONS: {
    POST_TRANSLATE: {
      method: "POST",
      url: POST_TRANSLATE_URL,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": HOST_TRANSLATE,
      },
    },
  },
  API_QUOTES_es: {
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
    GET_RANDOM_NORRIS: {
      method: "GET",
      url: GET_RANDOM_NORRIS_URL,
    },
  },
  API_MARVEL: {
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
    GET_RANDOM_TRUMP: {
      method: 'GET',
      url: GET_RANDOM_TRUMP_URL
    }
  },
  API_ANIMECHAN: {
    GET_RANDOM_ANIMECHAN: {
      method: 'GET',
      url: GET_RANDOM_ANIMECHAN_URL
    }
  },
  API_BREAKING_BAD: {
    GET_RANDOM_BREAKING_BAD: {
      method: 'GET',
      url: GET_RANDOM_BREAKING_BAD_URL
    }
  }
};

export default CONSTANTS;
