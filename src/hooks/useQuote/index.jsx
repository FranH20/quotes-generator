import { useDispatch } from "react-redux";
import { fetchQuote } from "../../redux/sliders/thunks";
import {
  getMarvel,
  getQuoteEs,
  getQuoteNorris,
  getRandomAnimechan,
  getRandomBreakingBad,
  getRandomNinja,
  getRandomTrump,
} from "../fetchQuotes";

export const useQuote = () => {
  const dispatch = useDispatch();

  const onFetchQuoteOfTheDay = () => dispatch(fetchQuote(getQuoteEs()));
  const onFetchBreakingBad = () => dispatch(fetchQuote(getRandomBreakingBad()));
  const onFetchAnimechan = () => dispatch(fetchQuote(getRandomAnimechan()));
  const onFetchDonaldTrump = () => dispatch(fetchQuote(getRandomTrump()));
  const onFetchFamousPeople = () => dispatch(fetchQuote(getRandomNinja()));
  const onFetchChuckNorris = () => dispatch(fetchQuote(getQuoteNorris()));
  const onFetchMarvel = () => dispatch(fetchQuote(getMarvel()));

  return {
    onFetchQuoteOfTheDay,
    onFetchBreakingBad,
    onFetchAnimechan,
    onFetchDonaldTrump,
    onFetchFamousPeople,
    onFetchChuckNorris,
    onFetchMarvel,
  };
};
