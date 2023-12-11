import { ButtonQuoteFancyYellow } from "../../components/ButtonQuote";
import iconMarvel from "../../assets/icons/marvel-icon.svg";
import iconChuckNorris from "../../assets/icons/chuck-norris-icon.svg";
import iconFamous from "../../assets/icons/famous-icon.svg";
import iconDonaldTrump from "../../assets/icons/donald-trump-icon.svg";
import iconAnime from "../../assets/icons/anime-icon.svg";
import iconBreakingBad from "../../assets/icons/breaking-bad-icon.svg";
import iconQuoteEs from "../../assets/icons/quote-es-icon.svg";
import PropTypes from "prop-types";
import LogoButton from "./LogoButton";
import { useQuote } from "../../hooks/useQuote";
import { useSelector } from "react-redux";

const QuotesContainer = () => {
  const {
    onFetchQuoteOfTheDay,
    onFetchBreakingBad,
    onFetchAnimechan,
    onFetchDonaldTrump,
    onFetchFamousPeople,
    onFetchChuckNorris,
    onFetchMarvel,
  } = useQuote();

  const loading = useSelector( (state) => state.quote.loading)

  return (
    <>
      <ButtonQuoteFancyYellow name="Marvel" onClick={onFetchMarvel} disabled={loading}>
        <LogoButton img={iconMarvel} name="Marvel" />
      </ButtonQuoteFancyYellow>
      <ButtonQuoteFancyYellow name="Chuck Norris" onClick={onFetchChuckNorris} disabled={loading}>
        <LogoButton img={iconChuckNorris} name="Chuck Norris" />
      </ButtonQuoteFancyYellow>
      <ButtonQuoteFancyYellow
        name="Famous People"
        onClick={onFetchFamousPeople} disabled={loading}>
        <LogoButton img={iconFamous} name="Famous People" />
      </ButtonQuoteFancyYellow>
      <ButtonQuoteFancyYellow name="Donald Trump" onClick={onFetchDonaldTrump} disabled={loading}>
        <LogoButton img={iconDonaldTrump} name="Donald Trump" />
      </ButtonQuoteFancyYellow>
      <ButtonQuoteFancyYellow name="Animechan" onClick={onFetchAnimechan} disabled={loading}>
        <LogoButton img={iconAnime} name="Animechan" />
      </ButtonQuoteFancyYellow>
      <ButtonQuoteFancyYellow name="Breaking Bad" onClick={onFetchBreakingBad} disabled={loading}>
        <LogoButton img={iconBreakingBad} name="Breaking Bad" />
      </ButtonQuoteFancyYellow>
      <ButtonQuoteFancyYellow
        name="Quote of the day"
        onClick={onFetchQuoteOfTheDay} disabled={loading}>
        <LogoButton img={iconQuoteEs} name="Quote of the day" />
      </ButtonQuoteFancyYellow>
    </>
  );
};

LogoButton.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};

export default QuotesContainer;
