import React, { useEffect } from "react";
import { FONTS } from "../hooks/constants";
import { CLASSNAME_GENERATOR_IMAGE } from "../utils/constants/imageGenerator";
import {
  elementFontFamilyChange,
  elementFontSizeChange,
  elementFontWeightChange,
  elementTextColorChange,
  getElementByClassName,
} from "../utils/functions/Elements";
import tw from "twin.macro";
import { Label } from "../components/Label";
import { InputColor, InputRange } from "../components/Input";
import { Select } from "../components/Select";

const Wrapper = tw.article`
  grid 
  grid-cols-10  
  gap-y-2
`;

const LabelTextColor = tw(Label)`
  row-start-1 
  col-start-2 
  col-end-10
`;

const InputColorText = tw(InputColor)`
  row-start-2
  col-start-2
  col-end-10
`;

const LabelFontText = tw(Label)`
  row-start-3
  col-start-2
  col-end-10
`;

const SelectText = tw(Select)`
  row-start-4
  col-start-2
  col-end-10
`;

const WrapperFontSize = tw.div`
  row-start-5 
  col-start-2 
  col-end-10 
  flex 
  flex-col 
  gap-y-2
`;

const LabelFontTypeText = tw(Label)`
  row-start-6 
  col-start-2 
  col-end-10 
`;
const SelectFonts = tw(Select)`
  row-start-7
  col-start-2 
  col-end-10 
`;

const TextTab = ({ className }) => {
  let containerElement = null;

  useEffect(() => {
    containerElement = getElementByClassName(CLASSNAME_GENERATOR_IMAGE);
  }, []);

  const quoteTag = (element) => element.getElementsByTagName("p")[0];
  const authorTag = (element) => element.getElementsByTagName("span")[0];

  const changeTextColor = (event) =>
    elementTextColorChange(event, containerElement);

  const changeFontFamily = (event) =>
    elementFontFamilyChange(event, containerElement.parentElement);

  const changeSizeQuote = (event) =>
    elementFontSizeChange(event, quoteTag(containerElement));

  const changeSizeAuthor = (event) =>
    elementFontSizeChange(event, authorTag(containerElement));

  const changeFontWeight = (event) => {
    elementFontWeightChange(event, quoteTag(containerElement));
    elementFontWeightChange(event, authorTag(containerElement));
  };

  return (
    <Wrapper className={className}>
      <LabelTextColor>Cambiar el color del texto:</LabelTextColor>
      <InputColorText
        type="color"
        onChange={changeTextColor}
        className="cursor-pointer w-full"
        value="#000000"
      />
      <LabelFontText>Cambiar la fuente:</LabelFontText>
      <SelectText name="fonts" onChange={changeFontFamily}>
        <option defaultValue="Nunito">Escoge tu fuente</option>
        {FONTS.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </SelectText>
      <WrapperFontSize>
        <Label>Cambiar el tamaño de la fuente:</Label>
        <Label>Frase</Label>
        <InputRange
          onChange={changeSizeQuote}
          type="range"
          min="0"
          max="160"
          defaultValue="80"
        />
        <Label>Autor</Label>
        <InputRange
          onChange={changeSizeAuthor}
          type="range"
          min="0"
          max="100"
          defaultValue="80"
        />
      </WrapperFontSize>
      <LabelFontTypeText>Cambiar el tipo de fuente:</LabelFontTypeText>
      <SelectFonts name="weightFonts" onChange={changeFontWeight}>
        <option defaultValue="normal">Escoge tu tipo de fuente</option>
        <option value="normal">Normal</option>
        <option value="bold">Negrita</option>
        <option value="lighter">Ligero</option>
      </SelectFonts>
    </Wrapper>
  );
};

export default TextTab;
