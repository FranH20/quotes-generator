import React from "react";
import PhraseGenerator from "../../components/PhraseGenerator";
import GeneratorEditor from "../../components/GeneratorEditor";
import { AsideBodyGenerator, RightGenerator, LeftGenerator } from "./twinStyle";

const BodyGenerator = () => {
  return (
    <AsideBodyGenerator>
      <LeftGenerator>
        <PhraseGenerator />
      </LeftGenerator>
      <RightGenerator>
        <GeneratorEditor />
      </RightGenerator>
    </AsideBodyGenerator>
  );
};

export default BodyGenerator;
