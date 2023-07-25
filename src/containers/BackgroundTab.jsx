import React, { useEffect } from "react";
import { CLASSNAME_GENERATOR_IMAGE } from "../utils/constants/imageGenerator";
import {
  elementImageChange,
  elementOpacityChange,
  getElementByClassName,
} from "../utils/functions/Elements";
import tw from "twin.macro";
import { Label } from "../components/Label";
import { InputFile, InputRange } from "../components/Input";

const Wrapper = tw.article`
  grid 
  grid-cols-10 
  gap-y-2
`;

const LabelBackgroundImage = tw(Label)`
  row-start-1 
  col-start-2 
  col-end-10 
`;

const LabelBackgroundOpacity = tw(Label)`
  row-start-4 
  col-start-2 
  col-end-10
`;

const InputFileBackground = tw(InputFile)`
  row-start-2
  col-start-2
  col-end-10
`;

const InputRangeBackground = tw(InputRange)`
  row-start-5 
  col-start-2 
  col-end-10 
`;

const BackgroundTab = ({ className }) => {
  let containerElement = null;

  useEffect(() => {
    containerElement = getElementByClassName(CLASSNAME_GENERATOR_IMAGE);
  }, []);

  const onUploadImage = (event) =>
    elementImageChange(event, containerElement.firstChild);

  const onOpacityChange = (event) =>
    elementOpacityChange(event, containerElement.firstChild);

  return (
    <Wrapper className={className}>
      <LabelBackgroundImage>Subir una imagen:</LabelBackgroundImage>
      <InputFileBackground
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={onUploadImage}
        className="
        file:bg-color-secondary 
        file:border-none 
        file:cursor-pointer 
        file:mr-4 
        file:px-2
        file:py-2 
        file:rounded 
        file:text-white 
        hover:file:bg-color-third"
      />
      <LabelBackgroundOpacity>Opacidad de la imagen</LabelBackgroundOpacity>
      <InputRangeBackground
        onChange={onOpacityChange}
        type="range"
        min="0"
        max="200"
        defaultValue="50"
      />
    </Wrapper>
  );
};

export default BackgroundTab;
