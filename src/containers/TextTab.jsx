import React from "react";
import { FONTS } from "../hooks/constants";

const TextTab = ({ className, divContainerImage }) => {
  function changeTextColor(event) {
    divContainerImage.current.style.color = event.target.value;
  }

  function changeFontFamily(event) {
    divContainerImage.current.style.fontFamily = event.target.value;
  }

  function changeSizeQuote(event) {
    let text =
      divContainerImage.current.getElementsByTagName("div")[1].firstChild;
    text.style.fontSize = event.target.value + "px";
  }
  function changeSizeAuthor(event) {
    let author = divContainerImage.current.getElementsByTagName("span")[0];
    author.style.fontSize = event.target.value + "px";
  }
  function changeFontWeight(event) {
    let text =
      divContainerImage.current.getElementsByTagName("div")[1].firstChild;
    let author = divContainerImage.current.getElementsByTagName("span")[0];
    text.style.fontWeight = event.target.value;
    author.style.fontWeight = event.target.value;
  }
  return (
    <article className={`${className} grid grid-cols-10  gap-y-5`}>
      <div className="row-start-1 col-start-2 col-end-10 flex flex-col gap-y-2">
        <h3 className="text-l">Cambiar el color del texto:</h3>
        <input
          onChange={changeTextColor}
          type="color"
          className="cursor-pointer w-full"
          value="#000000"
        />
      </div>
      <div className="row-start-2 col-start-2 col-end-10 flex flex-col gap-y-2">
        <h3 className="text-l">Cambiar la fuente:</h3>
        <select
          name="fonts"
          onChange={changeFontFamily}
          className="bg-gray-200 cursor-pointer px-3 py-1.5 rounded border border-solid
        appearance-none text-gray-700 focus:border-color-secondary focus:outline-none"
        >
          <option defaultValue="Nunito">Escoge tu fuente</option>
          {FONTS.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div className="row-start-3 col-start-2 col-end-10 flex flex-col gap-y-2">
        <h3 className="text-l">Cambiar el tamaño de la fuente:</h3>
        Frase
        <input
          onChange={changeSizeQuote}
          type="range"
          min="0"
          max="160"
          className="text-l"
          defaultValue="80"
        />
        Autor
        <input
          onChange={changeSizeAuthor}
          type="range"
          min="0"
          max="100"
          className="text-l"
          defaultValue="80"
        />
      </div>
      <div className="row-start-4 col-start-2 col-end-10 flex flex-col gap-y-2">
        <h3 className="text-l">Cambiar el tipo de fuente:</h3>
        <select
          name="fonts"
          onChange={changeFontWeight}
          className="bg-gray-200 cursor-pointer px-3 py-1.5 rounded border border-solid
        appearance-none text-gray-700 focus:border-color-secondary focus:outline-none"
        >
          <option defaultValue="normal">Escoge tu tipo de fuente</option>
          <option value="normal">Normal</option>
          <option value="bold">Negrita</option>
          <option value="lighter">Ligero</option>
        </select>
      </div>
    </article>
  );
};

export default TextTab;
