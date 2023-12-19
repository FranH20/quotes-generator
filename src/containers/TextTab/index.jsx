import React, { useEffect } from "react";
import { FONTS } from "../../hooks/constants";
import { CLASSNAME_GENERATOR_IMAGE } from "../../utils/constants/imageGenerator";
import {
  elementFontFamilyChange,
  elementFontSizeChange,
  elementFontWeightChange,
  elementTextColorChange,
  getElementByClassName,
} from "../../utils/functions/Elements";
import { Label } from "../../components/Label";
import {
  Wrapper,
  LabelTextColor,
  InputColorText,
  LabelFontText,
  SelectText,
  WrapperFontSize,
  LabelFontTypeText,
  SelectFonts,
  InputRangeText,
} from "./twinStyle";

const TextTab = () => {
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
    <Wrapper>
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
        <fieldset>
          <Label className="block">Frase</Label>
          <InputRangeText
            onChange={changeSizeQuote}
            type="range"
            min="0"
            max="160"
            defaultValue="80"
          />
        </fieldset>
        <fieldset>
          <Label className="block">Autor</Label>
          <InputRangeText
            onChange={changeSizeAuthor}
            type="range"
            min="0"
            max="100"
            defaultValue="80"
          />
        </fieldset>
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
