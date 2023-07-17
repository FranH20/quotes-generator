import React from "react";
import tw from "twin.macro";

const H1 = tw.h1`text-3xl font-bold lg:text-4xl`;
const HeaderTitle = tw(H1)`p-8 text-center`;

export const TitleLogo = ({ name }) => <H1 tw="text-white">{name}</H1>;
export const Title = ({ name }) => <HeaderTitle>{name}</HeaderTitle>;

