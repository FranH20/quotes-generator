import React from "react";
import tw from "twin.macro";

const H1 = tw.h1`text-4xl font-bold`;
const HeaderTitle = tw(H1)`m-8 text-center`;

export const TitleLogo = ({ name }) => <H1 tw="text-white">{name}</H1>;
export const Title = ({ name }) => <HeaderTitle>{name}</HeaderTitle>;

