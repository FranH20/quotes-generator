import React from "react";
import Logo from "../../components/Logo";
import NavItems from "../../components/NavItems";
import { NavigatorContainer, Wrapper } from "./twinStyle";

const Navigator = () => {
  return (
    <NavigatorContainer>
      <Wrapper>
        <Logo />
        <NavItems />
      </Wrapper>
    </NavigatorContainer>
  );
};

export default Navigator;
