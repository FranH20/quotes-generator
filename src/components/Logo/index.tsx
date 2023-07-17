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
    w-5 mr-2
  `};
`;

const LogoTitle = styled.span`
  ${tw`
    text-white
    text-lg
    font-bold 
    md:text-2xl
  `}
`;

const Logo = () => {
  
  return (
    <>
      <LogoContainer>
        <LogoImage alt="Logo" src="/img/cita-derecha-90.svg" />
        <LogoTitle>Franseando</LogoTitle>
      </LogoContainer>
    </>
  );
};

export default Logo;
