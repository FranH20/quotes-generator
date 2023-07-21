import React, { useRef } from "react";
import tw from "twin.macro";

const topButtons = [
  {
    name: "Cuadrado",
    size: {
      width: "320px",
      height: "320px",
    },
  },
  {
    name: "Horizontal",
    size: {
      width: "470px",
      height: "550px",
    },
  },
  {
    name: "Vertical",
    size: {
      width: "470px",
      height: "340px",
    },
  },
];

const ButtonBase = tw.button`
    bg-color-fourth 
    hover:bg-color-secondary
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

const PhraseGeneratorContainer = tw.section`
    w-full
`;

const PhraseGenerator = () => {
  const phraseContainer = useRef() as React.MutableRefObject<HTMLDivElement>;

  const handleSizeImage = (width = "320px", height = "320px") => {
    phraseContainer.current.style.width = width;
    phraseContainer.current.style.height = height;
  };

  return (
    <PhraseGeneratorContainer>
      <WrapperGenerator>
        {topButtons.map(({ name, size }) => (
          <ButtonBase
            key={name}
            onClick={() => handleSizeImage(size.width, size.height)}
          >
            {name}
          </ButtonBase>
        ))}
        <WrapperCreator>
          <Creator>
            <CreatorBox ref={phraseContainer}>
              <div className="div-image-generator bg-[url('/img/background-example.jpg')] absolute w-full h-full bg-cover"></div>
              <div className="absolute left-2/4 top-[45%] -translate-x-2/4 -translate-y-1/2 w-full px-8">
                <p className="text-2xl text-center">
                  El único modo de hacer un gran trabajo es amar lo que haces
                </p>
              </div>
              <span className="absolute left-2/4 top-[85%] -translate-x-2/4 text-xl">
                - Steve Jobs
              </span>
            </CreatorBox>
          </Creator>
        </WrapperCreator>
      </WrapperGenerator>
    </PhraseGeneratorContainer>
  );
};

export default PhraseGenerator;
