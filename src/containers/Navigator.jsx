import React from "react";
import { NavLink } from "react-router-dom";
import { PATHLINKS } from "../hooks/constants";

const Navigator = () => {
  return (
    <nav className="flex items-center">
      <ul className="flex justify-around gap-5">
        {PATHLINKS.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link}
              className="text-lg text-white 
            font-semibold 
            hover:text-color-third
            transition duration-300 hover:ease-in"
            >
              {link[0].toUpperCase() + link.substring(1)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigator