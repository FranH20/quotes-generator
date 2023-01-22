import React from "react";
import { Outlet } from "react-router-dom";
import Navigator from "../containers/Navigator";
import Footer from "../containers/Footer";
import citaImage from '../assets/cita-derecha-90.svg';

function Root() {
  return (
    <>
      <header className="flex bg-color-secondary justify-between px-8 ">
        <div className="flex items-center">
          <img src={citaImage} alt="Cita" className="w-9 mr-2"/>
          <h1 className="m-auto my-8 text-4xl font-bold text-white">FRASES</h1>
        </div>
        <Navigator />
      </header>
      <main className="p-8 bg-vector-background min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Root;
