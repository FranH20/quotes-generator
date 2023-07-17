import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../components/Logo";
import NavItems from "../components/NavItems";

const NavigatorContainer = styled.nav`
  ${tw`
    px-1
    w-full 
  `}
  height: var(--nav-height);
`;

const Wrapper = styled.div`
  ${tw`
    h-full
    flex 
    justify-between
  `}
`;

const Navigator = () => {
  
  return (
    <>
      <NavigatorContainer>
        <Wrapper>
          <Logo />
          <NavItems />
        </Wrapper>
      </NavigatorContainer>
    </>
  );
};

export default Navigator;
