import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { SCREENS } from "../../utils/responsive";
import { HamburgerContainer, ListContainer, NavItem, Wrapper } from "./twinStyle";

const menuItems = [
  {
    path: "inicio",
    title: "Inicio",
  },
  {
    path: "generador",
    title: "Generador",
  },
  {
    path: "citas",
    title: "Citas",
  },
  {
    path: "sobre-mi",
    title: "Sobre Mi",
  },
];

const NavItems = () => {
  const isDesktop = useMediaQuery({ minWidth: SCREENS.md });
  const ref = useRef();

  const showNavigator = () => {
    ref.current.style.right = "0";
  };
  const closeNavigator = () => {
    ref.current.style.right = "-100%";
  };

  if (isDesktop) {
    return (
      <Wrapper variant="desktop">
        <ListContainer>
          {menuItems.map(({ path, title }) => (
            <NavItem key={title}>
              <NavLink to={path}>{title}</NavLink>
            </NavItem>
          ))}
        </ListContainer>
      </Wrapper>
    );
  }

  return (
    <>
      <Bars3BottomRightIcon
        onClick={showNavigator}
        className="w-8 h-full cursor-pointer text-color-lightGreen self-center"
      />
      <Wrapper ref={ref} variant="mobile">
        <HamburgerContainer>
          <XMarkIcon onClick={closeNavigator} />
        </HamburgerContainer>
        <ListContainer>
          {menuItems.map(({ path, title }) => (
            <NavItem key={title}>
              <NavLink to={path} onClick={closeNavigator}>{title}</NavLink>
            </NavItem>
          ))}
        </ListContainer>
      </Wrapper>
    </>
  );
};

export default NavItems;
