import React, { useEffect, useRef } from "react";
import tw from "twin.macro";
import {
  CLASSNAME_GENERATOR_IMAGE,
  topButtons,
} from "../../utils/constants/imageGenerator";
import { useDispatch, useSelector } from "react-redux";
import { getQuoteData } from "../../redux/selectors";
import { getQuote } from "../../redux/actions/quote-actions";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../utils/responsive";

const ButtonBase = tw.button`
    bg-color-fourth 
    drop-shadow-lg
    text-center
    rounded-lg
    uppercase
    font-bold 
    border
    py-2
    `;

const WrapperGenerator = tw.article`
    grid 
    grid-cols-3
    gap-x-2
    gap-y-5
`;

const WrapperCreator = tw.article`
    flex
    justify-center
    col-span-3
`;

const Creator = tw.div`
    relative 
    inline-block 
    overflow-hidden
    text-white
`;

const CreatorBox = tw.div`
    overflow-hidden
    transition-all
    duration-300
    w-[320px]
    h-[320px]
`;

const CreatorBoxImage = tw.div`
  bg-[url('/img/background-example.jpg')] 
  absolute 
  bg-cover
  w-full 
  h-full 
`;

const CreatorBoxTitleQuote = tw.div`
  -translate-x-2/4 
  -translate-y-1/2 
  top-[45%] 
  absolute 
  left-2/4 
  w-full 
  px-8
  [> p]:(
    text-2xl 
    text-center
  )
`;

const CreatorBoxAuthorQuote = tw.span`
  -translate-x-2/4 
  top-[85%] 
  absolute 
  left-2/4 
  text-xl
`;

const PhraseGeneratorContainer = tw.section`
    w-full
`;

const PhraseGenerator = () => {
  const dispatch = useDispatch();
  const quote = useSelector(getQuoteData);
  const isDesktop = useMediaQuery({ minWidth: SCREENS.md });

  useEffect(() => {
    dispatch(getQuote);
  }, []);

  const phraseContainer = useRef() as React.MutableRefObject<HTMLDivElement>;

  const handleSizeImage = (width = 320, height = 320) => {
    let x = window.matchMedia(`(min-width: ${SCREENS.lg})`);
    if (x.matches) {
      width = width * 2;
      height = height * 2;
      console.table([width, height])
    }
    phraseContainer.current.style.width = width + "px";
    phraseContainer.current.style.height = height + "px";
  };

  return (
    <PhraseGeneratorContainer>
      <WrapperGenerator>
        {topButtons.map(({ name, size }) => (
          <ButtonBase
            key={name}
            className="hover:bg-color-secondary hover:text-white focus:bg-color-secondary focus:text-white"
            onClick={(e) => handleSizeImage(size.width, size.height)}
          >
            {name}
          </ButtonBase>
        ))}
        <WrapperCreator>
          <Creator>
            <CreatorBox
              ref={phraseContainer}
              className={CLASSNAME_GENERATOR_IMAGE}
            >
              <CreatorBoxImage />
              <CreatorBoxTitleQuote>
                <p>{quote.text}</p>
              </CreatorBoxTitleQuote>
              <CreatorBoxAuthorQuote>{quote.author}</CreatorBoxAuthorQuote>
            </CreatorBox>
          </Creator>
        </WrapperCreator>
      </WrapperGenerator>
    </PhraseGeneratorContainer>
  );
};

export default PhraseGenerator;
