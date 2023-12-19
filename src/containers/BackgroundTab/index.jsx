import React, { useEffect } from "react";
import { CLASSNAME_GENERATOR_IMAGE } from "../../utils/constants/imageGenerator";
import {
  elementImageChange,
  elementOpacityChange,
  getElementByClassName,
} from "../../utils/functions/Elements";
import {
  InputFileBackground,
  InputRangeBackground,
  LabelBackgroundImage,
  LabelBackgroundOpacity,
  Wrapper,
} from "./twinStyle";

const BackgroundTab = () => {
  let containerElement = null;

  useEffect(() => {
    containerElement = getElementByClassName(CLASSNAME_GENERATOR_IMAGE);
  }, []);

  const onUploadImage = (event) =>
    elementImageChange(event, containerElement.firstChild);

  const onOpacityChange = (event) =>
    elementOpacityChange(event, containerElement.firstChild);

  return (
    <Wrapper>
      <LabelBackgroundImage>Subir una imagen:</LabelBackgroundImage>
      <InputFileBackground
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={onUploadImage}
        className="file:bg-color-primary file:border-none file:cursor-pointer file:p-2 file:rounded file:text-color-lightGreen 
        hover:file:bg-color-third"
      />
      {/* <LabelBackgroundOpacity>Opacidad de la imagen</LabelBackgroundOpacity>
      <InputRangeBackground
        onChange={onOpacityChange}
        type="range"
        min="0"
        max="200"
        defaultValue="50"
      /> */}
    </Wrapper>
  );
};

export default BackgroundTab;
