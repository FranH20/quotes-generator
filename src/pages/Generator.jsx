import React from "react";
import { Title } from "../components/Title";
import PhraseGenerator from "../components/PhraseGenerator";
import GeneratorEditor from "../components/GeneratorEditor";
import tw from "twin.macro";

const Wrapper = tw.aside`
    flex  
    flex-row	
    flex-wrap 
    gap-y-10
    mb-10
    lg:flex-nowrap
`;

const Generator = () => {
  return (
    <>
      <Title name="Genera tu frase aqui" />
      <Wrapper>
        <PhraseGenerator />
        <GeneratorEditor />
      </Wrapper>
    </>
  );
};

export default Generator;
