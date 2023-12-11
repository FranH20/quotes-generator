import styled from "styled-components";
import tw from "twin.macro";

export const NavigatorContainer = styled.nav`
  ${tw`
    px-1
    w-full 
  `}
  height: var(--nav-height);
`;

export const Wrapper = styled.div`
  ${tw`
    h-full
    flex 
    justify-between
  `}
`;
