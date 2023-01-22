import React from "react";
import { ButtonQuote } from "../components/ButtonQuote";
import iconMarvel from "../assets/icons/marvel-icon.svg";
import iconChuckNorris from "../assets/icons/chuck-norris-icon.svg";
import iconFamous from "../assets/icons/famous-icon.svg";
import iconDonaldTrump from "../assets/icons/donald-trump-icon.svg";
import iconAnime from "../assets/icons/anime-icon.svg";
import iconBreakingBad from "../assets/icons/breaking-bad-icon.svg";
import {
  getQuoteNorris,
  getMarvel,
  getRandomNinja,
  getRandomTrump,
  getRandomAnimechan,
  getRandomBreakingBad,
} from "../hooks/fetchQuotes";

const QuotesContainer = ({ className, setQuote }) => {
  return (
    <section className={className}>
      <ButtonQuote
        name="Marvel"
        className="bg-red-600 hover:bg-red-500 text-white"
        img={iconMarvel}
        onClick={() => getMarvel(setQuote)}
      />
      <ButtonQuote
        name="Chuck Norris"
        className="bg-yellow-400 hover:bg-yellow-300 text-black"
        img={iconChuckNorris}
        onClick={() => getQuoteNorris(setQuote)}
      />
      <ButtonQuote
        name="Famous People"
        className="bg-blue-700 hover:bg-blue-600 text-white"
        img={iconFamous}
        onClick={() => getRandomNinja(setQuote)}
      />
      <ButtonQuote
        name="Donald Trump"
        className="bg-gray-200 hover:bg-gray-100 text-black"
        img={iconDonaldTrump}
        onClick={() => getRandomTrump(setQuote)}
      />
      <ButtonQuote
        name="Animechan"
        className="bg-amber-500 hover:bg-amber-400 text-black"
        img={iconAnime}
        onClick={() => getRandomAnimechan(setQuote)}
      />

      <ButtonQuote
        name="Breaking Bad"
        className="bg-green-500 hover:bg-green-400 text-black"
        img={iconBreakingBad}
        onClick={() => getRandomBreakingBad(setQuote)}
      />
    </section>
  );
};

export default QuotesContainer;
