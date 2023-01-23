import React from "react";

const BackgroundTab = ({ className, divContainerImage }) => {
  const onFileImageChange = (event) => {
    const divImage = divContainerImage.current.firstChild;
    const url = URL.createObjectURL(event.target.files[0]);
    divImage.style.backgroundImage = `url("${url}")`;
  };

  const onOpacityChange = (event) => {
    const divImage = divContainerImage.current.firstChild;
    divImage.style.filter = `brightness(${event.target.value}%)`;
  };

  return (
    <article className={`${className} grid grid-cols-10 gap-y-2`}>
      <h3 className="row-start-1 col-start-2 col-end-10 text-l">
        Subir una imagen:
      </h3>
      <input
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={onFileImageChange}
        className="row-start-2 col-start-2 col-end-10 bg-gray-200 border rounded w-full cursor-pointer
        file:border-none file:cursor-pointer file:bg-color-secondary file:text-white file:py-2 file:rounded file:mr-4 file:px-2
        hover:file:bg-color-third "
      />
      <h3 className="row-start-4 col-start-2 col-end-10 text-l">
        Opacidad de la imagen
      </h3>
      <input
        onChange={onOpacityChange}
        type="range"
        min="0"
        max="200"
        className="row-start-5 col-start-2 col-end-10 text-l"
        defaultValue="50"
      />
    </article>
  );
};

export default BackgroundTab;
