import React from "react";
import codyImage from "../assets/cody.png";

const AboutMe = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-center">
        Acerca de mí persona
      </h1>
      <aside className="grid grid-cols-6 p-5 bg-vector-background">
        <article className="col-start-1 col-end-5 content-center">
          <p className="text-3xl leading-relaxed max-w-3xl text-justify">
            Hola mi nombre es <span className="font-bold text-color-primary">Franklin Carlos Huichi Contreras</span>, este proyecto es
            realizado para completar el bootcamp de Código Facilito. Este
            proyecto servirá como muestra de mi aprendizaje obtenido en el
            bootcamp de React aplicando los puntos más importantes de lo
            aprendido. Muchas gracias por valorar y usar el proyecto, saludos!!!.
          </p>
        </article>
        <figure className="col-start-5 col-end-7">
          <img src={codyImage} alt="cody image" className="h-[80%]" />
        </figure>
      </aside>
    </>
  );
};

export default AboutMe;
