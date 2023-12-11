import React from "react";

import styled from "styled-components";
import tw from "twin.macro";

const LogoContainer = styled.div`
  ${tw`
    flex items-center
    cursor-pointer
  `}
`;

const LogoImage = styled.img`
  ${tw`
    w-8 mr-2
  `};
`;

const LogoTitle = styled.span`
  ${tw`
  text-color-lightGreen
  text-lg
  font-bold 
  md:text-2xl
  [> b]:(text-color-hardGreen)
  `}
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage alt="Logo" src="/img/cita-derecha-90.svg" />
      <LogoTitle>frase<b>ando</b></LogoTitle>
    </LogoContainer>
  );
};

export default Logo;
