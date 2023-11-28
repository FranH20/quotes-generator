import {
  ButtonQuoteRed,
  ButtonQuoteYellow,
  ButtonQuoteBlue,
  ButtonQuoteGray,
  ButtonQuoteAmber,
  ButtonQuoteGreen,
  ButtonQuotePurple,
} from "../components/ButtonQuote";
import iconMarvel from "../assets/icons/marvel-icon.svg";
import iconChuckNorris from "../assets/icons/chuck-norris-icon.svg";
import iconFamous from "../assets/icons/famous-icon.svg";
import iconDonaldTrump from "../assets/icons/donald-trump-icon.svg";
import iconAnime from "../assets/icons/anime-icon.svg";
import iconBreakingBad from "../assets/icons/breaking-bad-icon.svg";
import iconQuoteEs from "../assets/icons/quote-es-icon.svg";
import {
  getQuoteNorris,
  getMarvel,
  getRandomNinja,
  getRandomTrump,
  getRandomAnimechan,
  getRandomBreakingBad,
  getQuoteEs,
} from "../hooks/fetchQuotes";
import PropTypes from "prop-types";
import useFetch from "../hooks/useFetch";
import APIENDPOINTS from "../hooks/apiEndpoints";
import { QuoteInSpanish } from "../hooks/quotesHooks";

const LogoButton = ({ img, name }) => (
  <img src={img} alt={`Button logo of ${name}`} className="w-5" />
);

const QuotesContainer = ({
  className,
  setQuote,
  quoteInformation,
  onLoading,
}) => {
  const stateLoading = (promise) => {
    onLoading(true);
    setQuote({});
    setTimeout(() => {
      promise
        .then((data) => setQuote(data))
        .then(onLoading(false))
        .catch((err) => onLoading(undefined));
    }, 2000);
  };

  const onPromiseQuoteOfTheDay = async () => {
    return await getQuoteEs();
  };

  const onPromiseBreakingBad = async () => {
    return await getRandomBreakingBad();
  };

  const onPromiseAnimeChan = async () => {
    return await getRandomAnimechan();
  };

  const onPromiseDonaldTrump = async () => {
    return await getRandomTrump();
  };

  const onPromiseFamousPeople = async () => {
    return await getRandomNinja();
  };

  const onPromiseChuckNorris = async () => {
    return await getQuoteNorris();
  };

  const onPromiseMarvel = async () => {
    return await getMarvel();
  };

  const onFetchQuoteOfTheDay = () => stateLoading(onPromiseQuoteOfTheDay());
  const onFetchBreakingBad = () => stateLoading(onPromiseBreakingBad());
  const onFetchAnimechan = () => stateLoading(onPromiseAnimeChan());
  const onFetchDonaldTrump = () => stateLoading(onPromiseDonaldTrump());
  const onFetchFamousPeople = () => stateLoading(onPromiseFamousPeople());
  const onFetchChuckNorris = () => stateLoading(onPromiseChuckNorris());
  const onFetchMarvel = () => stateLoading(onPromiseMarvel());

  return (
    <section className={className}>
      <ButtonQuoteRed name="Marvel" onClick={onFetchMarvel}>
        <LogoButton img={iconMarvel} name="Marvel" />
      </ButtonQuoteRed>
      <ButtonQuoteYellow name="Chuck Norris" onClick={onFetchChuckNorris}>
        <LogoButton img={iconChuckNorris} name="Chuck Norris" />
      </ButtonQuoteYellow>
      <ButtonQuoteBlue name="Famous People" onClick={onFetchFamousPeople}>
        <LogoButton img={iconFamous} name="Famous People" />
      </ButtonQuoteBlue>
      <ButtonQuoteGray name="Donald Trump" onClick={onFetchDonaldTrump}>
        <LogoButton img={iconDonaldTrump} name="Donald Trump" />
      </ButtonQuoteGray>
      <ButtonQuoteAmber name="Animechan" onClick={onFetchAnimechan}>
        <LogoButton img={iconAnime} name="Animechan" />
      </ButtonQuoteAmber>
      <ButtonQuoteGreen name="Breaking Bad" onClick={onFetchBreakingBad}>
        <LogoButton img={iconBreakingBad} name="Breaking Bad" />
      </ButtonQuoteGreen>
      <ButtonQuotePurple name="Quote of the day" onClick={onFetchQuoteOfTheDay}>
        <LogoButton img={iconQuoteEs} name="Quote of the day" />
      </ButtonQuotePurple>
    </section>
  );
};

QuotesContainer.propTypes = {
  className: PropTypes.string,
  setQuote: PropTypes.func,
  quoteInformation: PropTypes.func,
  onLoading: PropTypes.func,
};

LogoButton.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};

export default QuotesContainer;
