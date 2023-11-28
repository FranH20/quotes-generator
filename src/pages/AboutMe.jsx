import React from "react";
import codyImage from "../assets/cody.png";
import { Title } from "../components/Title";

const AboutMe = () => {
  return (
    <>
      <Title name="Acerca de mí persona" />
      <aside className="grid grid-cols-1 p-5 gap-y-5 lg:grid-cols-2 lg:grid-rows-1 max-h-[500px] max-w-[1500px] m-auto">
        <article className="row-start-1 row-end-2 content-center flex justify-center items-center">
          <p className="text-2xl lg:text-3xl leading-10 max-w-3xl">
            Hola mi nombre es <span className="font-bold text-color-primary">Franklin Carlos Huichi Contreras</span>, este proyecto es
            realizado para completar el bootcamp de Código Facilito. Este
            proyecto servirá como muestra de mi aprendizaje obtenido en el
            bootcamp de React aplicando los puntos más importantes de lo
            aprendido. Muchas gracias por valorar y usar el proyecto, saludos!!!.
          </p>
        </article>
        <figure className="lg:col-start-2  lg:row-start-1 lg:row-end-2 row-start-2 row-end-3 flex justify-center items-center">
          <img src={codyImage} alt="cody image" className="h-auto w-[50%]" />
        </figure>
      </aside>
    </>
  );
};

export default AboutMe;
