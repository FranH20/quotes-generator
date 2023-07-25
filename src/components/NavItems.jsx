import React, { useRef } from "react";
import tw, { styled } from "twin.macro";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { SCREENS } from "../utils/responsive";

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

const HamburgerContainer = tw.div`
  h-[var(--nav-height)] 
  flex
  flex-row-reverse
  [> svg]:(
    h-full 
    w-8 
    text-white
    mr-[32px]
    cursor-pointer
  )
`;

const containerVariants = {
  mobile: tw`
    fixed	
    -right-full
    w-2/4
    transition-all
    duration-500
    ease-in-out
    [> ul]:(
      flex-col
      gap-y-3 
      relative
      h-full
      px-6 pt-5
    )
      `,
  desktop: tw`
    [> ul]:(
      h-full
      gap-x-5
      items-center
    )
  `,
};

const ListContainer = tw.ul`flex`;

const NavItem = tw.li`
  [> a]:(
    cursor-pointer
    rounded-lg
    block
    p-3
    font-semibold	
    text-white
    text-xl
    md:text-xl
    md:hover:text-color-third 
    sm:max-md:hover:bg-color-primary
    transition-all
    delay-100
  )`;

const Wrapper = styled.div(() => [
  tw`
    bg-color-secondary
    h-full
    z-50
    `,
  ({ variant = "mobile" }) => containerVariants[variant],
]);

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
        className="w-8 h-full cursor-pointer text-white self-center"
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
