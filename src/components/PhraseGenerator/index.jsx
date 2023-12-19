import React, { useEffect, useRef } from "react";
import {
  CLASSNAME_GENERATOR_IMAGE,
  topButtons,
} from "../../utils/constants/imageGenerator";
import { SCREENS } from "../../utils/responsive";
import {
  Creator,
  CreatorBox,
  CreatorBoxAuthorQuote,
  CreatorBoxImage,
  CreatorBoxTitleQuote,
  OptionsSizeContainer,
  PhraseGeneratorContainer,
  WrapperCreator,
  WrapperGenerator,
} from "./twinStyle";

import { ButtonQuoteFancyYellow } from "../ButtonQuote";
import { useSelector } from "react-redux";
import { setResizeWindow } from "../../utils/functions/resizeElements";

const PhraseGenerator = () => {
  const data = useSelector((state) => state.quote.data);
  const phraseContainer = useRef();

  useEffect(() => {
    handleSizeImage(320, 320);
  }, []);

  const handleSizeImage = (width = 320, height = 320) => {
    let widthDiv =
      phraseContainer.current.parentElement.parentElement.offsetWidth;
    let [w, h] = setResizeWindow(width, height, widthDiv);
    phraseContainer.current.style.width = w + "px";
    phraseContainer.current.style.height = h + "px";
    phraseContainer.current.setAttribute("original-width", width)
    phraseContainer.current.setAttribute("original-height", height)
  };

  return (
    <PhraseGeneratorContainer>
      <WrapperGenerator>
        <OptionsSizeContainer>
          {topButtons.map(({ name, size }) => (
            <ButtonQuoteFancyYellow
              key={name}
              onClick={() => handleSizeImage(size.width, size.height)}
              name={name}
            />
          ))}
        </OptionsSizeContainer>
        <WrapperCreator>
          <Creator>
            <CreatorBox
              ref={phraseContainer}
              className={CLASSNAME_GENERATOR_IMAGE}
            >
              <CreatorBoxImage />
              <CreatorBoxTitleQuote>
                <p>{data.quote}</p>
              </CreatorBoxTitleQuote>
              <CreatorBoxAuthorQuote>{data.author}</CreatorBoxAuthorQuote>
            </CreatorBox>
          </Creator>
        </WrapperCreator>
      </WrapperGenerator>
    </PhraseGeneratorContainer>
  );
};

export default PhraseGenerator;
