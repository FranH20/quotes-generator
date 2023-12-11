import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const linksVariants = {
  green: tw`text-color-lightGreen bg-color-primary border-color-lightGreen`,
  calypso: tw`text-color-lightGreen bg-color-fourth border-color-lightGreen`
};

const ContainerLinkButton = styled.div(({ variant = "green" }) => [
  tw`rounded-full text-center border`,
  linksVariants[variant],
]);

export const LinkButton = ({ variant, children }) => {
  return (
    <ContainerLinkButton variant={variant}>{children}</ContainerLinkButton>
  );
};

export const GreenLinkButton = ({ children }) => {
  return <LinkButton variant="green">{children}</LinkButton>;
};

export const CalypsoLinkButton = ({ children }) => {
  return <LinkButton variant="calypso">{children}</LinkButton>;
};
