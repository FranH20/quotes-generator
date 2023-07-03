import React from "react";

import tw from "twin.macro";
import { NavLink } from "react-router-dom";

import { TitleLogo } from "../components/Title";
import citaImage from "../assets/cita-derecha-90.svg";

const NavigatorContainer = tw.nav`flex justify-between py-5`;
const NavigatorItem = tw.div`flex items-center`;
const NavigatorLogo = tw.img`w-9 mr-2`;
const NavigatorLinks = tw.ul`
  flex justify-around gap-5
  [> li > a]:(text-2xl p-2 text-white font-semibold 
  hover:text-color-third transition duration-200 hover:ease-in)`;

const Navigator = () => {
  return (
    <>
      <NavigatorContainer>
        <NavigatorItem>
          <NavigatorLogo src={citaImage} alt="Logo" />
          <TitleLogo name="FRASES" />
        </NavigatorItem>
        <NavigatorItem>
          <NavigatorLinks>
            <li>
              <NavLink to="inicio">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="generador">Generador</NavLink>
            </li>
            <li>
              <NavLink to="citas">Citas</NavLink>
            </li>
            <li>
              <NavLink to="sobre mi">Sobre mi</NavLink>
            </li>
          </NavigatorLinks>
        </NavigatorItem>
      </NavigatorContainer>
    </>
  );
};

export default Navigator;
